import React from "react";
import style from "./topViewField.module.scss";
interface Props {
  viewObj: any;
}

const TopViewField = ({ viewObj }: Props) => {
  function addressHandler(arg: object | string): any {
    if (typeof arg === "object") {
      return JSON.stringify(arg)
        .replace(/[{":}]/gim, "")
        .replace(/streetAddress/gim, "")
        .replace(/city/gim, "")
        .replace(/zip/gim, "")
        .replace(/state/gim, "")
        .replace(/[,]/gim, " ");
    }
    return arg;
  }
  return (
    <>
      {viewObj.id > 0 ? (
        <table className={style.viewObj}>
          <tbody>
            <tr>
              <td>{viewObj.firstName}</td>
              <td>{viewObj.lastName}</td>
              <td>{viewObj.email}</td>
              <td>{viewObj.phone}</td>
              <td>{addressHandler(viewObj.address)}</td>
              <td>{viewObj.description}</td>
            </tr>
          </tbody>
        </table>
      ) : null}
    </>
  );
};

export default TopViewField;
