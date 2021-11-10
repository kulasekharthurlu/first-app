import axios from "axios";
import { useState } from "react";

const BookRegistration = () => {
  const [errors, setErrors] = useState({
    id: "",
    name: "",
    author: ""
  });
  const [data, setData] = useState({
    id: "",
    name: "",
    author: ""
  });


  const handleSubmit = () => {

    let foo = validation();

    if (foo) {
      alert(data.id);
      axios.post("http://localhost:2021/book/add", data)
        .then((res) => {
          console.log(res);
        }).catch(() => { console.log("error") })
    }
  }
  const handleSubmt = () => {
    let foo = valid();
    if (foo) {
      axios.delete("http://localhost:2021/book/delete/?id=" + data.id)
        .then((res) => {
          console.log(res);
        }).catch(() => { console.log("error") });
    } else {
      alert('please fill all data');
    }
  }
  const valid = () => {
    let errorsObj = {
      id: "",
    };
    let isValid = true;
    if (data.id === "") {
      isValid = false;
      errorsObj.id = "ID is required";
    }
    setErrors(errorsObj);
    return isValid;
  }
  const validation = () => {
    let errorsObj = {
      name: "",
      author: ""
    }
    let isvalid = true;

    if (data.name === "") {
      errorsObj.name = "Name is required";
      isvalid = false;
    }
    if (data.author === "") {
      errorsObj.author = "Author is required";
      isvalid = false;
    }
    setErrors(errorsObj);
    return isvalid;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  return (
    <div>
      <h1>Book Registration</h1>
      Book Title:  <input type="text" name="name" onChange={handleChange} />
      <div>{errors.name}</div>
      <br /><br />
      Book Author: <input type="text" name="author" onChange={handleChange} />
      <div>{errors.author}</div>
      <br /><br />
      <button onClick={a => handleSubmit()} >SAVE</button><br /><br />
      <h2>delete book</h2>
      Enter BookId: <input type="text" name="id" placeholder="EnterBookId" onChange={handleChange} />
      <div>{errors.id}</div>

      <button onClick={a => handleSubmt()} >DELETE</button>
    </div>
  );
}

export default BookRegistration;