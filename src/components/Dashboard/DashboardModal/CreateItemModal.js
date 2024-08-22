import React, { useState, useContext } from "react";
import { ItemsContext } from "../../../context/ItemsContext";
import ButtonWrapper from "../../ButtonsComp/Button";
import InputField from "../../FormFields/InputField";
import TextAreaField from "../../FormFields/TextAreaField";
import { Box, Modal } from "@mui/material";
import { validateDescription, validateName } from "../../../utils/validation";

function CreateItemModal({ open, handleClose }) {
	const { createItem } = useContext(ItemsContext);
	const [errors, setErrors] = useState({});
	const [formData, setFormData] = useState({
		name: "",
		description: "",
	});
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "95%",
		maxWidth: 400,
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 2,
	};

	const handleChange = (e) => {
		const formField = e.target.id;
		setFormData({ ...formData, [formField]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//validate form fields
		const nameError = validateName(formData.name);
		const descriptionError = validateDescription(formData.description);
		if (nameError || descriptionError)
			return setErrors({ name: nameError, description: descriptionError });

		createItem(formData);
		handleClose();
		setFormData({ name: "", description: "" });
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
			>
				<Box sx={style} className="shadow-lg shadow-white rounded-lg">
					<h2
						id="modal-modal-title"
						className="text-4xl font-semibold text-[#1976d2] pb-5 text-center"
					>
						Create Item
					</h2>
					<form onSubmit={handleSubmit}>
						<InputField
							id="name"
							type="text"
							label={"Name"}
							size={"medium"}
							value={formData.name}
							onChange={handleChange}
							errors={errors}
						/>
						<TextAreaField
							id="description"
							label="Description"
							value={formData.description}
							onChange={handleChange}
							errors={errors}
						/>
						<ButtonWrapper type="submit" size="large" variant="contained">
							{" "}
							Create Item
						</ButtonWrapper>
					</form>
				</Box>
			</Modal>
		</div>
	);
}

export default CreateItemModal;
