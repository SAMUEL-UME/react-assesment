import React, { useContext, useState } from "react";
import { ItemsContext } from "../../../context/ItemsContext";
import InputField from "../../FormFields/InputField";
import ButtonWrapper from "../../ButtonsComp/Button";
import TextareaField from "../../FormFields/TextAreaField";
import { Box, Modal } from "@mui/material";
import { validateDescription, validateName } from "../../../utils/validation";

function EditItemModal({
	currentItem,
	setCurrentItem,
	isEditing,
	setIsEditing,
}) {
	const { updateItem } = useContext(ItemsContext);
	const [errors, setErrors] = useState({});

	///Custom style
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

	//Tracks changes on an input
	const handleChange = (e) => {
		const formField = e.target.id;
		setCurrentItem({
			...currentItem,
			[formField]: e.target.value,
		});
	};

	const handleEditSubmit = (e) => {
		e.preventDefault();

		const { id, name, description } = currentItem;
		//validate form fields
		const nameError = validateName(name);
		const descriptionError = validateDescription(description);
		if (nameError || descriptionError) {
			setErrors({ name: nameError, description: descriptionError });
			return;
		}
		//proceed if validations are successful
		updateItem(id, { name, description });

		//reset modal and item state
		setIsEditing(!isEditing);
		setCurrentItem({ id: null, name: "", description: "" });
	};

	const handleClose = () => {
		setIsEditing(false);
	};

	return (
		<div className="bg-green min-w-64 min-h-72">
			<Modal
				open={isEditing}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
			>
				<Box sx={style} className="shadow shadow-gray-300">
					<h2
						id="modal-modal-title"
						className="text-4xl font-semibold text-[#1976d2] pb-5 text-center"
					>
						Edit Item
					</h2>
					<form onSubmit={handleEditSubmit}>
						<InputField
							id="name"
							type="text"
							label={"Name"}
							size={"medium"}
							value={currentItem.name}
							onChange={handleChange}
							errors={errors.name}
						/>
						<TextareaField
							id="description"
							label="Description"
							value={currentItem.description}
							onChange={handleChange}
							errors={errors.description}
						/>
						<div className="flex py-3 gap-3">
							<ButtonWrapper
								type="submit"
								size="medium"
								variant="contained"
								color="success"
							>
								Edit
							</ButtonWrapper>
							<ButtonWrapper
								type="button"
								size="medium"
								variant="outlined"
								color="error"
								onClick={handleChange}
							>
								Cancel
							</ButtonWrapper>
						</div>
					</form>
				</Box>
			</Modal>
		</div>
	);
}

export default EditItemModal;
