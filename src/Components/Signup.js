import { useState } from "react"

const Signup = () => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [allStudents, setallStudents] = useState([])
    const submit = () => {
        let student = {firstname, lastname, email, password}
        setallStudents([...allStudents, student])
        setfirstname("")
        setlastname("")
        setemail("")
        setpassword("")
    };

    const deleteUser = (userIndex) =>{
        let newAllStudents = [...allStudents]
        newAllStudents = [...allStudents]
        newAllStudents.splice(userIndex, 1)
        setallStudents(newAllStudents)
    }

  return (
    <>

    <div className='container'>
        <div className='row'>
            <div className='col-5 shadow-lg mx-auto bg-white my-4'>
                <h2 className='text-center my-4'>STUDENT PORTAL</h2>
                <form action="">
                    <div className='form-group m-3 text-center'>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName' value={firstname}
                        onChange={(e)=>setfirstname(e.target.value)} className='form-control shadow-sm my-1'/>
                    </div>
                    <div className='form-group m-3 text-center'>
                        <label htmlFor="lastName" className='form'>Last Name</label>
                        <input type="text" id='lastName' value={lastname}
                        onChange={(e)=>setlastname(e.target.value)}
                        className='form-control shadow-sm my-1'/>
                    </div>
                    <div className='form-group m-3 text-center'>
                        <label htmlFor="email" className='form'>Email Address</label>
                        <input type="email" id='email' value={email}
                        onChange={(e)=>setemail(e.target.value)}
                         className='form-control shadow-sm my-1'/>
                    </div>
                    <div className='form-group m-3 text-center'>
                        <label htmlFor="password" className='form'>password</label>
                        <input type="text" id='password' value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                        className='form-control shadow-sm my-1'/>
                    </div>
                    <div className='form-group m-3'>
                        <input type="checkbox" id='checkbox'/>
                        <label htmlFor="checkbox" className='form mx-2'>Remember</label>
                        
                    </div>
                    <button className='btn btn-info form-control my-3' type="button" onClick={submit}>SignUp</button>
                </form>

            </div>
            <br />
            <hr />

            <div>
                <h1>LIST OF STUDENTS</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                           <th>SN</th> 
                           <th>First Name</th> 
                           <th>Last Name</th> 
                           <th>email</th> 
                           <th>Actions</th> 
                        </tr>
                    </thead>
                {allStudents.map((item, index)=>(
                    <tbody>
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.email}</td>
                            <td>
                                <button className="btn btn-info m-1" >Edit</button>
                                <button className="btn btn-danger m-1" onClick={()=>deleteUser(index)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}


                </table>
            </div>



        </div>

    </div>

    </>
  )
}

export default Signup