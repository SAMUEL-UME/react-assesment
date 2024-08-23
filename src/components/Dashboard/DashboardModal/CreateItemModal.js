import React, { useState, useContext } from "react";
import { ItemsContext } from "../../../context/ItemsContext";
import ButtonWrapper from "../../ButtonsComp/Button";
import InputField from "../../FormFields/InputField";
import TextAreaField from "../../FormFields/TextAreaField";
import { Box, Modal } from "@mui/material";
import { validateDescription, validateName } from "../../../utils/validation";

function CreateItemModal({ open,  setOpen}) {
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
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//validate form fields
		const nameError = validateName(formData.name);
		const descriptionError = validateDescription(formData.description);

		// Set errors if validation fails
		if (nameError || descriptionError) {
			setErrors({
				name: nameError,
				description: descriptionError,
			});
			return;
		}
		//proceed with item creation is validation is successful
		createItem(formData);

	  // Reset 
		setFormData({ name: "", description: "" });
		setErrors({});
	};

	const handleClose = () => {
		setOpen(false);
		setFormData({ name: "", description: "" });
		setErrors({});
	}

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="create-item-modal-title"
			>
				<Box sx={style} className="shadow-lg shadow-white rounded-lg">
					<h2
						id="create-item-modal-title"
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
							errors={errors.name}
						/>
						<TextAreaField
							id="description"
							label="Description"
							value={formData.description}
							onChange={handleChange}
							errors={errors.description}
						/>
						<ButtonWrapper type="submit" size="large" variant="contained">
							Create Item
						</ButtonWrapper>
					</form>
				</Box>
			</Modal>
		</div>
	);
}

export default CreateItemModal;
