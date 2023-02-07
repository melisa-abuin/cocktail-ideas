import { createGlobalStyle } from "styled-components"
import { AppProps } from 'next/app'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter-Regular';
    src: url('/fonts/inter/Inter-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter-Bold';
    src: url('/fonts/inter/Inter-Bold.woff') format('truetype');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp