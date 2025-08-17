import React, { forwardRef, useState } from "react";
import { Eye, EyeOff, X, Loader2 } from "lucide-react";
import clsx from "clsx";

type InputFieldBaseProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
>;

export interface InputFieldProps extends InputFieldBaseProps {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  clearable?: boolean;
  passwordToggle?: boolean;
}

const sizeClasses: Record<string, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-base",
  lg: "px-5 py-3 text-lg",
};

// 🎨 Custom color palette
const aqua = "#42EADD";
// const beige = "#CDB599";

// 🎨 Input Variants (always white background now)
const variantClasses: Record<string, string> = {
  filled:
    "bg-white border border-gray-300 text-gray-800 placeholder-gray-500",
  outlined:
    "bg-white border border-gray-400",
  ghost:
    "bg-white border-b border-gray-400 rounded-none",
};


export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      invalid,
      loading,
      variant = "outlined",
      size = "md",
      type = "text",
      clearable,
      passwordToggle,
      className,
      disabled,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType =
      passwordToggle && type === "password"
        ? showPassword
          ? "text"
          : "password"
        : type;

    return (
      <div className="flex flex-col gap-1 w-full">
        {/* Label */}
        {label && (
          <label
            className="mb-1 text-sm font-semibold"
            style={{ color: aqua }}
          >
            {label}
          </label>
        )}

        {/* Input Wrapper */}
        <div className="relative flex items-center">
          <input
            ref={ref}
            type={inputType}
            value={value}
            onChange={onChange}
            disabled={disabled || loading}
            aria-invalid={invalid}
            aria-describedby={
              helperText || errorMessage ? `${label}-desc` : undefined
            }
            className={clsx(
              "w-full rounded-lg outline-none transition-all duration-150",
              `focus:ring-2 focus:ring-[${aqua}] focus:border-[${aqua}]`,
              `hover:border-[${aqua}]`,
              "placeholder-gray-400",
              sizeClasses[size],
              variantClasses[variant],
              invalid
                ? "border-red-600 text-red-700 focus:ring-red-600 focus:border-red-600"
                : "",
              disabled
                ? "bg-gray-100 border-gray-200 cursor-not-allowed text-gray-400"
                : "",
              className
            )}
            {...props}
          />

          {/* Loading Spinner */}
          {loading && (
            <Loader2
              className="absolute right-3 animate-spin"
              size={18}
              style={{ color: aqua }}
              aria-label="Loading"
            />
          )}

          {/* Clear Button */}
          {clearable && value && !disabled && !loading && type !== "password" && (
            <button
              type="button"
              onClick={() =>
                onChange?.({
                  target: { value: "" },
                } as React.ChangeEvent<HTMLInputElement>)
              }
              className="absolute right-3 transition"
              style={{ color: aqua }}
              aria-label="Clear input"
            >
              <X size={16} />
            </button>
          )}

          {/* Password Toggle */}
          {passwordToggle && type === "password" && !loading && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 transition"
              style={{ color: aqua }}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>

        {/* Helper or Error */}
        {invalid && errorMessage ? (
          <p
            id={`${label}-desc`}
            className="text-xs font-medium mt-1 text-red-600"
          >
            {errorMessage}
          </p>
        ) : (
          helperText && (
            <p
              id={`${label}-desc`}
              className="text-xs mt-1"
              style={{ color: aqua }}
            >
              {helperText}
            </p>
          )
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
