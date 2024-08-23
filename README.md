# React.js Authentication and CRUD Application with MirageJS

### Overview

This is a simple React.js application demonstrating user authentication and basic CRUD (Create, Read, Update, Delete) operations. The application uses MirageJS to simulate a backend API, React Context for global state management, and functional components.[visit github](https://github.com/samuel-ume).

## Features:

1. ### User Authentication

- **User Authentication**: Log in with an email and password. The dashboard is only accessible to authenticated users.
- Login functionality with email and password.
- Validation and error handling for incorrect credentials.
- Simple session management using localStorage to persist authentication state.

2. ### CRUD Operations:

- Display a list of items on the dashboard.
- Create new items, update existing items, delete items, and view details of individual items.
- Form validation for creating and updating items.


3. ### Search Functionality:
- Search for items by name or description.

4. ### Error Handling:
- Custom ErrorBoundary component to catch unexpected errors and prevent the app from crashing.
- Error handling for network requests, form validation errors, and empty states.



## Technologies Used
- **React**: Frontend framework for building user interfaces.
- **MirageJS**: API mocking library that enables the simulation of a backend without writing actual server-side code.
- **MUI**: Styling and creating custom component to increase user interaction


## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:

- Node.js (v12.x or higher)
- npm (comes with Node.js) or yarn

### Installation

1. **Clone the repository:**
```bash
   git clone https://github.com/your-username/react-mirage-crud-auth.git
```
2. **Navigate to the project directory:**
```bash
cd react-mirage-crud-auth
```

#. **Install dependencies**
```bash
 npm insatll 
   or 
 yarn install
```
2. **Running the application**
```bash
 npm insatll 
   or 
 yarn install
```


## Project structure
```bash
├── src
|   |── assets
│   │   └──hero.png
│   ├── components
│   │   ├── ButtonComp
│   │   │   └── Button.js
│   │   ├── Dashboard
│   │   │   ├── DashboardModal.js
│   │   │   │    ├── CreateItemModal.js
│   │   │   │    ├── DeleteItemModal.js
│   │   │   │    └── EditItemModal.js
│   │   │   └── ItemList.js
│   │   ├── FormFiels
│   │   │   ├── InputField.js
│   │   │   └── TextAreaField.js
│   │   ├── LandingPage
│   │   │   └── LandingPage.js
│   │   ├── Navbar
│   │   │   ├── DashboardSidebar
│   │   │   │    └── DashboardSidebar.js
│   │   │   └── Navbar.js
│   │   ├── ErrorBoundary.js
│   │   └── Search.js
│   ├── context
│   │   ├──  AuthContext.js
│   │   └──  ItemContext.js
│   ├── pages
│   │   ├── Dashboard.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   └── PageNotFound.js
│   ├── server
│   │   └── server.js
│   ├── utils
│   │   └── validation.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── README.md
```

## Features Explained

### 1.  **Authentication**
- **Login Component:** Users can log in using email and password. The authentication state is persisted using localStorage. If credentials are incorrect, an error message is displayed.

### 2.  **CRUD Operations**
- **Dashboard Component:** Displays a list of items fetched from MirageJS. Users can add, edit, delete, and view details of each item. Validation is enforced on form submissions, ensuring all required fields are filled.

### 3.  **Error Handling**
- **ErrorBoundary Component:** Wraps the entire application or specific components to catch and display a fallback UI in case of unexpected errors. The ErrorBoundary prevents the app from crashing on uncaught errors.

### 4. **Search Functionality**
- **Search Component:**  Allows users to filter the items displayed on the dashboard based on a search query.


###  Technologies Used
- React.js: Front-end library for building user interfaces.
- MirageJS: Mock server to handle API requests during development.
- React Context API: Global state management for user authentication.
- LocalStorage: Persisting user session state.
- Axios: For making HTTP requests.

### License

This project is licensed under the MIT License. See the *LICENSE* file for details.
##

