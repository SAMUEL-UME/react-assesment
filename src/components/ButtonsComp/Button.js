import React from "react";
import Button from "@mui/material/Button";

const ButtonWrapper = ({
	type,
	size,
	variant,
	children,
	onClick,
	className,
	...props
}) => {
	// Define the base styles for the button
	const baseStyles =
		"rounded font-semibold focus:outline-none transition-colors";
	// Define size variations
	const sizeStyles = {
		small: "px-2 py-1 text-sm ",
		medium: "px-4 py-2 text-base",
		large: "px-6 py-3 text-lg",
	};

	
	return (
		<div>
		<Button
			type={type}
			size={size}
			variant={variant}
			className={`${baseStyles} ${sizeStyles[size]}  ${className}`}
			onClick={onClick}
			{...props}
		>
			{children}
		</Button>
		</div>
	);
};

export default ButtonWrapper;
