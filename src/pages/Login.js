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
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	// Check if the user is already authenticated
	useEffect(() => {
		if (isAuthenticated) navigate("/dashboard");
	}, [isAuthenticated, navigate]);

	// Handle input field changes
	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [id]: value }));
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate form fields
		const emailError = validateEmail(formData.email);
		const passwordError = validatePassword(formData.password);

		if (emailError || passwordError) {
			setErrors({ email: emailError, password: passwordError });
			return;
		}

		// Proceed with login if validation is successful
		setErrors({});
		setIsLoading(true);

		try {
			const success = await login(formData);

			if (success) {
				navigate("/dashboard");
			} else {
				// Handle login failure
				setErrors({ general: "Invalid email or password. Please try again." });
			}
		} catch (error) {
			setErrors({ general: "Something went wrong. Please try again." });
		} finally {
			setIsLoading(false);
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
					{errors.general && (
						<p className="text-red-600 text-center">{errors.general}</p>
					)}
					<form onSubmit={handleSubmit}>
						<InputField
							type="email"
							label="Email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							errors={errors.email}
						/>
						<InputField
							type="password"
							label="Password"
							id="password"
							value={formData.password}
							onChange={handleChange}
							errors={errors.password}
						/>
						<Button
							type="submit"
							size="large"
							variant="contained"
							fullWidth
						>
							{isLoading ? (
								<CircularProgress sx={{ color: "#ffffff" }} size={24} />
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
