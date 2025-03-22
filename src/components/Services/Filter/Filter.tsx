import "./Filter.css";
import React, { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import {FilterProps} from "../../../types"

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const filterRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (filterRef.current && event.target instanceof Node && !filterRef.current.contains(event.target)) {
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
        <FaFilter className="filter-icon" onClick={() => setIsOpen((prev) => !prev)} />
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
          <div className="filter-buttons">
            <button onClick={() => { setStartDate(""); setEndDate(""); onFilter("", ""); setIsOpen(false); }} className="reset-button">
              Zrušit
            </button>
            <button onClick={() => { onFilter(startDate, endDate); setIsOpen(false); }}>
              Filtruj
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
