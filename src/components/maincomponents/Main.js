import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Main = () => {
  const { subjects, setSubjects } = useContext(UserContext);

  console.log(subjects);
  const onButtonAdd = (mySubject) => {
    const updatedSubject = subjects.map((subject) => {
      if (subject.id === mySubject.id) {
        return { ...subject, chosen: !subject.chosen };
      }
      return subject;
    });
    setSubjects(updatedSubject);
  };
  return (
    <>
      <div>
        <h3>you should take these courses:</h3>
      </div>
      <table>
        <tbody>
          <tr>
            <th>num</th>
            <th>Subject</th>
            <th>Id</th>
            <th>Action</th>
          </tr>
          {subjects
            ? subjects.map((subject, index) => (
                <tr key={subject.id}>
                  <td>{index + 1}</td>
                  <td>{subject.subject}</td>
                  <td>{subject.code}</td>
                  <td>
                    {subject.chosen ? (
                      <button onClick={() => onButtonAdd(subject)}>
                        remove
                      </button>
                    ) : (
                      <button onClick={() => onButtonAdd(subject)}>add</button>
                    )}
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </>
  );
};

export default Main;
