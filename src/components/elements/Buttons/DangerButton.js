import React from "react";
import MainButton from "./MainButton";
import { colors } from "../../../theme";

export default function DangerButton({ children, ...props }) {
  return (
    <>
      <MainButton bg={colors.error.main} {...props}>
        {children}
      </MainButton>
    </>
  );
}
