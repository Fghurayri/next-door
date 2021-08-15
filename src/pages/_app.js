import { Head } from "../lib/components/Head";
import { GlobalProvider } from "../lib/contexts/Global";
import { useFullScreenFix } from "../lib/hooks/useFullScreenFix";
import "../../public/globals.css";

export default function MyApp({ Component, pageProps }) {
  // This is a workaround to ensure the map works for mobile browsers
  useFullScreenFix();
  return (
    <>
      <Head />
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}
