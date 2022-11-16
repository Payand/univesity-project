import React from "react";

const TableRenderer = ({ subjects, chosenSubject }) => {
  return (
    <>
      {subjects
        ? subjects.map((subject, index) => (
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
                  <button onClick={() => chosenSubject(subject.id)}>Add</button>
                )}
              </td>
            </tr>
          ))
        : added
        ? added.map((subject, index) => (
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
                  <button onClick={() => chosenSubject(subject.id)}>Add</button>
                )}
              </td>
            </tr>
          ))
        : result.lenght
        ? subjects.map((subject, index) => (
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
                  <button onClick={() => chosenSubject(subject.id)}>Add</button>
                )}
              </td>
            </tr>
          ))
        : "hello"}
    </>
  );
};

export default TableRenderer;
