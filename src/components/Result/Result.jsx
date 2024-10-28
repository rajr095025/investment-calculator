function Result ({calculatedValue}) {

  return(
    <table id = "result">
          <thead>
            {/* <tr><td>Year</td><td>Investment Value</td><td>Interest (Year)</td><td>Total Interest</td><td>Investment Capital</td></tr>
             */}
             <tr>{Object?.keys(calculatedValue?.[0])?.map((key,index) => <th key={index}>{key}</th>)}</tr>    
          </thead>
          <tbody>
          {calculatedValue?.map((obj,index1) => 
            <tr>
              {Object.keys(obj)?.map((key,index2) =>
                <td key={index1 +"" +index2}>{obj?.[key]}</td>
              )}
            </tr>)
          }    
          </tbody>
        </table>
  )
}

export default Result;