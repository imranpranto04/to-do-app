import React, { useState } from "react";

const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first: " + inputValue);
    list.push(inputValue);
    setList([...list]);
    // setList([...list, { description: inputValue, completed: false }]);

    // if (inputValue.trim() !== "") {
    //     list.push(inputValue);
    //     setList([...list]);
    // }

    setInputValue("");

    console.log("List item: " + list);
  };

  const handleDelete = (index) => {
    console.log(index);
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="my-4">Todo Apps</h1>
        <div className="main_content">
          <form
            className="row row-cols-lg-auto g-3 align-items-center"
            onSubmit={handleSubmit}
          >
            <div className="col-12 col-lg-4">
              <div className="input-group">
                {/* <div className="input-group-text">@</div> */}
                <input
                  type="text"
                  value={inputValue}
                  className="form-control"
                  id=""
                  placeholder="Username"
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>

          <div className="todo_list mt-4">
            {list !== 0 ? (
              list.map((item, index) => (
                <div key={index} className="d-flex align-items-center my-3">
                  <h5>{item}</h5>
                  <button
                    className="btn btn-danger ms-3"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <h6>Please Enter some list</h6>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
