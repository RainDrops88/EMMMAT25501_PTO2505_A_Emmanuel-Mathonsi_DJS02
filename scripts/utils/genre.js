import { genres } from '../data.js';

/**
 * Utility functions for genre handling.
 * @module genre
 * 
 */
export const genre = {
  getGenreNames(genreIds) {
    return genreIds.map(id => {
      return genres.find(genre => genre.id === id)?.title|| 'Unknown';
    });
  }
};

