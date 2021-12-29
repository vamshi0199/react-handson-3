import React from 'react'

export const Displaytwo = (props) => {
    
    return (
        <div>
            
            <p>Name: {props.emp.name}</p>
            <p>Email: {props.emp.email}</p>
            <p>Department: {props.emp.dept}</p>

            
        </div>
    )
}
