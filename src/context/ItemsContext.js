// src/context/ItemsContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchItems = async () => {
    const response = await axios.get("/api/items")
    setItems(response.data.items);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const createItem = async (item) => {
    await axios.post("/api/items", item);
    fetchItems();
  };

  const updateItem = async (id, updatedItem) => {
    await axios.put(`/api/items/${id}`, updatedItem);
    fetchItems();
  };

  const deleteItem = async (id) => {
    await axios.delete(`/api/items/${id}`);
    fetchItems();
  };

  return (
    <ItemsContext.Provider value={{ items: filteredItems, createItem, updateItem, deleteItem, searchQuery, setSearchQuery }}>
      {children}
    </ItemsContext.Provider>
  );
};

export { ItemsProvider, ItemsContext };
