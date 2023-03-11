import { Link, Outlet } from "react-router-dom";
import classes from "./Naviagtion.module.css";

function Navigation() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>Meetup's</div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link to="/">AllMeetups</Link>
            </li>
            <li>
              <Link to="/fav">FavoriteMeetups</Link>
            </li>
            <li>
              <Link to="/new">NewMeetups</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
export default Navigation;
