# local-favorites-tracker

 Local Favorites Tracker

Local Favorites Tracker is a simple web app I built for Project 2 in WRIT 40363 at TCU. It lets users save places they like, rate them, add notes, and organize them by category. My categories include Coffee, Restaurants, Study Spots, Parks, Shopping, and Other.

Live site: https://briellehardman.github.io/local-favorites-tracker/ 

What it does

- Saves a place name, category, rating, and notes
- Lets users search through saved places by name or notes
- Filters saved places by category
- Removes favorites with a confirmation before deleting
- Saves favorites in the browser so they stay after the page is refreshed

 Built with

- HTML for the page structure and form
- CSS for layout, spacing, typography, cards, and buttons
- JavaScript for adding, displaying, searching, filtering, and deleting favorites
- `localStorage` and JSON for saving data in the browser
- GitHub Pages for the live site

Notes

The saved favorites are connected to the browser being used, so they will not automatically appear on another device or browser. If the browser storage is cleared, the saved favorites will also be removed. The app is also set up to return to an empty list if stored data cannot be read.