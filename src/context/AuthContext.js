// src/context/AuthContext.js
import React, { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	//Check if isAuthState exist in local storage
	const storedAuthState = localStorage.getItem("isAuthenticated");
	const isValidAuthState = storedAuthState
		? JSON.parse(storedAuthState)
		: false;

	//authstate
	const [isAuthenticated, setIsAuthenticated] = useState(isValidAuthState);

	const addAuthStateToLoacalstorage = (state) => {
		localStorage.setItem("isAuthenticated", JSON.stringify(state));
	};

	const login = async (email, password) => {
		try {
			const response = await axios.post("/api/login", { email, password });
			if (response.status === 201) {
				setIsAuthenticated(true);
				addAuthStateToLoacalstorage(true);
				return true;
			}
		} catch (error) {
			alert("Invalid credentials");
			return false;
		}
	};

	const logout = () => {
		setIsAuthenticated(false);
		addAuthStateToLoacalstorage(false);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider, AuthContext };
