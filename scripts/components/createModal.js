import { dates } from '../utils/dateConverter.js';
import { genre } from '../utils/genre.js';
import { seasons } from '../utils/season.js';
import { podcasts } from '../../data.js';

/**
 * Opens the podcast detail modal with the provided podcast data.
 * @param {Object} podcast - The podcast data object.
 * @param {string} podcast.title - The title of the podcast.
 * @param {string} podcast.image - The URL of the podcast image.
 * @param {string} podcast.description - The description of the podcast.
 * @param {Array<number>} podcast.genres - The array of genre IDs.
 * @param {string} podcast.updated - The last updated date of the podcast.
 * @param {number} podcast.id - The unique identifier of the podcast.
 * @param {Array<Object>} podcast.seasons - The array of seasons for the podcast.
 * @param {string} podcast.seasons[].title - The title of the season.
 * @param {number} podcast.seasons[].episodes - The number of episodes in the season.
 * @returns {HTMLElement} The created modal element.
 */

/*
const template = document.createElement('template');
template.innerHTML = `
    <style>
        
    <style>

    <dialog id="podcast-modal" class="modal">
        <div class="modal-header">
            <h2 class="modal-title"></h2>
            <p class="close-modal" aria-label="Close Modal">&times;</p>
        </div>
        <div class="modal-content">
            <img src="" alt="Podcast Image" class="modal-podcast-image">
            <div class="modal-details">
                <h3>Description</h3>
                <p class="title-description"></p>
                <div class="modal-genres">
                    <h3>Genres</h3>
                    <div class="genres-list"></div>
                </div>
                <p class="updated-date"></p>
            </div>
        </div>
        <div class="seasons-info">
            <h3>Seasons</h3>
            <div class="seasons-list">

            </div>
        </div>
    </dialog>
`;

export class PodcastModal extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(template.content.cloneNode(true));
        this.element = {
            modal: shadowRoot.querySelector('#podcast-modal'),
            title: shadowRoot.querySelector('.modal-title'),
            image: shadowRoot.querySelector('.modal-podcast-image'),
            description: shadowRoot.querySelector('.title-description'),
            genresList: shadowRoot.querySelector('.genres-list'),
            updatedDate: shadowRoot.querySelector('.updated-date'),
            seasonsList: shadowRoot.querySelector('.seasons-list'),
            closeButton: shadowRoot.querySelector('.close-modal'),
        };
        const closeButton = document.getElementById('close-modal');
        this.closeButton.addEventListener('click', () => {
            this.element.modal.close();
        });
    }

    setPodcast(podcast) {
        this.element.title.textContent = podcast.title;
        this.element.image.src = podcast.image;
        this.element.description.textContent = podcast.description;
        this.element.updatedDate.textContent = `Last Updated: ${dates.formatDate(podcast.updated)}`;
        this.element.genresList.innerHTML = genre.getGenreNames(podcast.genres).map(g => `
            <span class="genre">${g}</span>
            `).join('');
        this.element.seasonsList.innerHTML = seasons.getSeasonsList(podcast.id).map((seasonTitle, index) => `
            <div class="season-item"><p>Season ${index + 1}: ${seasonTitle.title}</p>
            <p> ${seasonTitle.episodes} Episodes </p>
            </div>
        `).join('');
    }

    open() {
        this.element.modal.showModal();
    }
}

customElements.define('podcast-modal', PodcastModal);
*/


export function createModal(podcast) {
    const modal = document.createElement('dialog');
    modal.id = 'podcast-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-section">
            <div class="modal-header">
                <h2 class="modal-title">${podcast.title}</h2>
                <button class="close-modal" aria-label="Close Modal">&times;</button>
            </div>
            <div class="modal-content">
                <img src="${podcast.image}" alt="Podcast Image" class="modal-podcast-image">
                <div class="modal-details">
                    <h3>Description</h3>
                    <p class="title-description">${podcast.description}</p>
                    <div class="modal-genres">
                        <h3>Genres</h3>
                        ${genre.getGenreNames(podcast.genres).map(g => `
                            <span class="genre">${g}</span>
                            `).join('')}
                    </div>
                    <p>Last Updated: ${dates.formatDate(podcast.updated)}</p>
                </div>
            </div>
            <div class="seasons-info">
                <h3>Seasons</h3>
            
                <div class="seasons-list">
                    ${seasons.getSeasonsList(podcast.id).map((seasonTitle, index) => `
                        <div class="season-item"><p>Season ${index + 1}: ${seasonTitle.title}</p>
                        <p> ${seasonTitle.episodes} Episodes </p>
                        </div>
                    `).join('')}
                    
                </div>

            </div>
            
        </div>
    `;

    document.body.appendChild(modal);
    const closeModalButton = modal.querySelector('.close-modal');
    closeModalButton.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent page reload 
        // if button is inside a form or has default behavior
        modal.close();
        document.body.removeChild(modal);
    });
    modal.showModal();
}