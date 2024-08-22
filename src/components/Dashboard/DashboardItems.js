import React, { useState } from "react";
import ButtonWrapper from "../ButtonsComp/Button";
import { Divider } from "@mui/material";
import DeleteItemModal from "./DashboardModal/DeleteItemModal";

function DashboardItems({ items, editItem, handleOpen }) {
	const [itemId, setItemId] = useState("")
	const [isDeleting, setIsDeleting] = useState(false)

	const listEmpty = items.length > 0 ? true : false;
	const handleDeleteItem = (id) => {
		setItemId(id)
		setIsDeleting(true)
	};
	return (
		<div className="h-full w-full ">
			<div className="flex  items-center justify-between h-full w-full py-4 px-3">
				<h2 className="text-4xl font-medium">All Items</h2>
				<ButtonWrapper variant="contained" onClick={handleOpen}>
					Add new Item
				</ButtonWrapper>
			</div>

			{items && listEmpty ? (
				<ul className="flex flex-col gap-4 p-1">
					{items.map((item) => (
						<li key={item.id}>
							<Divider />
							<div className="w-full flex flex-col md:flex-row justify-between items-baseline  pt-4  rounded-md">
								<h3 className="text-black md:w-2/12 text-xl font-medium  ">
									{item.name}
								</h3>
								<p class="text-black md:w-7/12 text-base py-3 md:py-0 font-extralight">
									{item.description}
								</p>
								<div className="flex gap-2 ">
									<ButtonWrapper
										variant="contained"
										onClick={() => editItem(item)}
									>
										Edit
									</ButtonWrapper>
									<ButtonWrapper
										variant="contained"
										color="error"
										onClick={() => handleDeleteItem(item.id)}
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
					<h2 className="text-2xl md:text-4xl pb-2">
						Oops, you have no list yet.
					</h2>
					<p className="text-lg md:text-xl">Add one to get started!</p>
				</div>
			)}

			<DeleteItemModal itemId={itemId} setItemId={setItemId} setIsDeleting={setIsDeleting} isDeleting={isDeleting}/>
		</div>
	);
}

export default DashboardItems;
