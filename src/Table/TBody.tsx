import React, { ReactElement } from "react";
import style from "./Table.module.scss";
import Context from "../context";
interface Props {
  setViewObj: (obj: object) => any;
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

function TBody({ setViewObj }: Props): ReactElement {
  const { tableData} = React.useContext(Context);
  const onChangeView = (obj: object) => {
    setViewObj(obj);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <tbody>
      {tableData.map((obj: TObj, index: number) => (
        <tr key={`${obj.id}_${index}`} onClick={() => onChangeView(obj)}>
          <td>{obj.firstName}</td>
          <td>{obj.lastName}</td>
          <td>{obj.email}</td>
          <td>{obj.phone}</td>
          {
            <td>
              {JSON.stringify(obj.address)
                .replace(/[{":}]/gim, "")
                .replace(/streetAddress/gim, "")
                .replace(/city/gim, "")
                .replace(/zip/gim, "")
                .replace(/state/gim, "")
                .replace(/[,]/gim, " ")}
            </td>
          }
          <td>{obj.description}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TBody;
