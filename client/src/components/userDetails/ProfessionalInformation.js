import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProfessionalInformation() {
  const [disable, setDisable] = useState(true);
  const [education, setEducation] = useState(null);
  const [currently, setCurrently] = useState(null);

  const clickHandler = async () => {
    setDisable(!disable);
    if(!disable) {
      let userId = JSON.parse(localStorage.getItem("userData"))._id;
      let { data } = await axios.post("http://localhost:5000/updateUser/personalInfo", {
        userId, 
        highestEducation: education,
        currently
      })
      localStorage.setItem("userData", JSON.stringify(data.data));
    }
  }
  useEffect(() => {
    let professionalInfo = JSON.parse(localStorage.getItem("userData")).professionalInfo;
    setEducation(professionalInfo.highestEducation);
    setCurrently(professionalInfo.currently);
  }, [])
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
        <div className="userDetailsHeading">Professional Information</div>
        <div className="btnClass" onClick={() => clickHandler() }>
          {disable ? "Edit" : "Save"}
        </div>
      </div>
      <div className="professionalWrapper">
        <div className="professionalEle">
            <div className="professionalText">Highest Education</div>
            <div className="professionalOptn">
                <select style={{ border: "none", width: "100%" }} disabled={disable} value={education===null ? "" : education} onChange={(e)=>setEducation(e.target.value)}>
                    <option>Primary</option>
                    <option>Secondary</option>
                    <option selected>Higher Secondary</option>
                    <option>Graduation</option>
                    <option>Post Graduation</option>
                </select>
            </div>
        </div>
        <div className="professionalEle">
            <div className="professionalText">What do you do currently?</div>
            <div className="professionalOptn">
                <select style={{ border: "none", width: "100%" }} disabled={disable} value={currently===null ? "" : currently} onChange={(e)=>setCurrently(e.target.value)}>
                    <option>Schooling</option>
                    <option>Teaching</option>
                    <option selected>College Student</option>
                    <option>Job</option>
                    <option>Freelancing</option>
                </select>
            </div>
        </div>
      </div>
      <div className="underline"></div>
    </div>
  );
}
