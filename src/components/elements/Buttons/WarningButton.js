import React from "react";
import MainButton from "./MainButton";
import { colors } from "../../../theme";

export default function WarningButton({ children, ...props }) {
  return (
    <>
      <MainButton bg={colors.warning.main} {...props}>
        {children}
      </MainButton>
    </>
  );
}
