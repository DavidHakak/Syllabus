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
  return (
    <div className="searchLine">
      <div className="containerTeacherName">
        <label htmlFor="teacherName"> חיפוש לפי שם המורה:</label>

        <select name="teacherName" id="teacherName">
          {teacherNames.map((teacherName) => (
            <option key={teacherName} value={teacherName}>
              {teacherName}
            </option>
          ))}
        </select>
      </div>

      <div className="containerLanguagesName">
        <label htmlFor="languagesName"> חיפוש לפי שם שפת התכנות:</label>
        <select name="languagesName" id="languagesName">
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
