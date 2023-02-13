import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
