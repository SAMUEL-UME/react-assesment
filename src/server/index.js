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
					name: "Eco-Friendly Bamboo Toothbrush",
					description:
						"This bamboo toothbrush is a sustainable alternative to traditional plastic toothbrushes. With a biodegradable handle and soft, BPA-free bristles, it offers gentle yet effective cleaning for your teeth. The minimalist design makes it a perfect fit for eco-conscious individuals looking to reduce plastic waste.",
				});
				server.create("item", {
					name: "Smart Water Bottle",
					description:
						"Stay hydrated and track your daily water intake with this smart water bottle. Equipped with a Bluetooth sensor and an LED reminder, it syncs with your smartphone to monitor hydration levels and sends gentle reminders to drink more water throughout the day. Its sleek, insulated design keeps your drink cold for 24 hours and hot for 12 hours.",
				});
				server.create("item", {
					name: "Wireless Noise-Cancelling Earbuds",
					description:
						" Immerse yourself in high-quality sound with these wireless noise-cancelling earbuds. Designed for comfort and convenience, they offer up to 8 hours of battery life on a single charge and come with a compact charging case for extended playtime. Whether you're on a call or listening to music, the active noise cancellation helps block out distractions.",
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
