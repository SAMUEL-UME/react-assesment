import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
	return (
		<div className="h-screen flex flex-col items-center justify-center bg-gray-100">
			<h1 className="text-9xl font-bold text-blue-600">404</h1>
			<h2 className="text-2xl font-semibold text-gray-800 mt-4">
				Page Not Found
			</h2>
			<p className="text-lg text-gray-600 mt-2 mb-8">
				Sorry, the page you're looking for doesn't exist.
			</p>
			<Link
				to="/"
				className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
			>
				Go Back Home
			</Link>
		</div>
	);
}

export default PageNotFound;
