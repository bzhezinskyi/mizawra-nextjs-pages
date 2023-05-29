import Layout from "@/components/Layout";
import PrivateRoute from "@/components/route/PrivateRoute";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <PrivateRoute>
        <Component {...pageProps} />
      </PrivateRoute>
    </Layout>
  );
}
