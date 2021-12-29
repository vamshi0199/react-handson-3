
import React, {useState} from 'react'
import Back from './Back';
import './One.css'

const Form = () => {
const [form, showForm] = useState(true);
const [details, userDetails] = useState({
    name:"",
    department:"",
    rating:"",
    })
    const [record, setRecord] = useState([])
    const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);
    userDetails({...details,[name]: value});
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    const storeRecord = { ...details}
    console.log(record);
    setRecord([...record, storeRecord]);
    console.log(record);
    userDetails({name:"", department:"", rating:""});
    showForm(false);
    }
    const handleShowForm =(data)=>{
    console.log(data);
    showForm(data);
    }
    let fillForm;
    fillForm = <div className="align">
    <div className="abcd">EMPLOYEE FEEDBACK FORM</div>
    <form action="" onSubmit={handleSubmit}>
        <div>
        <label  className='abcd1'>Name:</label>
        <input type="text" name='name' id='name' className='abcd2'
         value={details.name} onChange={handleInput}/>
        </div>
        <div>
    <label  className='abcd1'>Department:</label>
     <input type="text" name='department' id='dept' className='abcd2'
     value={details.department} onChange={handleInput}/>
    </div>
    <div>
    <label  className='abcd1'>Rating:</label>
     <input type="number" name='rating' id='rating' className='abcd2'
    value={details.rating} onChange={handleInput}/>
     </div>
    <button type='submit' className='abcd3'>Submit</button> 
    </form>
 </div>

 return(
    <div>
     {form ? fillForm : <Back data={record} toggle={handleShowForm}/>}
    </div>
)
}

export default Form
  
