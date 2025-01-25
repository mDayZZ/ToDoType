import clsx from "clsx";
import classes from './Button.module.scss';
import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: string,
}

const Button = ({className, children, ...props}: IButtonProps) => {
    return (
        <button className={clsx(classes.button, className)} {...props}>
            {children}
        </button>
    );
};

export default Button;