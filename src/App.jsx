import { useState } from "react"
import Header from "./components/Header/Header"
import UserInput from "./components/UserInput/UserInput"
import Result from "./components/Result/Result"
import {calculateInvestmentResults, formatter} from "./util/investment"



function App() {

  const [initialInvestment,setInitialInvestment] = useState(10000);
  const [annualInvestment,setAnnualInvestment] = useState(1200);
  const [expectedReturn,setExpectedReturn] = useState(6);
  const [duration,setDuration] = useState(10);

  let calculatedValue = calculateInvestmentResults({initialInvestment,
    annualInvestment,
    expectedReturn,
    duration});

  let totalInterest = 0;
  calculatedValue = calculatedValue?.map((obj) => {
      let year = obj?.year;
      let interest = obj?.interest;
      let valueEndOfYear = obj?.valueEndOfYear;
      let annualInvestment = obj?.annualInvestment;
      totalInterest += interest;
      let investedCapital = valueEndOfYear - totalInterest;
      
      return {
        "Year" : year,
        "Invested Value" : formatter?.format(valueEndOfYear),
        "Interest (Year)" : formatter?.format(interest),
        "Total Interest" : formatter?.format(totalInterest),
        "Investment Capital" : formatter?.format(investedCapital), 
      }
    }
  )

  console.log("calculatedValue ",calculatedValue)


  function changeInUserInputInitialInvestment (e) {
    let value = Number(e.target.value);
      setInitialInvestment(value);
    
  }

  function changeInUserInputAnnualInvestment (e) {
    let value = Number(e.target.value);
      setAnnualInvestment(value);
    
  }

  function changeInUserInputExpectedReturn (e) {
    let value = Number(e.target.value);
      setExpectedReturn(value);
    
  }

  function changeInUserInputDuration (e) {
    let value = Number(e.target.value);
    // if(value >= 1){
      setDuration(value);
    // }
  }

  let isValidInput = duration >= 1; 



  
 
  return (
    <>
      <Header></Header>
      <div id="user-input" >
        <p className="input-group">
        <UserInput label = {"Initial Investment"} type={"number"} value={initialInvestment} onChange={changeInUserInputInitialInvestment}/>
        <UserInput label = {"Annual Investment"} type={"number"} value={annualInvestment} onChange={changeInUserInputAnnualInvestment}/>
        </p>
        <p className="input-group">
        <UserInput label = {"Expected Return"} type={"number"} value={expectedReturn} onChange={changeInUserInputExpectedReturn} step={0.1}/>
        <UserInput label = {"Duration"} type={"number"} value={duration} onChange={changeInUserInputDuration}/>
        </p>
       
         
      </div>
      {isValidInput ? <Result calculatedValue = {calculatedValue}></Result> : <p className="center">Please enter a duration greater than zero</p>}
        

    </>
  )
}

export default App
