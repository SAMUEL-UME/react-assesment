// validation.js

export const validateName = (name) => {
    if (!name) {
      return "Name is required.";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters.";
    }
    return null;
  };
  
  export const validateDescription = (description) => {
    if (!description) {
      return "Description is required.";
    } else if (description.length < 5) {
      return "Description must be at least 5 characters.";
    }
    return null;
  };
  
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required.";
    } else if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }
    return null;
  };
  
  export const validatePassword = (password) => {
    if (!password) {
      return "Password is required.";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    return null;
  };
  
  // Check if item name exists in items list
	export const checkIfItemNameExists = (name, items) => {
		const lowerCasedName = name.toLowerCase();
		const isNameTaken = items.some((item) => item.name.toLowerCase() === lowerCasedName);
		return isNameTaken ? `An item with the name "${name}" already exists.` : null;
	};
