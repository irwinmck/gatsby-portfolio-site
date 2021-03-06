import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px;
    font-family: 'Nunito Sans', sans-serif;
    color: ${props => props.theme.text.color};
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  button {
    font-family: 'Nunito Sans', sans-serif;
    border: none;
  }

  a {
    text-decoration: none;
  }

  body {
    background: ${props => props.theme.main.bgColor};
    max-width: 100vw;
  }

  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-track {
    background: ${props => props.theme.main.bgColor};
  }

  body::-webkit-scrollbar-thumb {
    background: ${props => props.theme.sidenav.bgColor};
  }

  ol, ul {
    list-style: none;
  }
  
  .fixedBody {
    overflow: hidden;
  }
`;
