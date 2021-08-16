import React from "react";
import MainButton from "./MainButton";
import { colors } from "../../../theme";

export default function InfoButton({ children, ...props }) {
  return (
    <>
      <MainButton bg={colors.info.main} {...props}>
        {children}
      </MainButton>
    </>
  );
}
