import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
// import "@/styles/globals.css";
import theme from "@/lib/theme";
import { UIProvider as UIContextProvider } from "@/components/contexts/UI.context";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UIContextProvider>
          <Component {...pageProps} />
        </UIContextProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
