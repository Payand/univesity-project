import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
const SearchRender = () => {
  const { result, chosenSubject } = useContext(UserContext);

  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <th>num</th>
            <th>Subjects</th>
            <th>Id</th>
            <th>Action</th>
          </tr>
          {result.length ? (
            result.map((subject, index) => (
              <tr
                className={subject.added ? "green-table" : "blue-table"}
                key={subject.id}
              >
                <td>{index + 1}</td>
                <td>{subject.subject}</td>
                <td>{subject.code}</td>
                <td>
                  {subject.added ? (
                    <button onClick={() => chosenSubject(subject.id)}>
                      Remove
                    </button>
                  ) : (
                    <button onClick={() => chosenSubject(subject.id)}>
                      Add
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr className="blue-table">
              <td></td>
              <td>you haven't search your course</td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default SearchRender;
