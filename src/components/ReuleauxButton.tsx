// components/ReuleauxButton.tsx
import React from "react";

type ReuleauxButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  ariaLabel?: string;
  title?: string;
  className?: string;
};

export const ReuleauxButton: React.FC<ReuleauxButtonProps> = ({
  onClick,
  children,
  direction = "up",
  variant = "primary",
  size = "md",
  disabled = false,
  ariaLabel,
  title,
  className = "",
}) => {
  // Size configurations
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-xl",
    lg: "w-16 h-16 text-2xl",
    xl: "w-20 h-20 text-3xl",
  };

  const textSizeClasses = {
    sm: "text-3xl",
    md: "text-5xl",
    lg: "text-6xl",
    xl: "text-7xl",
  };

  // Rotation based on direction
  const rotationClasses = {
    up: "",
    right: "rotate-270",
    down: "rotate-180",
    left: "-rotate-270",
  };

  const textRotationClasses = {
    up: "",
    right: "-rotate-270",
    down: "-rotate-180",
    left: "rotate-270",
  };

  // Color variants
  const variantClasses = {
    primary: {
      fill: "fill-blue-500",
      hover: "hover:fill-blue-600",
      active: "active:fill-blue-700",
      disabled: "fill-blue-300",
    },
    secondary: {
      fill: "fill-gray-500",
      hover: "hover:fill-gray-600",
      active: "active:fill-gray-700",
      disabled: "fill-gray-300",
    },
    success: {
      fill: "fill-green-500",
      hover: "hover:fill-green-600",
      active: "active:fill-green-700",
      disabled: "fill-green-300",
    },
    danger: {
      fill: "fill-red-500",
      hover: "hover:fill-red-600",
      active: "active:fill-red-700",
      disabled: "fill-red-300",
    },
    warning: {
      fill: "fill-yellow-500",
      hover: "hover:fill-yellow-600",
      active: "active:fill-yellow-700",
      disabled: "fill-yellow-300",
    },
    info: {
      fill: "fill-cyan-500",
      hover: "hover:fill-cyan-600",
      active: "active:fill-cyan-700",
      disabled: "fill-cyan-300",
    },
  };

  const colors = variantClasses[variant];
  const fillClass = disabled
    ? colors.disabled
    : `${colors.fill} ${colors.hover} ${colors.active}`;

  // Text position adjustment based on direction
  const textPositions = {
    up: { x: 58, y: 66 },
    right: { x: 46, y: 66 },
    down: { x: 52.5, y: 66 },
    left: { x: 58, y: 66 },
  };

  const textPos = textPositions[direction];

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      title={title}
      className={`
        relative ${sizeClasses[size]} 
        transition-transform 
        ${disabled ? "cursor-not-allowed opacity-50" : "hover:scale-105 active:scale-95"}
        ${className}
      `.trim()}
    >
      <svg
        viewBox="0 0 105 105"
        className={`w-full h-full ${rotationClasses[direction]}`}
        aria-hidden="true"
      >
        <path
          d="M2,15 q50,-25 100,0 q0,50 -50,85 q-50,-30 -50,-85z"
          className={`${fillClass} stroke-white stroke-2 transition-colors`}
        />
        <text
          x={textPos.x}
          y={textPos.y}
          textAnchor="middle"
          className={`
            fill-white font-bold ${textSizeClasses[size]} 
            ${textRotationClasses[direction]} origin-center 
            select-none pointer-events-none
          `.trim()}
        >
          {children}
        </text>
      </svg>
      {ariaLabel && <span className="sr-only">{ariaLabel}</span>}
    </button>
  );
};
