import React from "react";
import "./Table.css";

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>שם המורה</th>
          <th>שם השפה</th>
          <th>תאריך</th>
          <th>מס׳ שיעור</th>
          <th>תוכן השיעור</th>
          <th>קישור לשיעור</th>

          <th>מצגות וכו׳</th>
        </tr>
      </thead>

      <tbody>
        {props.theListOfClasses.map((classes) => (
          <tr>
            <td>{classes.teacherName}</td>
            <td>{classes.theProgrammingLanguage}</td>
            <td>{classes.date}</td>
            <td>{classes.theLessonNumber}</td>
            <td>{classes.theContentOfTheLesson}</td>
            <td>
              <a
                href={classes.linkToTheLesson}
                target={"_blank"}
                rel="noreferrer"
              >
                <button>לצפייה בשיעור</button>
              </a>
            </td>

            <td>{classes.presentationsAndMore}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
