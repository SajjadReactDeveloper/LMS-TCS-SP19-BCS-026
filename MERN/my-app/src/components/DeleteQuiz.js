import React from 'react'
import axios from 'axios'

export default function DeleteQuiz() {
  const onDelete = () =>{
    DeleteQuiz(_id);
  }

  const DeleteQuiz = async(id) => {
    alert(id);
    const response = await fetch(`http://localhost:5000/teacher/delquiz/${id}`, {
      method: "DELETE"
    });
    return response.json();
    // try {
    //   //axios.delete(`http://localhost:5000/teacher/delquiz/${id}`);
    // } catch (error) {
    //   console.log(error)
    // }
  }
    const [_id, setID] = React.useState();
    return (
        <div>
        <div>
        <h3 className="m-3 d-flex justify-content-center">Delete Quiz</h3>
        <div class="m-3">
          <label for="exampleFormControlInput1" class="form-label ">
            Enter Quiz Id
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Quiz 1"
            onChange={(text) => setID(text.target.value)}
          />
        </div>
      </div>
      <div class="m-3 d-flex justify-content-center">
        <button onClick={onDelete} type="button" class="btn btn-danger"><i class="bi bi-trash-fill m-2"></i>
          Delete Quiz
        </button>
      </div>
        </div>
    )
}
