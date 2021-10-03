import React, { ReactElement } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
interface Props {
  el: string;
  sortList: any;
}

const THeadEl = React.memo(({ el, sortList }: Props): ReactElement => {
  const [sortState, setSortState] = React.useState(false);
  const onChangeSortOrder = (el: string, state: boolean) => {
    sortList(el, state);
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
});

export default THeadEl;
