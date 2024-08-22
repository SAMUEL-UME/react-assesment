import React, {useContext} from "react";
import { Box, Modal } from "@mui/material";
import { ItemsContext } from "../../../context/ItemsContext";
import ButtonWrapper from "../../ButtonsComp/Button";




function DeleteItemModal({setIsDeleting, isDeleting, itemId}) {
    const {  deleteItem } = useContext(ItemsContext);
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "95%",
		maxWidth: 300,
		height: 200,
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 2,
	};
    const handleClose = () => {
		setIsDeleting(false);
	};
    const handleDelete=()=>{
        deleteItem(itemId);
    }
	return (
		<div>
			<Modal
				open={isDeleting}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
			>
				<Box sx={style} className="shadow shadow-gray-300">
					<h2
						id="modal-modal-title"
						className="text-4xl font-semibold  pb-5"
					>
						Delte Item
					</h2>
					<p className="text-xl font-light">Are you sure you want to delete this item?</p>
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
							color="error"
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
