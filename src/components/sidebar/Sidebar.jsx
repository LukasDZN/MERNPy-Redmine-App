import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  BarChart,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  AccessTime,
  FilterList,
  SettingsBrightness,
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
          <h3 className="sidebarTitle">Scripts</h3>
          <ul className="sidebarList">

          <h4 className="sidebarTitle">Generic</h4>
            
            <NavLink to="/na1" >
              <li className={ActiveLinkClass('/na1')} >  
                <LineStyle className='sidebarIcon' />
                Scripts
              </li>
            </NavLink>

          <h4 className="sidebarTitle">ISAC scripts</h4>
          
            <NavLink to="/createRfcTasks" className="link" >
              <li className={ActiveLinkClass('/createRfcTasks')} >
                <WorkOutline className="sidebarIcon" />
                Releases and RFCs
              </li>
            </NavLink>

            <NavLink to="/na3" className="link" >
              <li className={ActiveLinkClass('/na3')}>
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

            <NavLink to="/statistics" className="link">
              <li className={ActiveLinkClass('/statistics')}>
              <Timeline className="sidebarIcon" />
              Dashboard
              </li>
            </NavLink>

          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Tools</h3>
          <ul className="sidebarList">

            <NavLink to="/na7" className="link">
              <li className={ActiveLinkClass('/na7')}>
              <AccessTime className="sidebarIcon" />
              CRON jobs
              </li>
            </NavLink>

            <NavLink to="/na8" className="link">
              <li className={ActiveLinkClass('/na8')}>
              <FilterList className="sidebarIcon" />
              Markdown sorter
              </li>
            </NavLink>

          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Settings</h3>
          <ul className="sidebarList">

            <NavLink to="/na4" className="link" >
              <li className="sidebarListItem">
                <SettingsBrightness className={ActiveLinkClass('/na4')} />
                Theme
              </li>
            </NavLink>

            <NavLink to="/na5" className="link" >
              <li className="sidebarListItem">
                <ChatBubbleOutline className={ActiveLinkClass('/na5')} />
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