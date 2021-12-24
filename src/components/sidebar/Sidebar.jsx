import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { NavLink, useResolvedPath, useMatch } from "react-router-dom";

export default function Sidebar() {

  // Active state styling example (for NavLink only): https://reactrouter.com/docs/en/v6/api#navlink

  function ActiveLinkClass(to) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    // Result (either just 'sidebarListItem' or 'sidebarListItem activeRoute' if Route is active)
    let resultClassString = 'sidebarListItem'.concat('', match ? ' activeRoute' : '')
    return resultClassString;
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Functions</h3>
          <ul className="sidebarList">
            
            <NavLink to="/dashboard/scripts" >
              <li className={ActiveLinkClass('/dashboard/scripts')} >  
                <LineStyle className='sidebarIcon' />
                Scripts
              </li>
            </NavLink>

            <NavLink to="/test" className="link" >
              <li className={ActiveLinkClass('/test')} >
                <WorkOutline className="sidebarIcon" />
                Releases and RFCs
              </li>
            </NavLink>

            <NavLink to="/" className="link" >
              <li className={ActiveLinkClass('/')}>
                <DynamicFeed className="sidebarIcon" />
                Scheme announcements
              </li>
            </NavLink>

            <NavLink to="/fridayReportAutomation" className="link" >
              <li className={ActiveLinkClass('/fridayReportAutomation')}>
                <BarChart className="sidebarIcon" />
                Friday report
              </li>
            </NavLink>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Statistics</h3>
          <ul className="sidebarList">

            <NavLink to="/dashboard/statistics" className="link">
              <li className={ActiveLinkClass('/dashboard/statistics')}>
              <Timeline className="sidebarIcon" />
              Dashboard
              </li>
            </NavLink>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Settings</h3>
          <ul className="sidebarList">

            <NavLink to="/" className="link" >
              <li className="sidebarListItem">
                <MailOutline className={ActiveLinkClass('/')} />
                Theme
              </li>
            </NavLink>

            <NavLink to="/login" className="link" >
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Slack alerts
              </li>
            </NavLink>

            <NavLink to="/logout" className="link" >
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Log out
              </li>
            </NavLink>

          </ul>
        </div>
      </div>
    </div>
  );
}