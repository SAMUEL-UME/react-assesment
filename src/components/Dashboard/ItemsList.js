import React, { useState } from "react";
import ButtonWrapper from "../ButtonsComp/Button";
import { Divider } from "@mui/material";
import DeleteItemModal from "./DashboardModal/DeleteItemModal";
import DashboardSearchbar from "../Navbar/DashboardBar/DashboardSearchbar";

function ItemsList({ items, editItem, handleOpen }) {
	const [selectedItemId, setSelectedItemId] = useState(null);
	const [isDeleting, setIsDeleting] = useState(false);

	// Determine if the list is empty
	const hasItems = items.length > 0;

	// Handle Delete action
	const handleDeleteClick = (id) => {
		setSelectedItemId(id);
		setIsDeleting(true);
	};

	return (
		<div className="h-full w-full">
			<DashboardSearchbar />

			<div className="flex items-center justify-between h-full w-full py-4 px-3">
				<h2 className="text-4xl font-medium">All Items</h2>
				<ButtonWrapper variant="contained" onClick={handleOpen}>
					Add New Item
				</ButtonWrapper>
			</div>

			{hasItems ? (
				<ul className="flex flex-col gap-4 p-1">
					{items
						.slice()
						.reverse() // Reverse to map from the last item
						.map((item) => (
							<li key={item.id}>
								<Divider />
								<div className="w-full flex flex-col  justify-between items-baseline gap-4 rounded-md pt-2 animate__animated animate__fadeIn">
									<div className="w-full flex flex-col md:flex-row gap-2">
										<h3 className="text-black md:w-4/12 text-xl font-medium">
											{item.name}
										</h3>
										<p className="text-black md:w-8/12 text-base py-3 md:py-0 font-extralight">
											{item.description}
										</p>
									</div>
									<div className="w-full flex gap-5 justify-end">
										<ButtonWrapper
											variant="contained"
											onClick={() => editItem(item)}
										>
											Edit
										</ButtonWrapper>
										<ButtonWrapper
											variant="contained"
											color="error"
											onClick={() => handleDeleteClick(item.id)}
										>
											Delete
										</ButtonWrapper>
									</div>
								</div>
							</li>
						))}
				</ul>
			) : (
				<div className="w-full py-4">
					<h2 className="text-2xl md:text-4xl pb-2">No items found.</h2>
					<p className="text-lg md:text-xl">Add a new item to get started!</p>
				</div>
			)}

			<DeleteItemModal
				selectedItemId={selectedItemId}
				setIsDeleting={setIsDeleting}
				isDeleting={isDeleting}
			/>
		</div>
	);
}

export default ItemsList;
