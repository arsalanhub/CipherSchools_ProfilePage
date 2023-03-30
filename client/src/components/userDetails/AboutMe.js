import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AboutMe() {
  const [disable, setDisable] = useState(true);
  const [text, setText] = useState("");
  const clickHandler = async () => {
    setDisable(!disable);
    if(!disable) {
      let userId = JSON.parse(localStorage.getItem("userData"))._id;
      let { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/updateUser/about`, {
        userId,
        about_me: text
      })
      localStorage.setItem("userData", JSON.stringify(data.data));
    }
  }

  useEffect(() => {
    setText(JSON.parse(localStorage.getItem("userData")).about_me);
    console.log(JSON.parse(localStorage.getItem("userData")).about_me)
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
        <div className="userDetailsHeading">About Me</div>
        <div className="btnClass" onClick={() => clickHandler()}>
          {disable ? "Edit" : "Save"}
        </div>
      </div>
      <div className="aboutInputBox">
        <textarea
          className="aboutTextBox"
          placeholder="Add something about you."
          disabled={disable}
          value={text}
          onChange={(e) => setText(e.target.value)}
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
