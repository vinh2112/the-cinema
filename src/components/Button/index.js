import React from "react";
import { ButtonContainer } from "./ButtonElements";

export default function Button({ content, className, onClick }) {
  return (
    <ButtonContainer className={`btn ${className}`} onClick={onClick ? () => onClick() : null}>
      {content}
    </ButtonContainer>
  );
}

export function OutlineButton({ content, onClick }) {
  return <Button className="btn-outline" content={content} onClick={onClick}></Button>;
}
