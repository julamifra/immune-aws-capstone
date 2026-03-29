import { awsClient } from '@/lib/awsClient';

const escapeHtml = (value = '') =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const normalizePost = (item) => {
  const tags = Array.isArray(item.tags) ? item.tags : [];
  const category = typeof item.category === 'string' ? item.category : '';
  const content =
    typeof item.content === 'string' && item.content.trim() ? item.content : '';

  return {
    ...item,
    id: item.postId,
    date: item.publishedAt ?? item.updatedAt ?? item.createdAt,
    image_slug: item.coverImageUrl ?? '',
    category: category || tags.join(', '),
    excerpt:
      typeof item.excerpt === 'string'
        ? item.excerpt
        : escapeHtml(String(item.excerpt ?? '')),
    content_json:
      Array.isArray(item.content_json) && item.content_json.length > 0
        ? item.content_json
        : content
          ? [
              {
                content: `<p>${escapeHtml(content)}</p>`,
              },
            ]
          : [],
  };
};

const fetchAllPublishedPosts = async () => {
  const items = [];
  let nextToken = null;

  do {
    const page = await awsClient.fetchBlogPostsPage(nextToken);
    items.push(...page.items.map(normalizePost));
    nextToken = page.nextToken;
  } while (nextToken);

  return items;
};

const matchesSearch = (post, searchTerm) => {
  if (!searchTerm) {
    return true;
  }

  const query = searchTerm.trim().toLowerCase();

  return [post.title, post.excerpt, post.category, ...(post.tags ?? [])]
    .filter(Boolean)
    .some((value) => String(value).toLowerCase().includes(query));
};

const matchesCategory = (post, selectedCategory) => {
  if (!selectedCategory || selectedCategory === 'Todos') {
    return true;
  }

  return String(post.category ?? '')
    .toLowerCase()
    .includes(selectedCategory.toLowerCase());
};

export const fetchNews = async (
  page,
  itemsPerPage,
  searchTerm,
  selectedCategory
) => {
  const allPosts = await fetchAllPublishedPosts();
  const filteredPosts = allPosts.filter(
    (post) =>
      matchesSearch(post, searchTerm) && matchesCategory(post, selectedCategory)
  );

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return {
    data: filteredPosts.slice(startIndex, endIndex),
    count: filteredPosts.length,
  };
};

export const fetchNewsArticleBySlug = async (slug) => {
  if (!slug) {
    return null;
  }

  const allPosts = await fetchAllPublishedPosts();

  return allPosts.find((post) => post.slug === slug) ?? null;
};
