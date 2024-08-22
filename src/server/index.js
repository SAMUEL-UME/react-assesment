import { createServer, Model } from "miragejs";

export function makeServer() {
	createServer({
		models: {
			user: Model,
			item: Model,
		},

		seeds(server) {
			// Check for existing data in localStorage
			const savedItems = localStorage.getItem("mirage-items");
			if (savedItems) {
				JSON.parse(savedItems).forEach((item) => server.create("item", item));
			} else {
				// If no localStorage data, seed the default data
				server.create("item", {
					name: "Item 1",
					description: "This is item 1",
				});
				server.create("item", {
					name: "Item 2",
					description: "This is item 2",
				});
			}
			//seed data for user
			server.create("user", {
				email: "test@example.com",
				password: "password123",
			});
		},

		routes() {
			this.namespace = "api";

			// User login route
			this.post("/login", (schema, request) => {
				let { email, password } = JSON.parse(request.requestBody);
				if (!email || !password) {
					return new Response(
						400,
						{},
						{ error: "Email and password are required" }
					);
				}
				// Find the user by email and password
				let user = schema.users.findBy({ email, password });
				// Return response based on the user object
				return user
					? new Response(200, {}, { user })
					: new Response(401, {}, { error: "Invalid credentials" });
			});

			// CRUD routes for items

			//Get all item
			this.get("/items", (schema) => {
				return schema.items.all();
			});

			//create item
			this.post("/items", (schema, request) => {
				let newItem = JSON.parse(request.requestBody);
				const createdItem = schema.items.create(newItem);
				if (!createdItem) {
					return new Response(400, {}, { error: "Failed to create item" });
				} else {
					// Save the current state of items to localStorage
					saveItemsToLocalStorage(schema.items.all().models);
					return createdItem;
				}
			});

			//update item
			this.put("/items/:id", (schema, request) => {
				let newAttrs = JSON.parse(request.requestBody);
				let id = request.params.id;
				let item = schema.items.find(id);
				if (!item) {
					return new Response(404, {}, { error: "Item not found" });
				} else {
					const updatedItem = item.update(newAttrs);
					// Save the updated state to localStorage
					saveItemsToLocalStorage(schema.items.all().models);

					return updatedItem;
				}
			});

			this.delete("/items/:id", (schema, request) => {
				let id = request.params.id;
				schema.items.find(id).destroy();

				// Save the updated state to localStorage after deletion
				saveItemsToLocalStorage(schema.items.all().models);
				return {};
			});
		},
	});
}

// Helper function to save MirageJS data to localStorage
function saveItemsToLocalStorage(items) {
	localStorage.setItem("mirage-items", JSON.stringify(items));
}
