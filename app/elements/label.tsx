import { VariantProps, cva } from "class-variance-authority";
import { LabelHTMLAttributes } from "react";
import cn from "../utilities/cn";

interface ILabel
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}

export default function Label({
  children,
  className,
  variant = "primary",
  ...props
}: ILabel) {
  return (
    <label {...props} className={cn(labelVariants({ variant }), className)}>
      {children}
    </label>
  );
}

const variants = {
  variants: {
    variant: {
      primary: "text-white",
    },
  },
};

const labelVariants = cva(
  "whitespace-nowrap font-semibold uppercase",
  variants
);
