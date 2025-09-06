import { cn } from "@/lib/utils";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Spinner } from "./spinner";

const buttonVariants = cva(
  "inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white hover:bg-primary-600",
        error: "bg-error-600 text-white hover:bg-error-700",
        outline:
          "text-slate-900 disabled:border-slate-100 border border-slate-200 bg-white disabled:text-slate-400 hover:bg-slate-50",
        secondary: "bg-primary-50 text-primary-500 hover:bg-primary-200",
        ghost: "text-primary-500",
        link: "text-primary-500 underline-offset-4 hover:underline",
        unstyled: "",
        reject:
          "  border-[#FECDD3] bg-[#FFF1F2] text-[#BE123C] hover:border-[#FECDD3] hover:bg-[#FFE4E6] hover:text-[#E11D48]",
        aprove:
          "border-[#A7F3D0] bg-[#ECFDF5] text-[#047857] hover:border-[#A7F3D0] hover:bg-[#D1FAE5] hover:text-[#059669]",
      },
      size: {
        default: "h-10 px-6",
        xs: "h-7 px-3",
        sm: "h-9 px-4",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
    compoundVariants: [
      {
        variant: "unstyled",
        className: "p-0 size-fit",
      },
    ],
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    trackingLabel?: string;
    trackingSection?: string;
    disableTracking?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      asChild = false,
      type = "button",
      isLoading = false,
      disabled,
      trackingLabel,
      trackingSection,
      disableTracking = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        // Track button click if tracking is enabled
        if (!disableTracking && !asChild) {
          const buttonText =
            trackingLabel ||
            (typeof children === "string"
              ? children
              : event.currentTarget.textContent?.trim() || "button");
        }

        // Call the original onClick handler
        onClick?.(event);
      },
      [
        onClick,
        disableTracking,
        asChild,
        trackingLabel,
        children,
        variant,
        size,
        trackingSection,
      ]
    );

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        type={type}
        disabled={isLoading || disabled}
        ref={ref}
        onClick={handleClick}
        data-variant={variant}
        data-size={size}
        {...props}
      >
        {isLoading && <Spinner show size="small" className="mr-2 text-white" />}
        <Slottable>{children}</Slottable>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
