import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Main = () => {
  const { subjects, chosenSubject } = useContext(UserContext);

  return (
    <>
      <div className="container">
        <h2>you should take these courses:</h2>
      </div>
      <table>
        <tbody>
          <tr>
            <th>num</th>
            <th>Subjects</th>
            <th>Id</th>
            <th>Action</th>
          </tr>
          {subjects ? (
            subjects.map((subject, index) => (
              <tr className="blue-table" key={subject.id}>
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
            <tr>
              <td>loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Main;
