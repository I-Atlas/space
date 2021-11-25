import { useCallback } from "react";
import { Tooltip, IconButton, IconButtonProps } from "@chakra-ui/react";
import { ColorKeys, accentKeys } from "components/ui/theme";
import { useLocalSetting } from "hooks/use-local-setting";
import AccentPickerIcon from "./accent-picker-icon";
import { AnimatePresence } from "framer-motion";
import { MotionBox } from "../motion";

export default function AccentPicker({ ...props }: IconButtonProps) {
  const [key, setAccentKey] = useLocalSetting<ColorKeys>("accent", "red");

  const update = useCallback(() => {
    let index = accentKeys.indexOf(key);
    index = (index + 1) % accentKeys.length;
    setAccentKey(accentKeys[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
    <MotionBox
      fontSize={["2xl", "3xl", "3xl"]}
    >
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
