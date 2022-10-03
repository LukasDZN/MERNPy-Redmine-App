import React from "react";
import "./topbar.css";
// import { NotificationsNone, Settings } from "@material-ui/icons";

export default function Topbar() {


  // --- This is not needed anymore, however a good example of useState and useEffect ---
  // // useState (set a cookie to be used in the app by putting it into a state (note:
  // // this only becomes an issue when the user logs in for the first time and the page
  // // is rendered before the cookie is received from the backend. If a user has already
  // // logged in, this issue does not occur.))
  // const [cookie, setCookie] = React.useState('');

  // React.useEffect(() => {
  //   setCookie(document.cookie);
  // }); // not sure how ", []" impacts this

  // console.log('This is a useState/useEffect hook state: ' + cookie);
  // -------------------------------------------------------------------------------------


  // Gets the cookie and parses it (raw cookie is a string with multiple keys and values)
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      let encodedResult = parts.pop().split(";").shift();
      let finalResult = decodeURI(encodedResult);
      return finalResult;
    };
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin dashboard</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div> */}
          {/* <div className="topbarIconContainer">
            <Settings />
          </div> */}
          {/* <img src={getCookie('userPhoto')} alt="userPhoto" className="topAvatar" /> */}
        </div>
      </div>
    </div>
  );
}