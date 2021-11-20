import {
  useColorMode,
  useColorModeValue,
  IconButtonProps,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import useSound from "use-sound";
import { AnimatePresence } from "framer-motion";
import { MotionBox } from "./motion";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export default function ColorModeSwitcher({
  ...props
}: ColorModeSwitcherProps) {
  const { toggleColorMode } = useColorMode();
  const mode = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const [play] = useSound("/assets/audios/lightswitch.mp3", {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const handleClick = () => {
    mode === "dark" ? play({ id: "on" }) : play({ id: "off" });
    toggleColorMode();
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <MotionBox
        onClick={handleClick}
        key={mode === "dark" ? "dark-icon" : "light-icon"}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        cursor="pointer"
        fontSize={["2xl", "3xl", "3xl"]}
      >
        <Tooltip
          label={mode === "dark" ? "Dark mode" : "Light mode"}
          aria-label="A tooltip"
        >
          <IconButton
            size="md"
            fontSize="md"
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={handleClick}
            icon={<SwitchIcon />}
            aria-label={`Switch to ${mode} mode`}
            {...props}
          />
        </Tooltip>
      </MotionBox>
    </AnimatePresence>
  );
}
