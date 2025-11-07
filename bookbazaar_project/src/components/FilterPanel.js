import React from "react";
import { books } from "../data/books";

const getUnique = (key) => [...new Set(books.map(b => b[key]))];

export default function FilterPanel({ filters, onChange }) {
  return (
    <div className="filter-panel">
      {["genre", "author", "publisher"].map(cat => (
        <div key={cat}>
          <h3>{cat.toUpperCase()}</h3>
          {getUnique(cat).map(val => (
            <label key={val}>
              <input
                type="checkbox"
                checked={filters[cat].includes(val)}
                onChange={() => onChange(cat, val)}
              />
              {val}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}
