import "../styles/globals.css";
import MainLayout from "../components/layout/MainLayout";

function MyApp({ Component, pageProps }) {
  return Component.getLayout ? (
    <Component {...pageProps} />
  ) : (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
