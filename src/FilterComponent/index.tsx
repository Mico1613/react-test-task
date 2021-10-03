import { TextField } from "@material-ui/core";
import React, { ReactElement } from "react";

interface Props {
  dataArr: any[];
  setDataArr: any;
}

const FilterComponent = React.memo(
  ({ dataArr, setDataArr }: Props): ReactElement => {
    const [filterState, setFilterState] = React.useState("");

    const unmutableArr = React.useMemo(() => [...dataArr], []);

    const filterInputHandler = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFilterState((e.target as HTMLInputElement).value);
      const filteredArr = unmutableArr.filter((item: any) =>
        JSON.stringify(item)
          .toLowerCase()
          .includes((e.target as HTMLInputElement).value.trim().toLowerCase())
      );
      if (filteredArr.length > 0) {
        setDataArr([...filteredArr]);
      }
      if (filteredArr.length === 0) {
        setDataArr([]);
      }
    };

    return (
      <>
        <TextField
          id="filterInput"
          label="Поиск"
          variant="outlined"
          color="primary"
          value={filterState}
          onChange={(e) => filterInputHandler(e)}
        />
      </>
    );
  }
);

export default FilterComponent;
