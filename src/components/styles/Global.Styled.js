import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Poppins:400');
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
html {font-size: 100%;} /*16px*/

body {
  background: ${({ theme }) => theme.colors.body};
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.paragraph};
}

p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  margin-bottom:  1.38rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 1.802rem;
}

h2 {font-size: 1.602rem;}

h3 {font-size: 1.424rem;}

h4 {font-size: 1.266rem;}

h5 {font-size: 1.125rem;}

small, .text_small {font-size: 0.889rem;}
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
/* li:nth-child(2n + 0) {
    background: rgba(255, 255, 255, 0.05);
  } */
`;
