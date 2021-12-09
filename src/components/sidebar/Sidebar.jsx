import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Functions</h3>
          <ul className="sidebarList">
            <Link to="/" className="link" />
            <li className="sidebarListItem">  
            {/* This can be set to: className="sidebarListItem active" */}
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <Link to="/" className="link" />
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Releases and RFCs
            </li>
            <Link to="/" className="link" />
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Scheme announcements
            </li>
            <Link to="/" className="link" />
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Friday report
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Statistics</h3>
          <ul className="sidebarList">
            <Link to="/dashboard" className="link"/>
            <li className="sidebarListItem">
            <Timeline className="sidebarIcon" />
            Dashboard
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Settings</h3>
          <ul className="sidebarList">
            <Link to="/" className="link" />
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Theme
            </li>
            <Link to="/login" className="link" >
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Slack alerts
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}