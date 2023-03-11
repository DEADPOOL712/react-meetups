import classes from "./css_modules/MeetupItem.module.css";
import Card from "../ul/Card";
function MeetupItem(props) {
  return (
    <Card>
      <img className={classes.img} src={props.img} alt="IMG-ERROR" />
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.date}>{props.date}</p>
      <p className={classes.discription}>{props.discription}</p>
      <button className={classes.favorite}>Favorite 🖤</button>
    </Card>
  );
}
export default MeetupItem;
