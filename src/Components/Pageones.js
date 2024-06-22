import React, { useState } from 'react';
// import './App.css'; // Assuming this is the correct import statement for App.css
import logo from './logo.png'; // Assuming this is the correct import statement for logo.png
import { useNavigate } from 'react-router-dom';

function PageOne() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [recentStudies, setRecentStudies] = useState([
    { title: 'Dog Bite Complaint', status: 'Completed', date: '2 days ago' },
    { title: 'The Cyberbullying Conspiracy', status: 'Completed', date: '2 days ago' },
    { title: 'The Data Breach Dilemma', status: 'Completed', date: '2 days ago' },
    { title: 'The Data Breach Dilemma', status: 'In progress', date: '2 days ago' },
    { title: 'The Data Breach Dilemma', status: 'Failed', date: '2 days ago' }
  ]);
  const navigate=useNavigate();

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };
  const handleNext=()=>{
      navigate('/pageone')
  }

  return (
    <div className="container mt-5">
      
      <div className="row">
        <div className="col-md-4">
          <h5>Recent Studies</h5>
          <ul className="list-group">
            {recentStudies.map((study, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{study.title}</strong>
                  <br />
                  <small>{study.date}</small>
                </div>
                <span className={`badge badge-${study.status === 'Completed' ? 'success' : study.status === 'In progress' ? 'warning' : 'danger'}`}>
                  {study.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-8">
          <h5>Get Complete info about any case from AI-driven research assistance</h5>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Ex: Land dispute, Mumbai, recent judgments."
              maxLength="80"
            />
          </div>
          <div className="form-group">
            <label htmlFor="fileUpload" className="btn btn-outline-secondary d-block text-center">
              <i className="fas fa-upload"></i> Drag and drop here or click here to Upload a file
              <input
                type="file"
                id="fileUpload"
                className="form-control-file"
                onChange={handleFileUpload}
                multiple
                style={{ display: 'none' }}
              />
            </label>
            <small className="form-text text-muted text-center">Maximum uploads: 0/5</small>
          </div>
          <div>
            <h6>Uploaded files</h6>
            <ul className="list-group">
              {uploadedFiles.map((file, index) => (
                <li key={index} className="list-group-item">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
          <button className="start-button" onClick={handleNext}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default PageOne;
