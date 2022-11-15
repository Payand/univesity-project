import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const MainCourse = () => {
  const { added, chosenSubject } = useContext(UserContext);

  return (
    <>
      <div className="container">
        <h2>courses you have Chosen</h2>

        <table>
          <tbody>
            <tr>
              <th>num</th>
              <th>Subjects</th>
              <th>Id</th>
              <th>Action</th>
            </tr>
            {added ? (
              added.map((subject, index) => (
                <tr className="green-table" key={subject.id}>
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
                <td>You haven't choose any courses</td>
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
export default MainCourse;
