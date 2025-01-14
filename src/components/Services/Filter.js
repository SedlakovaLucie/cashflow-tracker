import "./Filter.css";
import React, { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";

const Filter = ({ onFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const filterRef = useRef(null);

  const handleFilter = () => {
    onFilter(startDate, endDate);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-block" ref={filterRef}>
      <div className="filter-header">
        <FaFilter
          className="filter-icon"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      {isOpen && (
        <div className="filter-container">
          <h3>Filtr podle období</h3>
          <div className="filter-fields">
            <div>
              <label>Od:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label>Do:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleFilter}>Filtruj</button>
        </div>
      )}
    </div>
  );
};

export default Filter;
