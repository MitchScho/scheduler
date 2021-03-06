import React from "react";
import classNames from "classnames";
import "components/Button.scss";

const Button = (props) => {
   const buttonText = props.children;
   let buttonClass = classNames('button', { 'button--confirm': props.confirm, 'button--danger': props.danger });

   return (
      < button onClick={props.onClick} disabled={props.disabled} className={buttonClass} > {buttonText}</button >
   );
}

export default Button;