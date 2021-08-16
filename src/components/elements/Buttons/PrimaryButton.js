import React from "react";
import MainButton from "./MainButton";
import { colors } from "../../../theme";

export default function PrimaryButton({ children, ...props }) {
  return (
    <>
      <MainButton bg={colors.primary.main} {...props}>
        {children}
      </MainButton>
    </>
  );
}
