import React from 'react'

const Table = () => {
    let myName = "John"
    let myGender = "male"
    let allStudents = [
        {firstname : "Kunle", lastname : "Konkolo"},
        {firstname : "Dupe", lastname : "Hammed"},
        {firstname : "John", lastname : "Hammed"},
        {firstname : "Johnny", lastname : "Hammed"},
        {firstname : "Johnann", lastname : "Hammed"},
    ]
  return (
    <>

    <h1 className={myGender == 'male'? 'bg-danger' : 'bg-info' }>Hello {myName}</h1>
    <h1 className= {myName == 'Kunle' ? 'bg-danger' : 'bg-primary'}>Hello {myGender}</h1>
    <table className="table table-striped table-hover m-3">
        <tr>
            <td>S/N</td>
            <td>firstname</td>
            <td>lastname</td>
            <td>Actions</td>
        </tr>

        {allStudents.map((item, index)=>(
        <>
         <tr>
            <td>{index +1} </td>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>
                <button className='btn btn-warning mx-1' >Edit</button>
                <button className='btn btn-danger mx-1'>Delete</button>
            </td>
        </tr> 
       

        </>
    ))}
    </table>

    </>
  )
}

export default Table