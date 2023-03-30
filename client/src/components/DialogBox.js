import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastOptions } from "../toastOptions";
import axios from "axios";

function SimpleDialog(props) {
  const { open, setDisplay, pageName, setInterestsData, setName, setUserImage } = props;
  const [curPassword, setCurPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [appDev, setAppDev] = React.useState(false);
  const [dataScience, setDataScience] = React.useState(false);
  const [dsa, setDsa] = React.useState(false);
  const [gameDev, setGameDev] = React.useState(false);
  const [machineLearning, setMachineLearning] = React.useState(false);
  const [others, setOthers] = React.useState(false);
  const [programming, setProgramming] = React.useState(false);
  const [webDev, setWebDev] = React.useState(false);
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    let interests = userData.interests;
    setFirstName(userData.first_name);
    setLastName(userData.last_name);
    setEmail(userData.email);
    setPhone(userData.phone!==null ? userData.phone : "");
    setAppDev(interests.appDev);
    setDataScience(interests.dataScience);
    setDsa(interests.dsa);
    setGameDev(interests.gameDev);
    setMachineLearning(interests.machineLearning);
    setOthers(interests.others);
    setProgramming(interests.programming);
    setWebDev(interests.webDev);
  }, []);

  const savePassword = async () => {
    if (newPassword !== confirmPassword)
      toast.error("New password != Confirm Password", toastOptions);
    else {
      let userId = JSON.parse(localStorage.getItem("userData"))._id;
      let { data } = await axios.post(
        "http://localhost:5000/updateUser/password",
        {
          userId,
          cur_password: curPassword,
          new_password: newPassword,
        }
      );
      if (data.data.length === 0) toast.error(data.msg, toastOptions);
      else {
        toast.success(data.msg, toastOptions);
        curPassword("");
        newPassword("");
        confirmPassword("");
      }
    }
  };

  const saveUserDetails = async () => {
    let userId = JSON.parse(localStorage.getItem("userData"))._id
    let formData = new FormData();
    formData.append("userId", userId);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("profile", image)
    let { data } = await axios.post("http://localhost:5000/updateUser/details", formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    localStorage.setItem("userData", JSON.stringify(data.data));
    setName(data.data.first_name);
    setUserImage(data.data.image);
    toast.success(data.msg, toastOptions);
  }

  const saveInterests = async () => {
    let userId = JSON.parse(localStorage.getItem("userData"))._id;
    let { data }  = await axios.post("http://localhost:5000/updateUser/interest", {
      userId,
      appDev, 
      dataScience,
      dsa,
      gameDev,
      machineLearning,
      others,
      programming,
      webDev,
    })
    localStorage.setItem("userData", JSON.stringify(data.data));
    setInterestsData(data.data.interests);
  }

  if (pageName === "Password") {
    return (
      <Dialog
        onClose={() => setDisplay(false)}
        open={open}
        className="dialogBoxClass"
      >
        <div>
          <div className="passwordHeadings">Current Passowrd</div>
          <div className="dialogBoxPassword">
            <input
              type="password"
              placeholder="Current Password"
              className="dialogPasswordInput"
              onChange={(e) => setCurPassword(e.target.value)}
            />
            <img
              src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg"
              className="eyeDialog"
            />
          </div>
        </div>
        <div>
          <div className="passwordHeadings">New Passowrd</div>
          <div className="dialogBoxPassword">
            <input
              type="password"
              placeholder="New Password"
              className="dialogPasswordInput"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <img
              src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg"
              className="eyeDialog"
            />
          </div>
        </div>
        <div>
          <div className="passwordHeadings">Confirm Passowrd</div>
          <div className="dialogBoxPassword">
            <input
              type="password"
              placeholder="Confirm Password"
              className="dialogPasswordInput"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <img
              src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg"
              className="eyeDialog"
            />
          </div>
        </div>
        <div className="dialogButton">
          <div className="cancel-btn" onClick={() => setDisplay(false)}>
            Cancel
          </div>
          <div className="save-btn" onClick={() => savePassword()}>
            Save
          </div>
        </div>
        <ToastContainer />
      </Dialog>
    );
  } else if (pageName === "profileUpdate") {
    return (
      <Dialog
        onClose={() => setDisplay(false)}
        open={open}
        className="dialogBoxClass"
      >
        <div style={{ gap: "10px", alignItems: "center", display: "grid", fontWeight: "400", fontSize: "0.875rem", lineHeight: "1.43" }}>Profile Update</div>
        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "1rem" }}>
          <div className="dialogImage">
            <svg
              class="MuiSvgIcon-root MuiAvatar-fallback"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
          </div>
          <div>
            <div>
              <div className="detailDialogtext">First Name</div>
              <input
                type="text"
                className="dialogBoxDetail"
                placeholder="First Name"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
              />
              <div className="detailDialogtext">Last Name</div>
              <input
                type="text"
                className="dialogBoxDetail"
                placeholder="Last Name"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
              />
              <div className="detailDialogtext">Email Address</div>
              <input
                type="text"
                className="dialogBoxDetail"
                placeholder="Email Address"
                disabled
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <div className="detailDialogtext">Mobile Number</div>
              <input
                type="text"
                className="dialogBoxDetail"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
              />
              <div className="dialogButton">
                <div className="cancel-btn" onClick={() => setDisplay(false)}>
                  Cancel
                </div>
                <div className="save-btn" onClick={() => saveUserDetails()}>
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </Dialog>
    );
  }
  else if (pageName === "Interests") {
    return (
      <Dialog
        onClose={() => setDisplay(false)}
        open={open}
        className="dialogBoxClass"
      >
        <div className="interestItem">
          <div className="interestElement" style={{ backgroundColor: appDev ? "#f3912e" : "#f2f5fa"}} onClick={()=> setAppDev(!appDev)}>
            App Development
          </div>
          <div className="interestElement" style={{ backgroundColor: webDev ? "#f3912e" : "#f2f5fa"}} onClick={()=> setWebDev(!webDev)}>
            Web Development
          </div>
          <div className="interestElement" style={{ backgroundColor: gameDev ? "#f3912e" : "#f2f5fa"}} onClick={()=> setGameDev(!gameDev)}>
            Game Development
          </div>
          <div className="interestElement" style={{ backgroundColor: dsa ? "#f3912e" : "#f2f5fa"}} onClick={()=> setDsa(!dsa)}>
            Data Structures
          </div>
          <div className="interestElement" style={{ backgroundColor: programming ? "#f3912e" : "#f2f5fa"}} onClick={()=> setProgramming(!programming)}>
            Programming
          </div>  
          <div className="interestElement" style={{ backgroundColor: machineLearning ? "#f3912e" : "#f2f5fa"}} onClick={()=> setMachineLearning(!machineLearning)}>
            Machine Learning
          </div>
          <div className="interestElement" style={{ backgroundColor: dataScience ? "#f3912e" : "#f2f5fa"}} onClick={()=> setDataScience(!dataScience)}>
            Data Science
          </div>  
          <div className="interestElement" style={{ backgroundColor: others ? "#f3912e" : "#f2f5fa"}} onClick={()=> setOthers(!others)}>
            Others
          </div>  
        </div>
        <div className="dialogButton">
          <div className="cancel-btn" onClick={() => setDisplay(false)}>
            Cancel
          </div>
          <div className="save-btn" onClick={()=>saveInterests()}>
            Save
          </div>
              </div>
      </Dialog>
    )
  }
}

export default function SimpleDialogDemo({ pageName, setDisplay, setInterestsData, setName, setUserImage }) {
  return (
    <div>
      <SimpleDialog
        open={true}
        onClose={() => setDisplay(false)}
        setDisplay={setDisplay}
        pageName={pageName}
        setInterestsData={setInterestsData}
        setName={setName}
        setUserImage={setUserImage}
      />
    </div>
  );
}
