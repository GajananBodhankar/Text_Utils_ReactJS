import React, { useState } from "react";
export function CustomText() {
  const [text, setText] = useState("");
  return { text, setText };
}


