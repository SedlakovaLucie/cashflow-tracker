import React from "react";
import ListItem from "./ListItem";
import "./List.css";

const List = ({ title, items, type, onUpdate, onDelete }) => {
  return (
    <div className="list">
      <h2>{title}</h2>
      {Array.isArray(items) && items.length > 0 ? (
        items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            type={type}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>Žádné položky k zobrazení.</p>
      )}
    </div>
  );
};

export default List;
