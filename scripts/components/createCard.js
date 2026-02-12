import {dateConverter} from '../utils/dateConverter.js';
import {genre} from '../utils/genre.js';
import { seasons } from '../utils/season.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .card {
        background-color: #f5f5f5;
        border-radius: 8px;
        padding: 0.8rem;
        width: 17rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    .card img {
        width: 100%;
        height: auto;
        border-radius: 4px;
    }
    .card h3 {
        margin: 0.5rem 0;
        font-size: 1.2rem;
    }
    .card p {
        margin: 0.3rem 0;
        color: #555;
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

class CreateCard extends HTMLElement {
    constructor() { 
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.element = {
            card: shadowRoot.querySelector('.card'),
            img: shadowRoot.querySelector('img'),
            title: shadowRoot.querySelector('.title'),
            seasons: shadowRoot.querySelector('.seasons'),
            genres: shadowRoot.querySelector('.genres'),
            updatedDate: shadowRoot.querySelector('.updated-date'),
        };
    }


}
