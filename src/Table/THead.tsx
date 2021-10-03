import React, { ReactElement } from "react";
import style from "./Table.module.scss";
import THeadEl from "./THeadEl";
interface Props {
  dataArr: any;
  sortList: any;
}

const THead = React.memo(({ dataArr, sortList }: Props): ReactElement => {
  return (
    <thead className={style.table}>
      <tr>
        {Object.keys(dataArr[0]).map((el, index) =>
          el !== "id" ? <THeadEl el={el} key={`${el}_${index}`} sortList={sortList}/> : null
        )}
      </tr>
    </thead>
  );
});

export default THead;
