import React from "react";
import { useSelector } from "react-redux";

const CurrentFilters = () => {
  const currentFilters = useSelector((state) => state.activeFilters);
  const renderCurrentFilters = currentFilters.map((filter, i) => {
    return (
      <li className="filters" key={i}>
        {filter}
      </li>
    );
  });
  return (
    <section className="current-filters">
      <ul className="currentFilters">
        <li>Current Filters:</li>
        {renderCurrentFilters}
      </ul>
    </section>
  );
};

export default CurrentFilters;
