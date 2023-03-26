import React, { useState } from "react";

export default function ProfessionalInformation() {
  const [disable, setDisable] = useState(true);
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
        <div className="btnClass" onClick={() => setDisable(!disable)}>
          {disable ? "Edit" : "Save"}
        </div>
      </div>
      <div className="professionalWrapper">
        <div className="professionalEle">
            <div className="professionalText">Highest Education</div>
            <div className="professionalOptn">
                <select style={{ border: "none", width: "100%" }} disabled={disable}>
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
                <select style={{ border: "none", width: "100%" }} disabled={disable}>
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
