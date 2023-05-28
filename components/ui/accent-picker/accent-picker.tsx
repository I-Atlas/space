import { useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { IconButton, IconButtonProps, Tooltip } from "@chakra-ui/react";
import { accentKeys, ColorKeys } from "styles/index";
import { useLocalSetting } from "hooks/common/use-local-setting";
import { MotionBox } from "styles/motion";
import AccentPickerIcon from "./accent-picker-icon";
import useSound from "use-sound";

export default function AccentPicker({ ...props }: IconButtonProps) {
  const [key, setAccentKey] = useLocalSetting<ColorKeys>("accent", "red");
  const [play] = useSound("/assets/audios/lightswitch.mp3", {
    volume: 0.05,
    sprite: {
      on: [0, 100],
    },
  });

  const update = useCallback(() => {
    let index = accentKeys.indexOf(key);
    index = (index + 1) % accentKeys.length;
    setAccentKey(accentKeys[index]);
    play({ id: "on" });
  }, [key, play, setAccentKey]);

  return (
    <AnimatePresence initial={false}>
      <MotionBox fontSize={["2xl", "3xl", "3xl"]}>
        <Tooltip label="Color mode" aria-label="Color tooltip">
          <IconButton
            icon={<AccentPickerIcon />}
            isRound
            onMouseDown={update}
            {...props}
          />
        </Tooltip>
      </MotionBox>
    </AnimatePresence>
  );
}
