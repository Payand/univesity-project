import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ChosenCourses = () => {
  const { added, chosenSubject } = useContext(UserContext);

  return (
    <>
      <div className="container">
        <h2>courses you have Chosen</h2>
        <div className="counter">
          <p>
            count :<span>{added.length}</span>
          </p>
        </div>
        <table>
          <tbody>
            <tr>
              <th>num</th>
              <th>Subjects</th>
              <th>Id</th>
              <th>Action</th>
            </tr>
            {added.length ? (
              added.map((subject, index) => (
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
                <td>You haven't chosne any courses</td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
        {added.length > 1 ? (
          <div className="submit-list-c">
            <button className="submit-list">submit</button>
          </div>
        ) : (
          <div className="submit-list-c">
            <button className="submit-list" disabled>
              submit
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default ChosenCourses;