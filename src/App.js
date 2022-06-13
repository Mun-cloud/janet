import styled, { createGlobalStyle } from "styled-components";
import BannerSection from "./components/BannerSection";
import Header from "./components/Header";
import HotKeyword from "./components/HotKeyword";
import TopSection from "./components/TopSection";

// css 초기화
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

body {
  font-weight:300 ;
  font-size: 12px;
  font-family: 'malgun gothic', 'dotum', sans-serif;
  line-height: 1.2;
}

a {
  text-decoration: none;
  color:inherit;
}

p {
  font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
}
`;

const Container = styled.div`
  .section_area {
    width: 1250px;
    margin: auto;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <TopSection />
      <BannerSection />
      <HotKeyword />
    </Container>
  );
}

export default App;
