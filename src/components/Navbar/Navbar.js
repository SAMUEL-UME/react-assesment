import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ButtonWrapper from "../ButtonsComp/Button";

function Navbar() {
	const { logout, isAuthenticated } = useContext(AuthContext);
	return (
		<div className="bg-dark px-6 py-3 fixed top-0 left-0 w-full shadow-sm shadow-dark">
			<div className="flex justify-between items-center">
				<Link to="/" className="text-white text-4xl font-extrabold ">
					Itmer
				</Link>
				<div className="flex items-center gap-3">
					{isAuthenticated && (
						<Link to="/dashboard" className="text-white font-medium text-base md:text-lg">
							Dashboard
						</Link>
					)}

					{isAuthenticated ? (
						<ButtonWrapper variant="contained" size="small" onClick={logout}>
							logout
						</ButtonWrapper>
					) : (
						<Link to="/login" className="text-white font-medium text-base md:text-xl bg-[#1976d2] py-2 px-3 rounded-xl">
							Login
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}

export default Navbar;
