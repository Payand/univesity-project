import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
const MainSearch = () => {
  const { setSearch, resetBtn } = useContext(UserContext);
  const [value, setValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearch(value);
  };

  return (
    <div className="container">
      <h2>Search</h2>
      <div className="form-search">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button>search</button>
          <button onClick={() => resetBtn()}>reset</button>
        </form>
      </div>
    </div>
  );
};

export default MainSearch;
