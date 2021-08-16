import React from "react";
import { Box, Input, Text } from "../../base";
import { colors } from "../../../theme";

export default function LoginInput({
  label,
  placeholder,
  icon = null,
  ...props
}) {
  return (
    <>
      <Box
        bg={colors.white}
        height={60}
        borderRadius={6}
        p="7px"
        borderWidth={2}
        borderColor={colors.gray.main}
      >
        <Text fontWeight="bold" fontSize={14}>
          {label}
        </Text>

        <Box flexDirection="row">
          <Input
            placeholder={placeholder}
            width={icon ? "92%" : "100%"}
            bg={colors.white}
            borderRadius={6}
            fontSize={16}
            fontWeight="bold"
            {...props}
          />
          {icon && <Box mt={-2}>{icon}</Box>}
        </Box>
      </Box>
    </>
  );
}
