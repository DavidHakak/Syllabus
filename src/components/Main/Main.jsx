import React from "react";
import SearchLine from "../SearchLine/SearchLine";
import Table from "../Table/Table";
import { theListOfClasses } from "../../the_list_of_classes";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <SearchLine theListOfClasses={theListOfClasses} />
     
        <Table theListOfClasses={theListOfClasses} />
    </div>
  );
}

export default Main;
