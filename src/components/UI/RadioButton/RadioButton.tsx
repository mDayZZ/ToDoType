import React from "react";
import classes from "./RadioButton.module.scss";

interface IRadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: string,
}
const RadioButton = ({children, ...props}: IRadioButtonProps) => {

    return (
        <label className={classes.radioButton}>
            <input className={classes.radioButton__input} type="radio" {...props}/>
            <span className={classes.radioButton__label}>{children}</span>
        </label>
    );
};

export default RadioButton;