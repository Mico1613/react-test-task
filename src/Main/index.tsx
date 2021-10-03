import React from "react";
import style from "./Main.module.scss";
import AddField from "../AddField";
import TopViewField from "../TopViewField";
import FilterComponent from "../FilterComponent";
import Table from "../Table";
import EmptyTable from "../EmptyTable";

interface props {
  data: any[];
}

type TObj = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address:
    | { city: string; state: string; streetAddress: string; zip: string }
    | object;
  description: string;
};

const Main = React.memo(({ data }: props) => {
  const [dataArr, setDataArr] = React.useState<any[]>(data);
  const [viewObj, setViewObj] = React.useState<TObj>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {},
    description: "",
  });
  const [activeAddField, setActiveAddField] = React.useState(false);

  function sortList(el: string, sortAsc: boolean): void {
    const newSortedArr = [...dataArr].sort(function (a: any, b: any): number {
      if (sortAsc) {
        return el === "address"
          ? parseInt(a[el].streetAddress) - parseInt(b[el].streetAddress)
          : a[el].localeCompare(b[el]);
      }
      if (!sortAsc) {
        return el === "address"
          ? parseInt(b[el].streetAddress) - parseInt(a[el].streetAddress)
          : b[el].localeCompare(a[el]);
      }
      return 0;
    });
    setDataArr(newSortedArr);
  }

  return (
    <div className={style.mainWrapper}>
      <div className={style.filterAndAddWrapper}>
        {!activeAddField ? (
          <FilterComponent dataArr={dataArr} setDataArr={setDataArr} />
        ) : null}
        <AddField
          dataArr={dataArr}
          setDataArr={setDataArr}
          setActiveAddField={setActiveAddField}
          activeAddField={activeAddField}
          hidden={dataArr.length > 0 ? false : true}
        />
      </div>
      {dataArr.length > 0 ? (
        <>
          <TopViewField viewObj={viewObj} />
          <Table
            dataArr={dataArr}
            setViewObj={setViewObj}
            sortList={sortList}
          />
        </>
      ) : (
        <EmptyTable />
      )}
    </div>
  );
});

export default Main;
