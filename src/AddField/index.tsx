import React, { ReactElement } from "react";
import style from "./AddField.module.scss";
import { Button, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
interface Props {
  dataArr: any;
  setDataArr: any;
  setActiveAddField: any;
  activeAddField: boolean;
  hidden: boolean;
}

const AddField = React.memo(
  ({
    dataArr,
    setDataArr,
    setActiveAddField,
    activeAddField,
    hidden,
  }: Props): ReactElement => {
    const [formData, setFormData] = React.useState({});
    const handleChange = (e: React.SyntheticEvent<EventTarget>) => {
      setFormData({
        ...formData,
        id: Date.now(),
        [(e.target as HTMLInputElement).name]: (
          e.target as HTMLInputElement
        ).value.trim(),
      });
    };

    function closeAddField() {
      setFormData("");
      setActiveAddField(false);
    }

    function onAddField(e: React.SyntheticEvent<EventTarget>) {
      e.preventDefault();
      if (
        Object.values(formData).length === 7 &&
        Object.values(formData).every((el) => el)
      ) {
        setDataArr([formData, ...dataArr]);
        setFormData("");
        setActiveAddField(false);
      } else {
        alert("Заполните все поля");
      }
    }

    return (
      <div className={hidden ? style.hidden : style.addField}>
        <div className={style.wrapper}>
          {!activeAddField ? (
            <Button
              color="primary"
              variant="outlined"
              size="large"
              onClick={() => setActiveAddField(true)}
              style={{ fontSize: "1.3rem" }}
              startIcon={<AddIcon />}
            >
              Добавить поле
            </Button>
          ) : (
            <form className={style.form}>
              <Button
                color="secondary"
                variant="contained"
                onClick={closeAddField}
                endIcon={<CloseIcon />}
                size="large"
                style={{ fontSize: "1.1rem" }}
              >
                Закрыть
              </Button>
              {Object.keys(dataArr[0]).map((item: string, index: number) =>
                item !== "id" ? (
                  <TextField
                    key={`${item}_${index}`}
                    label={item}
                    name={item}
                    onChange={handleChange}
                    required
                  />
                ) : null
              )}
              <Button
                color="primary"
                onClick={(e) => onAddField(e)}
                variant="contained"
                startIcon={<AddIcon />}
                size="large"
                style={{ fontSize: "1.1rem" }}
              >
                Добавить
              </Button>
            </form>
          )}
        </div>
      </div>
    );
  }
);

export default AddField;
