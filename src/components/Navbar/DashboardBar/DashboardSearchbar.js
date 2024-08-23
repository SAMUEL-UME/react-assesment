import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ItemsContext } from "../../../context/ItemsContext";
import { debounce } from "lodash"; // Lodash debounce for input throttling

function DashboardSearchbar() {
	const [query, setQuery] = useState("");
	const { setSearchQuery } = useContext(ItemsContext);

	// UseEffect to update search query with debouncing
	useEffect(() => {
		// Debounce function to prevent excessive renders
		const handleDebouncedSearch = debounce(() => {
			setSearchQuery(query);
		}, 300);

		handleDebouncedSearch();

		//Cleanup functo to stop debounce
		return () => {
			handleDebouncedSearch.cancel();
		};
	}, [query, setSearchQuery]);

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div className="py-6 flex justify-center items-center gap-4">
			<Box
				sx={{
					width: 600,
					maxWidth: "100%",
				}}
			>
				<TextField
					sx={{
						fontSize: 60,
						color: "red",
					}}
					type="text"
					id="Filters"
					placeholder="Search.."
					value={query}
					onChange={handleChange}
					className="bg-transparent px-3 py-3 rounded w-full z-40 text-2xl"
				/>
			</Box>
		</div>
	);
}

export default DashboardSearchbar;
