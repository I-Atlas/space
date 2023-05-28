import { AppProps, NextWebVitalsMetric } from "next/app";
import { AnimatePresence } from "framer-motion";
import { FontsGlobal } from "styles/fonts";
import AppLayout from "layouts/app";
import AccentGlobal from "components/ui/accent-picker/accent-global";
import { QueryClient } from "@tanstack/query-core";
import { useEffect, useRef } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRouter } from "next/router";
import { pageview } from "utils/gtag";
import { ThemeProvider } from "components/ui/theme-provider";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default function App({ Component, pageProps }: AppProps) {
  /**
   * React Query Configuration
   */
  const queryClient = useRef(new QueryClient());

  /**
   * Gtag helpers
   */
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <QueryClientProvider client={queryClient.current}>
      <ThemeProvider>
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
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
