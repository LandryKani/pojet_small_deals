import React from "react";
import styled from "styled-components";

const WrapperButton = styled.div`
  display: flex;
  align-item: center;
  background-color: var(--color-red);
  justify-content: center;
  border:${(props) => (props.border ? props.border : "1px solid transparent" ) };
  width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  text-align: center;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#E80707")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "35px"};
  color: ${(props) => (props.color ? props.color : "#fff")};
  width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  height: ${(props) => (props.height ? props.height : "50px")};
  cursor:pointer;
  &:hover{
    background: #fff;
    transition: .7s;
    color: ${(props) => (props.bgcolor ? props.bgcolor : "#E80707")};
    transform: scale(1.01);
    font-weight: 500;
    border:1px solid ${(props) => (props.bgcolor ? props.bgcolor : "#E80707")};
  }

  @media (max-width: 920px) {
    width: 100%;
  }
  @media (max-width: 455px) {
    font-size: 17px;
  }
  @media (max-width: 416px) {
    font-size: 17px;
    padding: 10px;
  }
`;

const StyledLink = styled.a`
  color: ${(props) => (props.color ? props.color : "#fff")};
  padding: ${(props) => (props.padding ? props.padding : "15px")};
  display: block;
  width: 100%;
  line-height: 19px;
  &:hover{
    color: ${(props) => (props.bgcolor ? props.bgcolor : "#E80707")};
    transition: .7s;
  }
`;

const StyleButton = styled.button`
  outline: 0;
  background: transparent;
`;

function Button({
  title,
  bgcolor,
  maxWidth,
  href,
  variant,
  borderRadius,
  color,
  padding,
  margin,
  height,
  hoverbgcolor,
  icon,
  border,
  onClick
}) {
  return (
    <WrapperButton
      bgcolor={bgcolor}
      maxWidth={maxWidth}
      variant={variant}
      borderRadius={borderRadius}
      border={border}
      padding={padding}
      hoverbgcolor={hoverbgcolor}
      height={height}
      margin={margin}
      onClick={onClick}
    >
      {(variant === "link" || !variant) && (
        <StyledLink color={color} href={href} bgcolor={bgcolor}>
          {icon} {title}
        </StyledLink>
      )}
      {variant === "button" && (
        <StyleButton color={color} maxWidth={maxWidth} bgcolor={bgcolor}>
          {icon} {title}
        </StyleButton>
      )}
    </WrapperButton>
  );
}

export default Button;
