import React, { useContext } from "react";
import { Box, Modal } from "@mui/material";
import { ItemsContext } from "../../../context/ItemsContext";
import ButtonWrapper from "../../ButtonsComp/Button";

function DeleteItemModal({ setIsDeleting, isDeleting, selectedItemId }) {
	const { deleteItem } = useContext(ItemsContext);
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "95%",
		maxWidth: 300,
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 2,
	};
	const handleClose = () => {
		setIsDeleting(false);
	};
	const handleDelete = () => {
		deleteItem(selectedItemId);
		setIsDeleting(false);
	};
	return (
		<div>
			<Modal
				open={isDeleting}
				onClose={handleClose}
				aria-labelledby="delete-item-modal-title"
				aria-describedby="delete-item-modal-description"
			>
				<Box sx={style} className="shadow shadow-gray-300 rounded-lg">
					<h2
						id="delete-item-modal-title"
						className="text-3xl font-medium  pb-1"
					>
						Delte Item
					</h2>
					<p id="delete-item-modal-description" className="text-lg font-light">
						Are you sure you want to delete this item?
					</p>
					<div className="flex py-3 gap-3 justify-end">
						<ButtonWrapper
							type="submit"
							size="medium"
							variant="contained"
							color="error"
							onClick={handleDelete}
						>
							Delete
						</ButtonWrapper>
						<ButtonWrapper
							type="submit"
							size="medium"
							variant="outlined"
							color="primary"
							onClick={handleClose}
						>
							Cancel
						</ButtonWrapper>
					</div>
				</Box>
			</Modal>
		</div>
	);
}

export default DeleteItemModal;
