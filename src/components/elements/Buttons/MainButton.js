import React from "react";
import { Button } from "../../base";

export default function MainButton({ children, ...props }) {
  return (
    <Button px={3} py={2} borderRadius={5} {...props}>
      {children}
    </Button>
  );
}
