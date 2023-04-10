import { AuthProvider } from "@/firebase/AuthContext";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
