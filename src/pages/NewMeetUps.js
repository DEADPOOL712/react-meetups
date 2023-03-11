import Form from "../components/Form";
function NewMeetUps() {
  function meetuphandle(meetData) {
    fetch("https://pubarty-project-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      body: JSON.stringify(meetData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <div>
      <h1>Add New Meetup</h1>
      <Form onAddmeetup={meetuphandle} />
    </div>
  );
}
export default NewMeetUps;
