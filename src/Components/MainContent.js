import React from "react";
// import FileUploads from './FileUploads';
// import QuestionList from './QuestionList';
// import Sidebar from './Sidebar'
import "./main.css";
import { useNavigate } from "react-router-dom";

function MainContent() {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <div className="app-container m-3 mt-5">
      <main className="main-content">
        <aside className="sidebar">
          <button className="back-button" onClick={goBackHandler}>
            Back to home
          </button>
          <div className="given-information">
            <h2>Given information</h2>
            <p className="text-entered">
              I'm researching environmental regulations. Can you summarize the
              Clean Air Act and its objectives with details.
            </p>
            <div className="uploads">
              <h3>Uploads</h3>
              <ul>
                <li>Case document.pdf</li>
                <li>Case document.pdf</li>
                <li>Case document.pdf</li>
                <li>Case document.pdf</li>
                <li>Case document.pdf</li>
              </ul>
            </div>
          </div>
        </aside>
        <section className="questions">
          <div className="questions-header">
            <button className="petition-button"> by Petitioner</button>
            <button className="respondent-button"> by Respondent</button>
          </div>
          <ul className="questions-list">
            <li>
              <strong>
                1. Was the dog on a leash or under the control of the owner at
                the time of the incident?
              </strong>
              <p>
                Reason - This question aims to establish whether the owner was
                negligent in controlling the dog, which is crucial for proving
                liability.
              </p>
            </li>
            <li>
              <strong>
                2. Did the dog show any signs of aggression or previous violent
                behaviour before the incident?
              </strong>
              <p>
                Reason - This question is important to demonstrate the owner's
                knowledge of the dog's aggressive tendencies, which can support
                the claim of negligence.
              </p>
            </li>
            <li>
              <strong>
                3. Were there any warning signs or notices indicating the
                presence of a dangerous dog on the owner's property?
              </strong>
              <p>
                Reason - This question seeks to determine if the owner took
                reasonable precautions to warn others about the potential danger
                posed by the dog.
              </p>
            </li>
            <li>
              <strong>
                4. Has the dog been involved in similar incidents of biting or
                aggression in the past?
              </strong>
              <p>
                Reason - This question is relevant to establish a pattern of
                behaviour and the owner's awareness of the dog's propensity for
                aggression.
              </p>
            </li>
            <li>
              <strong>
                5. Did the owner take immediate steps to assist or provide
                medical aid to the victim after the dog bite incident?
              </strong>
              <p>
                Reason - This question addresses the owner's duty of care and
                responsibility towards the victim following the incident.
              </p>
            </li>
            <li>
              <strong>
                6. Can you provide any evidence of communication or interaction
                with the owner regarding the dog's behaviour prior to the
                incident?
              </strong>
            </li>
          </ul>
          <button className="start-button" onClick={() => navigate("/pagetwo")}>
            continue
          </button>
        </section>
      </main>
    </div>
  );
}

// export default App;

export default MainContent;
