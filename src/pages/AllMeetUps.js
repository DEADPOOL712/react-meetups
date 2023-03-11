import MeetupList from "../components/MeetupList";
import axios from "axios";
import { useEffect, useState } from "react";
const cDate = new Date().toLocaleDateString();

function AllMeetUps() {
  const [loading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    // getting data from firebase database
    axios
      .get("https://pubarty-project-default-rtdb.firebaseio.com/meetup.json")
      .then((res) => {
        const obj = res.data;
        const meetdata = [];
        for (const key in obj) {
          const meet = {
            id: key,
            ...obj[key],
          };
          meetdata.push(meet);
        }
        console.log(meetdata);
        setIsLoading(false);
        setMeetups(meetdata);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="allmeetups">
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </div>
  );
}
export default AllMeetUps;
