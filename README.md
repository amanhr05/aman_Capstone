# aman_Capstone
# NAME-AMAN
# STUDENT ID- 041134560
# PROJECT- Pokedox

# Mockup Design Report

# Pokedex Web Application

**Project Title**: Pokedex  
**Objective**: Build an interactive Pokedex using the [PokeAPI](https://pokeapi.co/), allowing users to browse, view details, and mark Pokemon as "caught."

---

## 1. Overview

This project is an interactive Pokedex application that retrieves Pokemon data from the PokeAPI. It enables users to:
- View a grid of Pokemon thumbnails and names.
- Load additional Pokemon.
- Click on a Pokemon to view detailed information in a modal.
- Mark Pokemon as "caught" and store this status locally.

---

## 2. Steps Taken to Build the Prototype

### 1. Project Setup
- **File Structure**: Created an `index.html` for layout, `style.css` for styling, and `script.js` for functionality.
- **HTML Layout**: Used semantic HTML to structure the main elements (header, main section, buttons).
- **CSS Styling**: Applied responsive styling with CSS Grid and Flexbox, defining classes for a grid layout, modal design, and "caught" Pokemon styling.
- **JavaScript**: Built functions for API interaction, Pokemon rendering, modal display, and "catch" functionality using `localStorage`.

### 2. Fetching and Displaying Pokemon
- **API Calls**: Used the PokeAPI `/pokemon` endpoint to retrieve batches of 20 Pokemon, displaying them in a grid layout.
- **Pokemon Details Fetch**: Each Pokemon’s detailed data (name, sprite, abilities, and types) is fetched individually when clicked, enhancing the display in a modal.
- **Dynamic Rendering**: Displayed Pokemon thumbnails with their names; each Pokemon card is clickable for detailed viewing.

### 3. Pokemon Details Modal
- **Structure**: Created a modal to display detailed Pokemon data, including types and abilities.
- **Interaction**: Enabled users to close the modal via a button or by clicking outside the modal area.
- **Catch/Release Feature**: Added a "catch" button in the modal to toggle the "caught" status of each Pokemon. The "caught" state is stored in `localStorage`, allowing data persistence across sessions.

### 4. Handling User Actions
- **Load More**: Users can load additional batches of 20 Pokemon by clicking the "Load More" button.
- **Catch Status**: Users can mark a Pokemon as "caught." Caught Pokemon appear with a different style, indicating they are in the user's collection.
- **Local Storage**: Used `localStorage` to save the caught Pokemon list, making sure data is persistent across sessions.

---

## 3. Design Elements and User Actions

### User Actions
- **Load More Pokemon**: Loads the next set of Pokemon from the API.
- **View Details**: Opens a modal with additional details about the selected Pokemon.
- **Catch/Release Toggle**: Adds or removes a Pokemon from the user's caught list and saves the status in local storage.

### Visual Design
- **Colors**:
  - Primary color: `#ef5350` (red) for the header and buttons.
  - Secondary color: `#a5d6a7` (green) to indicate caught Pokemon.
  - Background color: `#f5f5f5` (light gray) for Pokemon cards.

- **Fonts**: Used Arial for readability and simplicity.
- **Icons**: Pokemon sprites are pulled directly from the PokeAPI sprite URL.

---

## 4. Resources Used

- **PokeAPI**: The primary data source for Pokemon information, including names, abilities, and types.
- **JavaScript Fetch API**: For making HTTP requests to retrieve Pokemon data.
- **Local Storage**: To persist the caught Pokemon list across page reloads.

---

## 5. Challenges Faced

1. **Modal Functionality**:
   - Ensuring that the modal closes properly when clicking outside it was challenging. This was addressed using event listeners that detected clicks outside the modal content area.

2. **Persisting Caught Pokemon**:
   - Saving and retrieving caught Pokemon data using `localStorage` required testing to ensure data consistency across sessions.

3. **Responsive Design**:
   - Maintaining a grid layout that adapts to various screen sizes was initially challenging, but was managed using CSS Grid and media queries.

---

## 6. Future Enhancements

- **Add Search Functionality**: Allow users to search for specific Pokemon by name.
- **Improve Styling**: Use animations to enhance the UX, especially when catching/releasing a Pokemon.
- **Expand Caught Pokemon List**: Add a separate view to display all caught Pokemon in the user's collection.
- **Accessibility Improvements**: Improve keyboard navigation and screen reader compatibility.

---

## 7. How to Run the Project

1. Clone or download the project files.
2. Open `index.html` in any web browser.
3. The Pokedex application will load, allowing you to browse, view details, and catch/release Pokemon.

