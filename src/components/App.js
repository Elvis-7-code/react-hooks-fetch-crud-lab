import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  const fetchingQuestions = () => {
    fetch ("http://localhost:4000/questions"
      .then((r) => r.json())
      .then((questions)=> setQuestions(questions));
    )
  };

  useEffect(()=>{
    fetchingQuestions();
},[]);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
