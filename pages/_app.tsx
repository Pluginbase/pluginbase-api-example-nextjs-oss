import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token="9bbf038b-7e5e-48f3-bcc3-5d472e129fd1" async></script>
    </>
  );
}

export default MyApp;
