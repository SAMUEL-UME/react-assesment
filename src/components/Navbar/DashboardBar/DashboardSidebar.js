import React, { useContext, useState } from "react";
import ButtonWrapper from "../../ButtonsComp/Button";
import { AuthContext } from "../../../context/AuthContext";
import MenuIcon from "@mui/icons-material/Menu";

function DashboardSidebar() {
	const { logout } = useContext(AuthContext);
	const [toggle, setToggle] = useState(false);

	const menu = toggle ? "left-0" : "-left-96";
	return (
		<>
			<div
				className="fixed right-4 top-2 z-40 bg-dark block lg:hidden rounded cursor-pointer"
				onClick={() => setToggle(!toggle)}
			>
				<MenuIcon sx={{ fontSize: 40, color: "white", zIndex: "40" }} />
				<span className="absolute top-1 left-8 bg-dark -z-20  w-8 h-8 block"></span>
			</div>
			<div
				className={`${menu} fixed h-screen  z-20 ease-in-out transition-all duration-500 delay-200 w-[18rem] lg:top-0 lg:left-0  lg:w-2/12 bg-dark animate__animated animate__backInLeft`}
			>
				<div className="w-[80vw] h-[100vh] pl-8 z-50 mt-10">
					<h4 className="text-4xl font-extrabold text-white">Itmer</h4>
					<div className="mt-12 h-4/6 flex flex-col justify-between">
						<ul className="flex flex-col gap-12 text-xl font-semibold text-white">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/Dashboard">Profile</a>
							</li>
						</ul>
						<ButtonWrapper
							variant="contained"
							className="bg-[#1d1e18]"
							onClick={logout}
						>
							logout
						</ButtonWrapper>
					</div>
				</div>
			</div>
		</>
	);
}

export default DashboardSidebar;
