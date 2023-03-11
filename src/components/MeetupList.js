import { Link } from "react-router-dom";
import MeetupItem from "./MeetupItem";
import classes from "./css_modules/MeetupList.module.css";
function MeetupList(props) {
  console.log(props);
  return (
    <div className={classes.main}>
      {props.meetups.map((meet) => {
        return (
          <MeetupItem
            key={meet.id}
            title={meet.title}
            img={meet.url}
            date={meet.date}
            discription={meet.discription}
          />
        );
      })}
    </div>
  );
}
export default MeetupList;
