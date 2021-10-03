import React, { ReactElement } from "react";
import style from './EmptyTable.module.scss'

function EmptyTable(): ReactElement {
  return (
    <div className={style.wrapper}>
      <p> Пользователь не найден </p>
    </div>
  );
}

export default EmptyTable;
