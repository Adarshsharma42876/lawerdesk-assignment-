import React from "react";
import "./caseflow.css";
import { useNavigate } from "react-router-dom";

function PageTwo() {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <button className="btn btn-primary mb-3" onClick={goBackHandler}>
            Back to home
          </button>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Given information</h5>
              <p>
                Your search: <strong>Habeas Corpus</strong>
              </p>
              <h6 className="card-subtitle mb-2 text-muted">Recents</h6>
              <div className="recent-item mb-2">
                <p className="badge badge-success">DEEDS</p>
                <p className="card-text">The Cyberbullying Conspiracy</p>
                <small className="text-muted">10 min</small>
              </div>
              <div className="recent-item mb-2">
                <p className="badge badge-warning">CONTRACT</p>
                <p className="card-text">The Data Breach Dilemma</p>
                <small className="text-muted">1 hour ago</small>
              </div>
              <div className="recent-item mb-2">
                <p className="badge badge-danger">COURT ORDER</p>
                <p className="card-text">The Green Tech Scandal</p>
                <small className="text-muted">1 day ago</small>
              </div>
              <div className="recent-item">
                <p className="badge badge-success">DEEDS</p>
                <p className="card-text">The Cyberbullying Conspiracy</p>
                <small className="text-muted">2 days ago</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Case flow</h5>
              <p>Select the document for drafting</p>
              <ul className="list-group">
                <li className="list-group-item">Pre litigation</li>
                <li className="list-group-item">Legal Notice</li>
                <li className="list-group-item">Reply to Legal Notice</li>
                <li className="list-group-item">Litigation</li>
                <li className="list-group-item">Plaint/Complaint</li>
                <li className="list-group-item">Vakalatnama</li>
                <li className="list-group-item">Written Statement/Answer</li>
                <li className="list-group-item">Reply to Written Statement</li>
                <li className="list-group-item">Interlocutory Applications</li>
                <li className="list-group-item">
                  Application for Temporary Injunction
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <ul className="list-group">
            <li className="list-group-item active">Start</li>
            <li className="list-group-item active">Continue</li>
            <li className="list-group-item active">Analysis</li>
            <li className="list-group-item">Additional Documents</li>
            <li className="list-group-item">Relief</li>
            <li className="list-group-item">Suggestions</li>
            <li className="list-group-item">First Draft</li>
            <li className="list-group-item">Q&A</li>
            <li className="list-group-item">Final Draft</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
