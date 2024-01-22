 import { useState } from "react";
 
 const Game = () => {
    const [myName, setmyName] = useState("Kunle");
    const [userName, setuserName] = useState("")
    const changeName = ()=> {
        // console.log(1);
        // setTimeout(() => {
        //     console.log(2);
        // }, 3000);
        
        // console.log(3);
       setmyName(userName)
        console.log(myName);
    }
    return ( 
        <>
            <h1>{myName}</h1>
            <input type="text" className="py-1 m-2" onChange={ (e)=>setuserName
                (e.target.value)} />
            <button className="btn btn-danger" onClick={changeName}>Change Name</button> 
            {/* <button className="btn btn-danger" onClick={()=>setmyName
                ("Mujeeb") }>Change Name</button> */}
        </>
     );
 }
  
 export default Game; 