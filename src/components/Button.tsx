"use client";

import React from "react";

type ButtonProps = {
  name?: string | null;
  type?: "submit" | "reset" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode | null;
};

const Button = ({ name, type = "button", onClick, icon }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="font-semibold capitalize px-4 py-3 bg-(--button-background) text-white rounded-lg hover:bg-(--button-background-hover) transition w-fit flex items-center gap-2"
    >
      {icon}
      {name}
    </button>
  );
};

export default Button;
