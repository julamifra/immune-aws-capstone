const BLOG_API_URL = import.meta.env.VITE_BLOG_API_URL?.replace(/\/$/, '');
const API_PAGE_LIMIT = 50;
const EVENTS_API_URL =
  import.meta.env.VITE_EVENTS_API_URL?.replace(/\/$/, '') ??
  BLOG_API_URL?.replace(/\/blog$/, '/events');

const ensureBlogApiUrl = () => {
  if (!BLOG_API_URL) {
    throw new Error(
      'Falta configurar VITE_BLOG_API_URL para consumir el blog desde API Gateway.'
    );
  }
};

const fetchBlogPostsPage = async (nextToken) => {
  ensureBlogApiUrl();

  const url = new URL(BLOG_API_URL);
  url.searchParams.set('limit', `${API_PAGE_LIMIT}`);

  if (nextToken) {
    url.searchParams.set('nextToken', nextToken);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Blog API request failed with status ${response.status}`);
  }

  const payload = await response.json();

  return {
    items: Array.isArray(payload.items) ? payload.items : [],
    nextToken: payload.nextToken ?? null,
  };
};

export const awsClient = {
  fetchBlogPostsPage,
  async postUserEvent(payload) {
    if (!EVENTS_API_URL) {
      return;
    }

    await fetch(EVENTS_API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  },
};
