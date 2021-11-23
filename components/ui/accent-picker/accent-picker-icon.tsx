import { Icon } from "@chakra-ui/react";
import { useLinkColor } from "components/ui/theme";

export default function AccentPickerIcon({ ...props }) {
  const color = useLinkColor();
  return (
    <Icon viewBox="0 0 200 200" boxSize="1.3em" color={color} {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
}
