import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  //To get all subjects.
  const [subjects, setSubjects] = useState();
  console.log(subjects);

  //To add Subjects chosen subjects to our list.
  const [added, setAdded] = useState();
  //get My subjects from chosenSubject.
  const mysub = (mySubjects) => {
    const finalCourses = mySubjects.filter(
      (mySubject) => mySubject.added === true
    );
    setAdded(finalCourses);
  };
  // To add chosen subject from our suggestion table.
  const chosenSubject = (id) => {
    const updatedSubject = subjects.map((subject) => {
      if (subject.id === id) {
        return { ...subject, added: !subject.added };
      }
      return subject;
    });

    setSubjects(updatedSubject);
    mysub(updatedSubject);
  };

  // To get data from Api
  const getData = () => {
    const { curriculum } = api;
    setSubjects(curriculum);
  };

  // To call our Api
  useEffect(() => {
    if (!subjects) {
      getData();
    }
  }, [subjects]);

  return (
    <UserContext.Provider
      value={{ subjects, setSubjects, chosenSubject, added }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
