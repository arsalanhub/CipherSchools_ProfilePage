import React, { useEffect, useState } from "react";
import SimpleDialogDemo from "../DialogBox";

export default function Interests() {
  const [display, setDisplay] = useState(false);
  const [interestsData, setInterestsData] = useState(null);
  let arr = {
    "appDev": "App Development", 
    "dataScience": "Data Science", 
    "dsa": "Data Structures", 
    "gameDev": "Game Development", 
    "machineLearning": "Machine Learning", 
    "others": "Others", 
    "programming": "Programming", 
    "webDev": "Web Development"
  };
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userData")).interests
    setInterestsData(data);
  }, [])
  useEffect(() => {
    if(interestsData) console.log(interestsData);
  }, [interestsData])
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className="userDetailsHeading">Interests</div>
        <div className="btnClass" onClick={() => setDisplay(true)}>
          Edit
        </div>
      </div>
      {display && (
        <SimpleDialogDemo pageName={"Interests"} setDisplay={setDisplay} setInterestsData={setInterestsData}/>
      )}
      <div className="interestsWrapper">
        {interestsData!==null && Object.keys(interestsData).map((key) => {
            if(interestsData[key]===true) return ( <div className="oneLineInterest">{arr[key]}</div>)
        })}
      </div>
    </div>
  );
}
