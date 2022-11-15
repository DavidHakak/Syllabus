import React, { useState } from "react";
import SearchLine from "../SearchLine/SearchLine";
import Table from "../Table/Table";
import { theListOfClasses } from "../../the_list_of_classes";
import "./Main.css";

function Main() {
  const [teacher, setTeatcher] = useState("allTeachers");
  const [language, setLanguage] = useState("allLanguage");
  return (
    <div className="main">
      <SearchLine
        theListOfClasses={theListOfClasses}
        setTeatcher={setTeatcher}
        setLanguage={setLanguage}
      />

      <Table
        theListOfClasses={theListOfClasses}
        language={language}
        teacher={teacher}
      />
    </div>
  );
}

export default Main;
