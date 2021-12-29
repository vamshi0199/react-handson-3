import React from 'react';


const Back = ({data,toggle}) => {
    return (
<div className="onee">
 <h2>EMPLOYEE FEEDBACK DATA</h2>
 <div className="onee1">
 {
data.map((element)=>{
     return(
<div className="onee2">
<p>Name: {element.name} | Department : {element.department} | Rating : {element.rating}</p>
    </div>
)
  })
 }
</div>
 <button onClick={()=>toggle(true)} className="onee3">Go Back</button>
</div>
)
}
export default Back
