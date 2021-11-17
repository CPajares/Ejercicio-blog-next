import axios from "axios";
import { useEffect, useState } from "react";

const FormPost = () => {
  // const { createUser } = useRegister();
  const InitialData = {
    title: "",
    body: "",
  };

  const [newUserData, setNewUserData] = useState(InitialData);

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!(newUserData.title !== "" && newUserData.body !== ""));
  }, [newUserData]);

  const changeData = (event) => {
    event.preventDefault();
    setNewUserData({ ...newUserData, [event.target.id]: event.target.value });
  };

  const clickRegister = (evento) => {
    evento.preventDefault();
    axios.post("https://isdi-blog-posts-api.herokuapp.com/posts", newUserData);
    setNewUserData(InitialData);
  };

  return (
    <form
      className="form-register row justify-content-center align-items-center"
      onSubmit={clickRegister}
    >
      <div className="container-form col-4">
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            value={newUserData.name}
            onChange={changeData}
            autoComplete="off"
            type="text"
            className="form-control"
            id="title"
            placeholder="title..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">body: </label>
          <input
            value={newUserData.username}
            onChange={changeData}
            autoComplete="off"
            type="text"
            className="form-control"
            id="body"
            placeholder="body"
          />
        </div>

        <button disabled={isDisabled} type="submit" className="btn btn-info">
          POST
        </button>
      </div>
    </form>
  );
};

export default FormPost;
