import React, { useState, useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import DashboardItems from "../components/Dashboard/DashboardItems";
import DashboardSidebar from "../components/Navbar/DashboardSidebar/DashboardSidebar";
import CreateItemModal from "../components/Dashboard/DashboardModal/CreateItemModal";
import EditItemModal from "../components/Dashboard/DashboardModal/EditItemModal";

function Dashboard() {
	const { items } = useContext(ItemsContext);
	const [open, setOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [currentItem, setCurrentItem] = useState({
		id: null,
		name: "",
		description: "",
	});

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	

	const editItem = () => {
		setCurrentItem(...items);
		setIsEditing(true);
	};

	return (
		<div className="min-h-screen max-h-fit w-full bg-blue-50  flex relative justify-end">
			<DashboardSidebar />
			<main className="w-full h-fit lg:w-10/12 px-6 lg:px-8 py-8  overflow-y-scroll overflow-x-visible">
				<CreateItemModal handleClose={handleClose} open={open} />
				<DashboardItems
					items={items}
					editItem={editItem}
					handleOpen={handleOpen}
				/>

				<EditItemModal
					currentItem={currentItem}
					setCurrentItem={setCurrentItem}
					isEditing={isEditing}
					setIsEditing={setIsEditing}
				/>
			</main>
		</div>
	);
}

export default Dashboard;
