import React from "react";

function TextAreaField({ label, id, value, onChange, errors }) {
	return (
		<div className="md:col-span-2">
			<label htmlFor={id} className="text-sm lg:text-lg text-[#141414]  mb-1">
				{label}
			</label>
			<textarea
				placeholder={label + "..."}
				id={id}
				name={id}
				className="w-full px-2 lg:px-4 py-4 text-lg min-h-44 rounded-2xl hover:border focus:border-2 border-none hover:border-solid hover:border-[#1976d2] bg-[#90909021] text-black  outline-none resize-none"
				value={value}
				resize="none"
				onChange={onChange}
				autoComplete={id}
			/>
			{errors && <p className="text-red-500">{errors}</p>}
		</div>
	);
}

export default TextAreaField;
