import React, { useState } from "react";
import ListItem from "./ListItem";
import "./List.css";
import { PiEmptyBold } from "react-icons/pi";
import { ListProps } from "../../../types";

const ITEMS_PER_PAGE = 10;

const List: React.FC<ListProps> = ({ items, onUpdate, onDelete }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="list">
      {visibleItems.length > 0 ? (
        visibleItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            type={item.type}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      ) : (
        <div className="empty-message">
          <PiEmptyBold />
          <p>Ve zvoleném období nejsou žádné záznamy.</p>
        </div>
      )}

      {totalPages > 1 && visibleItems.length > 0 && (
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
