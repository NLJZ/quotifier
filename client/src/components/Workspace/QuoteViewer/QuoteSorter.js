import React, { useState } from "react";
import { sortNewToOld, sortOldToNew } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const QuoteSorter = () => {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();

  const activeButton = async (num) => {
    await setActive(num);
    if (active === 1) {
      dispatch(sortNewToOld());
    } else {
      dispatch(sortOldToNew());
    }
  };

  return (
    <section className="sort-container">
      <ul className="sort-options">
        <li>sort:</li>
        <li>
          <button
            className={active === 1 ? "active" : null}
            onClick={() => {
              activeButton(1);
            }}
          >
            newest
          </button>
        </li>
        <li>
          <button
            className={active === 2 ? "active" : null}
            onClick={() => {
              activeButton(2);
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
