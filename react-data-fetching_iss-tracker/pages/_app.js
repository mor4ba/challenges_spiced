import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher, refreshInterval: 1000 }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
