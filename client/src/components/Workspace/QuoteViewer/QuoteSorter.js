import React, { useState } from "react";

const QuoteSorter = () => {
  const [active, setActive] = useState(1);

  const activeButton = (num) => {
    setActive(num);
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
