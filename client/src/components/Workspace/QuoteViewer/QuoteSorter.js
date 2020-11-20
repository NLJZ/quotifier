import React from "react";
import { sortNewToOld, sortOldToNew } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const QuoteSorter = () => {
  const dispatch = useDispatch();

  const sortNew = () => {
    dispatch(sortNewToOld());
  };

  const sortOld = () => {
    dispatch(sortOldToNew());
  };

  return (
    <section className="sort-container">
      <ul className="sort-options">
        <li>sort:</li>
        <li>
          <button
            onClick={() => {
              sortNew();
            }}
          >
            newest
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              sortOld();
            }}
          >
            oldest
          </button>
        </li>
      </ul>
    </section>
  );
};

export default QuoteSorter;