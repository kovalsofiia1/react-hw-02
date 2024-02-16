import Description from '../Description/Description'
import Feedback from '../Feedback/Feedback'
import Options from '../Options/Options'
import Notification from '../Notification/Notification'
import './App.module.css'
import 'modern-normalize'
import {useState, useEffect} from 'react'

const STORAGE_KEY = 'my-feedback'

const saveToStorage = (feedback) => {
  window.localStorage.setItem(STORAGE_KEY ,JSON.stringify(feedback))
}

const getFromStorage = () => {
  const feedback = window.localStorage.getItem(STORAGE_KEY)
  return feedback !== null ? JSON.parse(feedback) : {
    good: 0,
    neutral: 0,
    bad: 0
  };
}

export default function App() {

  const [feedback, setFeedback] = useState(getFromStorage);

  useEffect(() => {
    console.log(feedback)
    saveToStorage(feedback);
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }
    );
  }

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)


  return (
    <>
      <Description />
      <Options onClick={updateFeedback} onReset={resetFeedback}  total = {totalFeedback} />
      { totalFeedback ? <Feedback value={ feedback } total={totalFeedback} positive={positive} /> : <Notification/> } 
      
    </>
  )
  
}

