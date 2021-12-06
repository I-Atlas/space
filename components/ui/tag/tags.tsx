import type { FlexProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import type { TagProps } from "./tag-item";
import TagItem from "./tag-item";

export interface TagsProps extends FlexProps {
  interactive?: boolean;
  tags?: string[];
  tagProps?: Partial<TagProps>;
}

export default function Tags({
  tags,
  interactive = true,
  tagProps = {},
  ...props
}: TagsProps) {
  if (!tags || tags.length === 0) {
    return null;
  }
  return (
    <Flex alignItems="center" flexWrap="wrap" m="-2px" {...props}>
      {tags.map((tag) => (
        <TagItem
          key={tag}
          name={tag}
          interactive={interactive}
          m="2px"
          {...tagProps}
        />
      ))}
    </Flex>
  );
}
