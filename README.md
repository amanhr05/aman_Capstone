# Quiz Application Prototype

## Overview
This is a prototype for the Capstone Project - Part 3. The prototype is built using HTML, CSS, and optionally JavaScript. It is designed to closely match the provided mockup and to be fully responsive. The application allows users to select a quiz difficulty level, start the quiz, view the current score (correct/incorrect answers), and reset the score.

---

## Steps Taken to Build the Prototype

### 1. Setting Up the Project
- Created an `index.html` file for the structure of the quiz application.
- Created a `style.css` file for the styling of the application.
- Used semantic HTML to structure the layout (e.g., `div`, `h2`, `button`, `select` elements).
- Used CSS Flexbox for aligning the quiz container at the center of the screen, both vertically and horizontally.
- Ensured the application has a modern look by using rounded borders, shadow effects, and consistent padding/margins.

### 2. Creating the HTML Structure
- The main container (`quiz-box`) holds all the components of the quiz:
  - A heading (`h2`) for the quiz title.
  - A dropdown (`select`) for selecting the difficulty level of the quiz.
  - Two buttons: one for starting the quiz and another for resetting the score.
  - A section for displaying the score (correct and incorrect answers).
- Each component has been given a class name to make it easy to apply styling through CSS.

### 3. Designing the UI with CSS
- Defined a color scheme for the application:
  - **Title:** Blue (#2e67f8) for the heading to make it stand out.
  - **Buttons:**
    - Start Quiz: Blue (#2e67f8) to make it prominent.
    - Reset Score: Grey (#a9a9a9) to indicate it's a secondary action.
- Added a box shadow to the quiz container to give it a slightly raised effect.
- Buttons have a consistent size and rounded corners for a modern look.
- Used Flexbox for centering and aligning the elements inside the quiz container, making the layout clean and organized.
- Media queries were implemented to ensure responsiveness for smaller screen sizes (e.g., mobile devices).

### 4. Making the Prototype Responsive
- Added a media query that adjusts the width of the quiz container for smaller devices.
- Ensured that the quiz application looks good and functions well on different screen sizes by testing it on both desktop and mobile browsers.
- Used relative units (like percentages) in some areas to make the layout more fluid.

---

## Resources Used
### 1. CSS Framework:
- No external CSS framework was used, though Bootstrap or Tailwind could be integrated in future iterations for faster development and built-in responsiveness.

### 2. Font and Icon Resources:
- Used default system fonts for simplicity. Additional fonts (e.g., Google Fonts) could be integrated if needed.

### 3. Browser Developer Tools:
- Utilized Chrome Developer Tools for testing responsiveness and debugging layout issues during development.

---

## Challenges Faced
1. **Centering the Quiz Box:**
   - Initially, centering the quiz box was a challenge, especially when accounting for different screen sizes. This was solved by using Flexbox, which allowed for vertical and horizontal centering in the viewport.
   
2. **Button Styling:**
   - Ensuring the buttons were visually appealing and consistent across browsers required additional styling. This was achieved by removing the default browser styles and adding custom padding, font sizes, and colors.

3. **Responsiveness:**
   - Handling small screen sizes was challenging, as the quiz box needed to remain centered without breaking the layout. I addressed this by adjusting the width of the container for screens smaller than 480px using media queries.

---

## Future Enhancements
- Add JavaScript for quiz logic:
  - Implement functionality to dynamically change questions and track scores.
  - Handle different quiz difficulty levels by providing different sets of questions based on the selection.
- Integrate a CSS framework like Bootstrap or Tailwind for even faster development and more extensive pre-built components.
- Add animations for transitions between quiz questions to make the experience more engaging for the user.
- Improve accessibility features, such as keyboard navigation and screen reader support.

---

## How to Run the Project
1. Download the project files (HTML, CSS, and optional JavaScript).
2. Open the `index.html` file in any web browser.
3. The quiz application should load, allowing you to select a difficulty level, start the quiz, and view/reset the score.

