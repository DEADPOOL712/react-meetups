import classes from "./css_modules/Form.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form(props) {
  const navigate = useNavigate();
  let submitedData;
  const [currTitle, setTitle] = useState("");
  const [currDate, setDate] = useState("");
  const [currUrl, setUrl] = useState("");
  const [currDisc, setDisc] = useState("");
  const [isSubmited, setSubmited] = useState(false);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const urlChange = (e) => {
    setUrl(e.target.value);
  };
  const discriptionChange = (e) => {
    setDisc(e.target.value);
  };

  // final submit handaling
  function FormSubmitHandle(e) {
    e.preventDefault();
    const formData = {
      title: currTitle,
      date: currDate,
      url: currUrl,
      discription: currDisc,
    };
    console.log("Submited");
    props.onAddmeetup(formData);
    setSubmited(true);
    setTimeout(() => {
      setSubmited(false);
      navigate("/");
    }, 500);
  }
  return (
    <div className={classes.form_div}>
      <form onSubmit={FormSubmitHandle} className={classes.form}>
        <input
          placeholder="Title on new meet"
          onChange={titleChange}
          type="text"
        />
        <br />
        <input placeholder="Date" onChange={dateChange} type="text" />
        <br />
        <input placeholder="Url of image" onChange={urlChange} type="text" />
        <br />
        <input
          placeholder="Discription"
          onChange={discriptionChange}
          type="text"
        />
        <br />
        <button className={classes.form_btn}>Add New</button>
      </form>
      {isSubmited ? <p>Submited</p> : ""}
    </div>
  );
}

export default Form;
