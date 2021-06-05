/* eslint-disable no-unused-vars */
import "./App.css";
import { useState, useRef } from "react";
import OneDay from "./components/OneDay";
import OneWeek from "./components/OneWeek";
import OneMin from "./components/OneMin";
import FiveMin from "./components/FiveMin";

function App() {
  const [component, setComponent] = useState("OneMinute");

  const fiveMinutesRef = useRef();
  const oneMinuteRef = useRef();
  const oneDayRef = useRef();
  const oneWeekRef = useRef();

  const renderSwitch = (selctedComponent) => {
    setComponent(selctedComponent);
  };

  const focus = (selctedTable) => {
    switch (selctedTable) {
      case "oneMinuteRef":
        oneMinuteRef.current.className = "selected";
        fiveMinutesRef.current.className = "";
        oneDayRef.current.className = "";
        oneWeekRef.current.className = "";
        break;

      case "fiveMinutesRef":
        fiveMinutesRef.current.className = "selected";
        oneMinuteRef.current.className = "";
        oneDayRef.current.className = "";
        oneWeekRef.current.className = "";
        break;

      case "oneDayRef":
        oneDayRef.current.className = "selected";
        fiveMinutesRef.current.className = "";
        oneMinuteRef.current.className = "";
        oneWeekRef.current.className = "";
        break;

      case "oneWeekRef":
        oneWeekRef.current.className = "selected";
        fiveMinutesRef.current.className = "";
        oneDayRef.current.className = "";
        oneMinuteRef.current.className = "";
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="container">
        <table>
          <tbody>
            <tr style={{ padding: "1rem" }}>
              <th
                ref={fiveMinutesRef}
                className="selected"
                onClick={() => {
                  renderSwitch("OneMinute");
                  focus("fiveMinutesRef");
                }}
              >
                One Minute
              </th>
              <th
                ref={oneMinuteRef}
                onClick={() => {
                  renderSwitch("FiveMinutes");
                  focus("oneMinuteRef");
                }}
              >
                Five Minutes
              </th>
              <th
                ref={oneDayRef}
                onClick={() => {
                  renderSwitch("OneDay");
                  focus("oneDayRef");
                }}
              >
                One Day
              </th>
              <th
                ref={oneWeekRef}
                onClick={() => {
                  renderSwitch("OneWeek");
                  focus("oneWeekRef");
                }}
              >
                One Week
              </th>
            </tr>
          </tbody>
        </table>
        {
          {
            OneDay: <OneDay />,
            OneWeek: <OneWeek />,
            OneMinute: <OneMin />,
            FiveMinutes: <FiveMin />,
          }[component]
        }
      </div>
    </>
  );
}

export default App;
