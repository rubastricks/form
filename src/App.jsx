import { useState } from "react";
import FormInput from "./components/FormInputs";
import "./App.css";

const App = () => {
const [values, setValues] = useState({
  username:"",
  email:"",
  password:"",
  confirmPassword:"",
}) 

const [submitted, setSubmitted] = useState(false); 
const [sub,  setSub] = useState(true)

const inputs = [
  {
    id:1,
    name:"username",
    type:"text",
    label:"Username",
    placeholder:"Username",
    errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required:true,
  },
  {
    id:2,
    name:"email",
    type:"email",
    label:"Email",
    placeholder:"Enter an Email",
    errorMessage: "It should be a valid email address!",
        required:true,
  },
  {
    id:3,
    name:"password",
    type:"password",
    label:"Password",
    placeholder:"Enter a Password",
    errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required:true,
  },
  {
    id:4,
    name:"confirmPassword",
    type:"password",
    label:"Confirm Password",
    placeholder:"Confirm Password",
    errorMessage: "Passwords don't match!",
        pattern: values.password,
        required:true,
  },
  
];

const handleSubmit = (e) => {
  e.preventDefault();
setSubmitted(true) 
setSub(false)
}

const onChange = (e) => {
  setValues({...values, [e.target.name]: e.target.value});
}

return (
  <div className="main-container">
    <form onSubmit={handleSubmit}>
       { submitted ? <div className="message" > Thank you for registering with us!</div> : null }
 {sub ? <h1>Register With Us</h1> : null }
      {inputs.map((input)=> (
      <FormInput
      key={input.id} 
      {...input}
      value={values[input.name]}
      onChange={onChange}
      />
        ))}
      <button type="submit">Submit</button>
    </form>
  </div>
)

}

export default App;
