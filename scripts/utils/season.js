import { seasons as seasonsData } from '../data.js';

/**
 * Utility functions for season handling.
 * @module seasons
 * 
 */
export const seasons = {
  getSeasonsList(showId) {
    const matched = seasonsData.find(s => s.id === showId);
    if (!matched || !Array.isArray(matched.seasonDetails)) return [];
    return matched.seasonDetails.map(sd => ({
      title: sd.title || 'Unknown',
      episodes: sd.episodes || 0
    }));
  }
};

