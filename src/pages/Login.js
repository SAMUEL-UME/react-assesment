import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/ButtonsComp/Button";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import InputField from "../components/FormFields/InputField";
import { validateEmail, validatePassword } from "../utils/validation";
import Navbar from "../components/Navbar/Navbar";

function Login() {
	const { login, isAuthenticated } = useContext(AuthContext);
	const [errors, setErrors] = useState({});

	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	//Checks id user is already authenticated
	useEffect(() => {
		if (isAuthenticated) navigate("/dashboard");
	}, [isAuthenticated, navigate]);

	const handleChange = (e) => {
		const formField = e.target.id;
		setFormData({ ...formData, [formField]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		//validate form fields
		const emailError = validateEmail(formData.email);
		const passwordError = validatePassword(formData.password);
		if (emailError || passwordError)
			return setErrors({ email: emailError, password: passwordError });

		setIsLoading(true);
		const success = await login(formData);
		if (success) {
			setIsLoading(false);
			navigate("/dashboard");
		}
	};

	return (
		<>
			<Navbar />
			<div className="h-screen w-screen flex justify-center items-center">
				<Box
					sx={{
						width: "100%",
						maxWidth: 400,
						borderRadius: 1,
						padding: 4,
					}}
					className="shadow shadow-gray-200"
				>
					<h2 className="text-4xl font-semibold text-[#1976d2] pb-5 text-center">
						Login
					</h2>
					<form onSubmit={handleSubmit}>
						<InputField
							type="email"
							label="Email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							errors={errors}
						/>
						<InputField
							type="password"
							label="Password"
							id="password"
							value={formData.password}
							onChange={handleChange}
							errors={errors}
						/>
						<Button
							type={"submit"}
							size={"large"}
							variant={"contained"}
							fullWidth={true}
						>
							{isLoading ? (
								<CircularProgress sx={{ color: "#ffffff" }} />
							) : (
								"Login"
							)}
						</Button>
					</form>
				</Box>
			</div>
		</>
	);
}

export default Login;
