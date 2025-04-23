import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  const { id, prompt, answers, index } = question;

  const options = answers.map((answer, idx) => (
    <option key={idx} value={idx}>
      {answer}
    </option>
  ));

  function handleAnswerChange(e) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        index: Number.parseInt(e.target.value),
      }),
    })
      .then((r) => r.json())
      .then((updatedQuestion) => onUpdateQuestion(updatedQuestion));
  }

  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteQuestion(id));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={index} onChange={handleAnswerChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
