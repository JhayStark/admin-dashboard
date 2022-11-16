import "./widgetSmall.css";
import avatar from "../../images/avatar.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSmall = () => {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src={avatar} className="widgetSmallImg" alt="user" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <VisibilityIcon className="btnIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={avatar} className="widgetSmallImg" alt="user" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <VisibilityIcon className="btnIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={avatar} className="widgetSmallImg" alt="user" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <VisibilityIcon className="btnIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={avatar} className="widgetSmallImg" alt="user" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <VisibilityIcon className="btnIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={avatar} className="widgetSmallImg" alt="user" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <VisibilityIcon className="btnIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={avatar} className="widgetSmallImg" alt="user" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <VisibilityIcon className="btnIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
