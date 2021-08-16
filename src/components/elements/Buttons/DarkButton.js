import React from "react";
import MainButton from "./MainButton";
import { colors } from "../../../theme";

export default function DarkButton({ children, ...props }) {
  return (
    <>
      <MainButton bg={colors.black} {...props}>
        {children}
      </MainButton>
    </>
  );
}
