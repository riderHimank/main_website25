"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbar.css";
import info from "./data";
import titledata from "./title";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (value) => {
    setInput(value);
    setSelectedCategory("");
    const filtered = info.filter((item) =>
      item.tags.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setInput("");
    const filtered = info.filter((item) => item.category === category);
    setFilteredData(filtered);
  };

  return (
    <div>
      <div className="search-bar">
        <div className="dropdown-wrapper">
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            //   disabled={input !== ""}
          >
            <option value="">Modules</option>
            {titledata.map((title) => (
              <option key={title.id} value={title.category}>
                {title.category}
              </option>
            ))}
          </select>
        </div>

        <div className="input-wrapper">
          <input
            placeholder="Type here to search"
            value={input}
            onChange={(e) => handleSearch(e.target.value)}
            //   disabled={selectedCategory !== ""}
          />
          <div className="searchdiv">
            <img src="./searchIcon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="results">
        {filteredData.map((item) => (
          <div key={item.id} className="result-item">
            <p>{item.comp_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
