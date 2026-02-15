import {dates} from '../utils/dateConverter.js';
import {genre} from '../utils/genre.js';
import { createModal} from './createModal.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .card {
        background: #def2f9c5;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.2s;
    }
    .card:hover {
        transform: scale(1.02);
    }

    .card img {
        width: 100%;
        border-radius: 6px;
}

    .card h3 {
        margin: 0.5rem 0;
    }

     .card p {
        margin: 0px;
        font-size: 0.8rem;
        color: var(--grey-text);
    }

    .tags {
        margin: 0.5rem 0;
    }

    .genre {
        background: #eee;
        padding: 0.3rem 0.6rem;
        margin-right: 0.5rem;
        margin-top: 0.5rem;
        border-radius: 4px;
        display: inline-block;
        font-size: 0.8rem;
    }

    .updated-text {
        font-size: 0.8rem;
        color: var(--grey-text);
    }

    </style>
    <div class="card">
        <img/>
        <h3 class="title"></h3>
        <p class="seasons"></p>
        <p class="genres"></p>
        <p class="updated-date"></p>
    </div>
`;

export class PodcastCard extends HTMLElement {
    constructor() { 
        super();
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.element = {
            card: shadowRoot.querySelector('.card'),
            img: shadowRoot.querySelector('img'),
            title: shadowRoot.querySelector('.title'),
            seasons: shadowRoot.querySelector('.seasons'),
            genres: shadowRoot.querySelector('.genres'),
            updatedDate: shadowRoot.querySelector('.updated-date'),
        };

        this.cardClick = this.cardClick.bind(this);
        this.element.card.addEventListener('click', (event) => {
            event.stopPropagation();
            this.cardClick();
        });
    }

    cardClick() {
        const modal = createModal(this._podcast);
        document.body.appendChild(modal);
        modal.showModal();
    }

    /** 
     * Set the podcast data for this card and trigger a re-render.
     * @param {Object} podcast - The podcast data to display on the card.
     */
    setPodcast(podcast) {
        this._podcast = podcast;
        this.renderPodcast();
    }

    /** 
     * Update the card's content based on the current podcast data.
     * This method is called whenever the podcast data is set or updated.
     */
    renderPodcast() {
        if (!this._podcast) return;

        const { title, image, seasons: seasonCount, genres: genreIds, updated } = this._podcast;
        const genreNames = genre.getGenreNames(genreIds);
        this.element.img.src = image;
        this.element.img.alt = `Image for ${title}`;
        this.element.title.textContent = title;
        this.element.seasons.textContent = `${seasonCount} season${seasonCount > 1 ? 's' : ''}`;
        this.element.genres.innerHTML = genreNames.map(name => `<span class="genre">${name}</span>`).join("");
        this.element.updatedDate.textContent = dates.formatDate(updated);
    }
}

customElements.define('podcast-card', PodcastCard);