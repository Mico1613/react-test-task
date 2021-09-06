import React from "react";
import style from "./Menu.module.scss";
import { Button } from "@material-ui/core";

type props = {
  showData: (amount: number) => void;
};
function Menu({showData}:props) {

  return (
    <div className={style.menu}>
      <h1>Скока данных дать?</h1>
      <div className={style.flex}>
        <Button
          variant="contained"
          color="primary"
          style={{ fontSize: "1.5rem", padding: "20px" }}
          onClick={() => showData(32)}
        >
          Чут чут
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ fontSize: "1.5rem", padding: "20px" }}
          onClick={() => showData(100)}
        >
          Многа
        </Button>
      </div>
    </div>
  );
}

export default Menu;
