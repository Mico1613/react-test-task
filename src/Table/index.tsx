import React, { ReactElement } from "react";
import style from "./Table.module.scss";
import TBody from "./TBody";
import THead from "./THead";

interface Props {
  dataArr: any;
  setViewObj: any;
  sortList: any;
}

function Table({ dataArr, setViewObj, sortList }: Props): ReactElement {
  return (
    <table className={style.table}>
      <THead dataArr={dataArr} sortList={sortList} />
      <TBody setViewObj={setViewObj} dataArr={dataArr} />
    </table>
  );
}

export default Table;
