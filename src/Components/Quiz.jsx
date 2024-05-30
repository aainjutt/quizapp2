import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../assets/data';
const Quiz = () => {
  const [index,setIndex]= useState(0);
  const [lock,setLock]= useState(false)
  const [score,setScore]=useState(0)
  const [result,setResult]= useState(false)
  const [ question , setQuestion]=useState(data[index])
 const handleVariable = ()=>{
  if(lock === true){
    if(index===data.length-1){
      setResult(true)
      
      return 0
    
    }
    setIndex(index+1)
    setLock(false)
    setQuestion(data[index])
    OPTION_ARRAY.map((option)=>{
      option.current.classList.remove("correct")
      option.current.classList.remove("wrong")
      return null
    })
  }
  
 }
 const reset =()=>{
  setResult(false)
  setIndex(0)
  setQuestion(data[0]);
  setLock(true);
  setScore(0)
 }
 const option1=useRef(null);
 const option2=useRef(null);
 const option3=useRef(null);
 const option4=useRef(null);

const OPTION_ARRAY=[option1,option2,option3,option4]
  const chckAns=(e,ans)=> {
    if(lock === false){
      if(question.ans===ans){
        e.target.classList.add("correct")
        setLock(true)
        setScore(prev=>prev+1)
        // OPTION_ARRAY[data[index].ans-1].current.classList.add("wrong")

      }else{
        // console.log("WRONG ANSWER SALAAy")
        e.target.classList.add("wrong")
        setLock(true)

        OPTION_ARRAY[question.ans-1].current.classList.add("correct")
     
      }
    }
  }
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr/>
        
{result?<>

</>:<>
<h2>{index+1}. {question.question}</h2>

<ul>
    <li ref={option1} onClick={(e)=>{chckAns(e,1)}}>{question.option1}</li>

    <li ref={option2} onClick={(e)=>{chckAns(e,2)}} >{question.option2}</li>
    <li ref={option3} onClick={(e)=>{chckAns(e,3)}}>{question.option3}</li>
    <li ref={option4} onClick={(e)=>{chckAns(e,4)}}>{question.option4}</li>

    </ul>      
    <button onClick={handleVariable}>Next</button>
    <div className="index">{index+1} of {data.length} questions</div></>}
{
  result?<>
    <h3>you {score} out of {data.length} quesions</h3>
  <button onClick={reset}>Reset</button>
  </>:<></>
}
    </div>
  )
}

export default Quiz
