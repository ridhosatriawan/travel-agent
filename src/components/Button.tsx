import { ButtonHTMLAttributes } from "react";
import { cn } from "../helper";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium";
  variant?: "black" | "white" | "primary";
}

const Button: React.FC<ButtonProps> = ({
  size = "small",
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      className={cn(
        size === "small" ? "px-5 py-2" : "px-6 py-3",
        variant === "primary" && "bg-brand-blue text-white",
        variant === "black" && "bg-brand-black text-white",
        variant === "white" &&
          "bg-white text-brand-black border border-brand-black",
        "rounded-lg "
      )}
      {...rest}
    />
  );
};

export default Button;
