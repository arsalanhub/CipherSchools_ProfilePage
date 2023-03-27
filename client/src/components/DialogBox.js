import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastOptions } from '../toastOptions';
import axios from "axios";

function SimpleDialog(props) {
  const { open, setDisplay, pageName } = props;
  const [curPassword, setCurPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const savePassword = async () => {
    if(newPassword !== confirmPassword) toast.error("New password != Confirm Password", toastOptions);
    else
    {
      let userId = JSON.parse(localStorage.getItem("userData"))._id
      let { data } = await axios.post("http://localhost:5000/updateUser/password", {
        userId,
        cur_password: curPassword,
        new_password: newPassword
      })
      if(data.data.length===0) toast.error(data.msg, toastOptions);
      else 
      {
        toast.success(data.msg, toastOptions);
        curPassword("");
        newPassword("");
        confirmPassword("");
      }
    }
  }
  if(pageName==="Password") {
    return (
        <Dialog onClose={() => setDisplay(false)} open={open} className="dialogBoxClass">
            <div>
                <div className="passwordHeadings">Current Passowrd</div>
                <div className="dialogBoxPassword">
                    <input type="password" placeholder="Current Password" className="dialogPasswordInput" onChange={(e)=>setCurPassword(e.target.value)} />
                    <img src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg" className="eyeDialog" />
                </div>
            </div>
            <div>
                <div className="passwordHeadings">New Passowrd</div>
                <div className="dialogBoxPassword">
                    <input type="password" placeholder="New Password" className="dialogPasswordInput" onChange={(e)=>setNewPassword(e.target.value)} />
                    <img src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg" className="eyeDialog" />
                </div>
            </div>
            <div>
                <div className="passwordHeadings">Confirm Passowrd</div>
                <div className="dialogBoxPassword">
                    <input type="password" placeholder="Confirm Password" className="dialogPasswordInput" onChange={(e)=>setConfirmPassword(e.target.value)} />
                    <img src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg" className="eyeDialog" />
                </div>
            </div>
            <div className="dialogButton">
                <div className="cancel-btn" onClick={()=>setDisplay(false)}>Cancel</div>
                <div className="save-btn" onClick={()=>savePassword()}>Save</div>
            </div>
            <ToastContainer />
        </Dialog>
    )
  }
}

export default function SimpleDialogDemo({ pageName, setDisplay }) {
  return (
    <div>
      <SimpleDialog
        open={true}
        onClose={() => setDisplay(false)}
        setDisplay={setDisplay}
        pageName={pageName}
      />
    </div>
  );
}