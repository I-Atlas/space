import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { FontsGlobal } from "styles/fonts";
import { theme } from "styles/index";
import AppLayout from "layouts/app";
import AccentGlobal from "components/ui/accent-picker/accent-global";
import { QueryClient } from "@tanstack/query-core";
import { useRef } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  /**
   * React Query Configuration
   */
  const queryClient = useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClient.current}>
      <ChakraProvider theme={theme} resetCSS={true}>
        <FontsGlobal />
        <AccentGlobal />
        <AppLayout>
          <AnimatePresence
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} />
          </AnimatePresence>
        </AppLayout>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
