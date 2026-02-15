# Web Component: Podcast Preview

## Overview

In this project, I will build a reusable and encapsulated **custom HTML element** that displays a podcast preview. The component must follow the **Web Component standard**, using `customElements.define()` and should work independently from the main application logic. This component will enhance modularity, promote reuse, and reduce code duplication across the app.

The component should be designed to **accept podcast data via attributes or properties**, display relevant UI elements (such as title, cover image, and genres), and **communicate with the main application** through custom events.

---

## Tools

![Git](https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-circle&logo=github)
![HTML5](https://img.shields.io/badge/-HTML5-black?style=flat-circle&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-black?style=flat-circle&logo=css3)
![MARKDOWN](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&amp;logo=markdown&amp;logoColor=white)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)

---

## Core Objectives

### Web Component Functionality

- Create a **custom HTML element** using `customElements.define()`.
- Accept data (cover image, title, genres, number of seasons, and last updated date) **as attributes or properties**.
- Keep the component **stateless** and reliant on external data provided by the parent.
- Use **Shadow DOM** for style and logic encapsulation to avoid global conflicts.
- Trigger a **custom event** when a user interacts with the component (e.g., clicking), so that the parent application can open a modal or take other actions without tightly coupling to the component’s logic.

---

## UI/UX Requirements

- The component should render a clean and **visually consistent preview** of each podcast.
- Display:
  - Podcast **cover image**
  - Podcast **title**
  - **Genre names**
  - **Number of seasons**
  - **Last updated** in a human-readable format
- The component must be **responsive**, and match the overall app design on desktop and mobile.
- On click, the component must notify the parent app to **open a modal** or navigate to details.

---

