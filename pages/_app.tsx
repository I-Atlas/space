import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { PrismGlobal } from "components/ui/theme/prism";
import { FontsGlobal } from "components/ui/theme/fonts";
import { theme } from "components/ui/theme";
import AccentGlobal from "components/ui/accent-picker/accent-global";
import AppLayout from "layouts/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <FontsGlobal />
      <AccentGlobal />
      <PrismGlobal />
      <AppLayout>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Box key={router.route}>
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </AppLayout>
    </ChakraProvider>
  );
}
