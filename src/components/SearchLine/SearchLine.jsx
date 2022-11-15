import React from "react";
import "./SearchLine.css";

function SearchLine(props) {
  const teacherNames = [];
  props.theListOfClasses.forEach((teacher) =>
    !teacherNames.includes(teacher.teacherName)
      ? teacherNames.push(teacher.teacherName)
      : teacher
  );

  const theNamesOfTheProgrammingLanguages = [];
  props.theListOfClasses.forEach((language) =>
    !theNamesOfTheProgrammingLanguages.includes(language.theProgrammingLanguage)
      ? theNamesOfTheProgrammingLanguages.push(language.theProgrammingLanguage)
      : language
  );

  const changeTeacher = function (e) {
    props.setTeatcher(e.target.value);
  };

  const changeLanguage = function (e) {
    props.setLanguage(e.target.value);
  };

  return (
    <div className="searchLine">
      <div className="containerTeacherName">
        <label htmlFor="teacherName"> חיפוש לפי מורה:</label>

        <select
          name="teacherName"
          id="teacherName"
          onChange={(e) => {
            changeTeacher(e);
          }}
        >
          <option value="allTeachers">כל המורים</option>
          {teacherNames.map((teacherName) => (
            <option key={teacherName} value={teacherName}>
              {teacherName}
            </option>
          ))}
        </select>
      </div>

      <div className="containerLanguagesName">
        <label htmlFor="languagesName"> חיפוש לפי שפת תכנות:</label>
        <select
          name="languagesName"
          id="languagesName"
          onChange={(e) => {
            changeLanguage(e);
          }}
        >
          <option value="allLanguage">כל השפות</option>
          {theNamesOfTheProgrammingLanguages.map((languagesName) => (
            <option key={languagesName} value={languagesName}>
              {languagesName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchLine;
