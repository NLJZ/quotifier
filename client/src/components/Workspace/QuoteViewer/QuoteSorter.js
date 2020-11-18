import React, { useState } from "react";
import { sortNewToOld, sortOldToNew } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const QuoteSorter = () => {
  const [active, setActive] = useState(null);
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
            className={active === 1 ? "active" : null}
            onClick={() => {
              sortNew();
            }}
          >
            newest
          </button>
        </li>
        <li>
          <button
            className={active === 2 ? "active" : null}
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
