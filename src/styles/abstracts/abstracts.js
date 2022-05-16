import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
      // COLORS
    --body-background: #E5E5E5;
    --body-color: #5B657E;
    --color-primary: #F94198;
    --color-primary-dark: #007BFF;
    --color-secondary: #1D7AED;
    --color-tertiary: #b8e0ff;
    --grey: #646C83; /*USED BY BLOCKQUOTE*/
    --light-black: #2D2F2E;
    --black: #000000;
    --white: #ffffff;

    //FONT FAMILY
    --title-font: "Poppins", sans-serif;
    --alternative-font: "Work Sans", sans-serif;
    --body-font: "Poppins", sans-serif;
    --bold: 700;

    // FONT-SIZES
    --basic-font-size: 1.8rem;
    --mobile-font-size: 1.5rem;

    --big-title: 4.8rem;
    --title-font-size: 2.8rem;
    --mobile-title-font-size: 3rem;
    --small-title: 2.5rem;
    --big-text: 2rem;

    //SHAPES
    --arrow-shape: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%);
    --card-border-radius: 55px;
  }
`
