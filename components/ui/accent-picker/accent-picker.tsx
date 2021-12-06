import { useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Tooltip, IconButton, IconButtonProps } from "@chakra-ui/react";
import { ColorKeys, accentKeys } from "components/ui/theme";
import { useLocalSetting } from "hooks/use-local-setting";
import { MotionBox } from "../motion";
import AccentPickerIcon from "./accent-picker-icon";

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
