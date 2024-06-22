import React from 'react';

function QuestionList() {
  const questions = [
    {
      question: 'Was the dog on a leash or under the control of the owner at the time of the incident?',
      reason: 'This question aims to establish whether the owner was negligent in controlling the dog, which is crucial for proving liability.',
    },
    {
      question: 'Did the dog show any signs of aggression or previous violent behavior before the incident?',
      reason: 'This question is important to demonstrate the owner\'s knowledge of the dog\'s aggressive tendencies, which can support the claim of negligence.',
    },
    {
      question: 'Were there any warning signs or notices indicating the presence of a dangerous dog on the owner\'s property?',
      reason: 'This question seeks to determine if the owner took reasonable precautions to warn others about the potential danger posed by the dog.',
    },
    {
      question: 'Has the dog been involved in similar incidents of biting or aggression in the past?',
      reason: 'This question is relevant to establish a pattern of behavior and the owner\'s awareness of the dog\'s propensity for aggression.',
    },
    {
      question: 'Did the owner take immediate steps to assist or provide medical aid to the victim after the dog bite incident?',
      reason: 'This question addresses the owner\'s duty of care and responsibility towards the victim following the incident.',
    },
    {
      question: 'Can you provide any evidence of communication or interaction with the owner regarding the dog\'s behavior prior to the incident?',
      reason: 'This question seeks to gather any documented evidence of the owner being informed about the dog\'s behavior before the incident occurred.',
    },
  ];

  return (
    <div>
      <h5>Questions</h5>
      <ul className="list-group">
        {questions.map((q, index) => (
          <li key={index} className="list-group-item">
            <strong>{q.question}</strong>
            <p>{q.reason}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;