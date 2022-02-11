import React from "react";
import FilterItem from "./filteritem";
import "./filters.css";

const Filter = ({ filterList }) => {
  return (
    <div className="filters">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItem filter={filter} key={filter.id} />;
        })}
    </div>
  );
};

export default Filter;
