import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './components/Quiz'
import Certificate from './components/Certificate'
import { questions } from "./data/questions";
function App() {
   const [score, setScore] = useState(null);
return (
    <div className="app-container">
      {!score && score !== 0 ? (
        <Quiz questions={questions} onFinish={setScore} />
      ) : (
        <Certificate score={score} total={questions.length} />
      )}
    </div>
  );
}

export default App
