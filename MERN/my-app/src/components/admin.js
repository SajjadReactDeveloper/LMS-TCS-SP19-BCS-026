import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function admin() {
  return (
    <>
      <Link to = "/admin/class">
        <button type="button" class="btn btn-success m-3">Delete Class</button>
      </Link>
    </>
  );
}
