import React, { useState } from "react";
import Menu from "./Menu";
import Main from "./Main";
import CircularProgress from "@material-ui/core/CircularProgress";

const App = React.memo(() => {
  const [data, setData] = useState([]);
  const [choosen, setChoosen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const showData = async (amount: number) => {
    setChoosen(true);
    const fetchData = await fetch(
      `http://www.filltext.com/?rows=${amount}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|16}`
    );
    const resp = await fetchData.json();
    setData(resp);
    setLoaded(true);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {loaded ? (
        <Main data={data} />
      ) : (
        <div>
          {choosen ? (
            <CircularProgress
              style={{ marginTop: 150, width: 100, height: 100 }}
            />
          ) : (
            <Menu showData={showData} />
          )}
        </div>
      )}
    </div>
  );
});

export default App;
