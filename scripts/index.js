import { PodcastCard } from "./components/createCard.js";
import { podcasts } from "../data.js";


const podcastCardsContainer = document.getElementById('podcast-container');

/**
 * Renders all podcast cards into the podcast cards container and modal.
 * 
 */
function renderPodcastCards() {
    podcastCardsContainer.innerHTML = ''; // Clear existing cards
    podcasts.forEach(podcast => {
        const card = new PodcastCard();
        card.setPodcast(podcast);
        podcastCardsContainer.appendChild(card);
    });
}


// Initial rendering of podcast cards

renderPodcastCards();
