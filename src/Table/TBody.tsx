import React, { ReactElement } from "react";
import style from "./Table.module.scss";
interface Props {
  setViewObj: (obj: object) => any;
  dataArr: any;
}
type TObj = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: object;
  description: string;
};

const TBody = React.memo(({ setViewObj, dataArr }: Props): ReactElement => {
  const onChangeView = (obj: object) => {
    setViewObj(obj);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
    <tbody className={style.table}>
      {dataArr.map((obj: TObj, index: number) => (
        <tr key={`${obj.id}_${index}`} onClick={() => onChangeView(obj)}>
          <td>{obj.firstName}</td>
          <td>{obj.lastName}</td>
          <td>{obj.email}</td>
          <td>{obj.phone}</td>
          <td>{addressHandler(obj.address)}</td>
          <td>{obj.description}</td>
        </tr>
      ))}
    </tbody>
  );
});

export default TBody;
