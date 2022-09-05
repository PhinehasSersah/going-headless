import '../styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Article from '../components/Article';
 

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  article: Article,
};

storyblokInit({
  accessToken: "Qmf8pyo1FyYVHrUhBO9RFQtt",
  use: [apiPlugin],
  components
});


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;