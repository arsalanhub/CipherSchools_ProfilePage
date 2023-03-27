import * as React from 'react';
import Dialog from '@mui/material/Dialog';

function SimpleDialog(props) {
  const { open, setDisplay, pageName } = props;

  if(pageName==="Password") {
    return (
        <Dialog onClose={() => setDisplay(false)} open={open} className="dialogBoxClass">
            <div>
                <div className="passwordHeadings">Current Passowrd</div>
                <div className="dialogBoxPassword">
                    <input type="password" placeholder="Current Password" className="dialogPasswordInput" />
                    <img src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg" className="eyeDialog" />
                </div>
            </div>
            <div>
                <div className="passwordHeadings">New Passowrd</div>
                <div className="dialogBoxPassword">
                    <input type="password" placeholder="Current Password" className="dialogPasswordInput" />
                    <img src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg" className="eyeDialog" />
                </div>
            </div>
            <div>
                <div className="passwordHeadings">Confirm Passowrd</div>
                <div className="dialogBoxPassword">
                    <input type="password" placeholder="Current Password" className="dialogPasswordInput" />
                    <img src="https://www.cipherschools.com/static/media/Eye.270f75dfd9c2b2af1ea99439d7cf3d9c.svg" className="eyeDialog" />
                </div>
            </div>
            <div className="dialogButton">
                <div className="cancel-btn" onClick={()=>setDisplay(false)}>Cancel</div>
                <div className="save-btn">Save</div>
            </div>
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