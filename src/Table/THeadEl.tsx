import React, { ReactElement } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Context from "../context";
interface Props {
  el: string;
}

function THeadEl({ el }: Props): ReactElement {
  const { sortList, tableData, setNum, num } = React.useContext(Context);

  const [sortState, setSortState] = React.useState(false);
  const onChangeSortOrder = (el: string, state: boolean) => {
    sortList(el, state);
    setNum(num + 1); // я хз, почему сортировка работает только с этой штукой
    setSortState(!sortState);
  };

  return (
    <th onClick={() => onChangeSortOrder(el, sortState)}>
      {el}
      {sortState === true ? (
        <ExpandMoreIcon
          style={{ position: "relative", top: "4px", left: "5px" }}
        />
      ) : (
        <ExpandLessIcon
          style={{ position: "relative", top: "4px", left: "5px" }}
        />
      )}
    </th>
  );
}

export default THeadEl;
