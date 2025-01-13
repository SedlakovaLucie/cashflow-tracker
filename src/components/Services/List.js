import React, { useState } from "react";
import ListItem from "./ListItem";
import "./List.css";

const ITEMS_PER_PAGE = 10;

const List = ({ items, onUpdate, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="list">
      {visibleItems.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          type={item.type}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
