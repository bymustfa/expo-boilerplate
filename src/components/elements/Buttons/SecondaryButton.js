import React from "react";
import MainButton from "./MainButton";
import { colors } from "../../../theme";

export default function SecondaryButton({ children, ...props }) {
  return (
    <>
      <MainButton bg={colors.secondary.main} {...props}>
        {children}
      </MainButton>
    </>
  );
}
