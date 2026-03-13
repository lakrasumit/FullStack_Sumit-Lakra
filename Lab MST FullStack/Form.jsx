import { useState } from "react";
import "./App.css";

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert("Form Submitted");

    }

    return (
        <div className="container">
            <div className="box">
                <form onSubmit={handleSubmit}>

                    <h2>User Form</h2>

                    <label>Name</label><br/>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    /><br/><br/>

                    <label>Email</label><br/>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    /><br/><br/>

                    <label>Age</label><br/>
                    <input 
                        type="number"
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}
                    /><br/><br/>

                    <button type="submit">Submit</button>

                </form>
            </div>
        </div>
    );
}

export default Form;