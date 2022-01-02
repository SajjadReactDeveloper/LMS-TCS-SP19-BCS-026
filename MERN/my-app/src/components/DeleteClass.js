import React from 'react'
import axios from 'axios'

export default function DeleteQuiz() {
  const onDelete = () =>{
    deleteClass(_id);
  }

  const deleteClass = async(id) => {
    alert(id);
    const response = await fetch(`http://localhost:5000/admin/delclass/${id}`, {
      method: "DELETE"
    });
    console.log(response.json());
    // try {
    //   //axios.delete(`http://localhost:5000/admin/delclass/${id}`);
    // } catch (error) {
    //   console.log(error)
    // }
  }
    const [_id, setID] = React.useState();
    return (
        <div>
        <div>
        <h3 className="m-3 d-flex justify-content-center">Delete Class</h3>
        <div class="m-3">
          <label for="exampleFormControlInput1" class="form-label ">
            Class Id
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="CSC-101"
            onChange={(text) => setID(text.target.value)}
          />
        </div>
      </div>
      <div class="m-3 d-flex justify-content-center">
        <button onClick={onDelete} type="button" class="btn btn-danger"><i class="bi bi-trash-fill m-2"></i>
          Delete Class
        </button>
      </div>
        </div>
    )
}
