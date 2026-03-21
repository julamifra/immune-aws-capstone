import { supabase } from '../lib/supabaseClient';

export async function fetchGoogleReviews(placeId, forceRefresh = false) {
  try {
    const { data, error } = await supabase.functions.invoke('google-reviews', {
      body: {
        placeId: placeId,
        forceRefresh: forceRefresh,
      },
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    throw error;
  }
}
