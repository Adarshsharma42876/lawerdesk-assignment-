import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate=useNavigate();
  const goBackHandler=()=>{
    navigate(-1);
  }
  return (
    <div className="col-md-2 bg-light sidebar">
      <div className="p-3">
        <h4>Back to home</h4>
        <button className="btn btn-primary" onClick={goBackHandler}>Back to home</button>
      </div>
    </div>
  );
}

export default Sidebar;