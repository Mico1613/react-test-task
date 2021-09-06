import React from "react";
import style from "./Table.module.scss";
import TBody from "./TBody";
import THead from "./THead";
import Context from "../context";
type props = {
  data: any;
};
type TObj = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: object;
  description: string;
};
function Table({ data }: props) {
  const tableData = React.useRef<any>(data).current;
  const [viewObj, setViewObj] = React.useState<TObj | any>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {},
    description: "",
  });
  const [num, setNum] = React.useState(1);

  // const [sortArr, setSortArr] = React.useState(data);
  // const qwe = [...sortArr];
  // function sortTest(): void {
  //   const foo = qwe.sort((a: string, b: string) => {
  //     if(a < b) return -1;
  //     if (b < a) return 1
  //   })
  // }

  function sortList(el: string, sortState: boolean) {
    tableData.sort((a: any, b: any) => {
      if (sortState === false) {
        if (el === "address") {
          return parseInt(b[el].streetAddress) - parseInt(a[el].streetAddress);
        } else {
          return b[el].localeCompare(a[el]);
        }
      } else if (sortState === true) {
        if (el === "address") {
          return parseInt(a[el].streetAddress) - parseInt(b[el].streetAddress);
        } else {
          return a[el].localeCompare(b[el]);
        }
      }
    });
  }

  return (
    <Context.Provider value={{ tableData, sortList, num, setNum }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {viewObj.id > 0 ? (
          <table className={`${style.table} ${style.table__first}`}>
            <tbody>
              <tr>
                <td>{viewObj.firstName}</td>
                <td>{viewObj.lastName}</td>
                <td>{viewObj.email}</td>
                <td>{viewObj.phone}</td>
                {
                  <td>
                    {JSON.stringify(viewObj.address)
                      .replace(/[{":}]/gim, "")
                      .replace(/streetAddress/gim, "")
                      .replace(/city/gim, "")
                      .replace(/zip/gim, "")
                      .replace(/state/gim, "")
                      .replace(/[,]/gim, " ")}
                  </td>
                }
                <td>{viewObj.description}</td>
              </tr>
            </tbody>
          </table>
        ) : null}
        <table className={style.table}>
          <THead tableData={tableData} sortList={sortList} />
          <TBody setViewObj={setViewObj} />
        </table>
      </div>
    </Context.Provider>
  );
}

export default Table;
