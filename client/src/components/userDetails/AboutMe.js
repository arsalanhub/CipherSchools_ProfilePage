import React, { useState } from "react";

export default function AboutMe() {
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
        <div className="userDetailsHeading">About Me</div>
        <div className="btnClass" onClick={() => setDisable(!disable)}>
          {disable ? "Edit" : "Save"}
        </div>
      </div>
      <div className="aboutInputBox">
        <textarea
          className="aboutTextBox"
          placeholder="Add something about you."
          disabled={disable}
        />
        {!disable && (
          <span class="pencilClass">
            <img
              src="https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg"
              alt="pencil"
            />
          </span>
        )}
      </div>
      <div className="underline"></div>
    </div>
  );
}
