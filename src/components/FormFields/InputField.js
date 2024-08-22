import React from "react";
import TextField from "@mui/material/TextField";


const InputField = ({
	type,
	size,
	id,
	placeholder,
	value,
	onChange,
	className,
	label,
	errors,
	...props
}) => {
	// Size variations
	const sizeStyles = {
		small: "px-2 py-1 text-sm",
		medium: "px-4 py-2 text-base",
		large: "px-6 py-3 text-lg ",
	};
	console.log(errors)
	return (
		<div className="flex flex-col pb-2">
			<label htmlFor={id} className="text-sm lg:text-lg text-[#141414] mb-1">
				{label && (label)}
			</label>
			<TextField
				id={id}
				type={type}
				name={id}
				label={placeholder}
				autoComplete={id}
				{...props}
				className={` ${sizeStyles[size]} ${className} `}
				value={value}
				onChange={onChange}
			/>
			{errors[id] && <p className="text-red-500">{errors[id]}</p>}
		</div>
	);
};

export default InputField;
