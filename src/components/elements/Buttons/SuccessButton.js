import React from "react";
import MainButton from "./MainButton";
import { colors } from "../../../theme";

export default function SuccessButton({ children, ...props }) {
  return (
    <>
      <MainButton bg={colors.success.main} {...props}>
        {children}
      </MainButton>
    </>
  );
}
