import "../styles/tailwind.css";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

import { Provider } from "next-auth/client";

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Provider>
  );
}
