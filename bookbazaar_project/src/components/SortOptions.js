import React from "react";

export default function SortOptions({ onSortChange }) {
  return (
    <div className="sort-options">
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort by</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
}
