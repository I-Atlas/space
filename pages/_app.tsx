import { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import AppLayout from "layouts/app";
import { PrismGlobal } from "components/ui/theme/prism";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { theme } from "components/ui/theme";
import AccentGlobal from "components/ui/accent-picker/accent-global";
import { FontsGlobal } from "components/ui/theme/fonts";

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
