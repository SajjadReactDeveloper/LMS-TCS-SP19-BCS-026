import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function teacher() {
  return (
    <>
      <Link to="/teacher/quiz">
        <button type="button" class="btn btn-success m-3">
          Delete Quiz
        </button>
      </Link>
    </>
  );
}
