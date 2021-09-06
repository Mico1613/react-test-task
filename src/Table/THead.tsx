import React, { ReactElement } from "react";
import style from "./Table.module.scss";

import THeadEl from "./THeadEl";
interface Props {
  tableData: any;
  sortList: (el: string, sortState: boolean) => void;
}

function THead({ tableData, sortList }: Props): ReactElement {
  return (
    <thead>
      <tr>
        {Object.keys(tableData[0]).map((el, index) =>
          el !== "id" ? <THeadEl el={el} key={`${el}_${index}`} /> : null
        )}
      </tr>
    </thead>
  );
}

export default THead;
