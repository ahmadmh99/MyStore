
import { cellList } from '../dummy-data'
import React, {useState, useEffect} from 'react'

import { collection, getDocs } from 'firebase/firestore'

import { db } from '../firebase-config'
import { useParams } from 'react-router-dom'
import { consoleList } from '../dummy-data'

export default function MyConsole() {

    let params = useParams(); 
    let consolechoice = consoleList.find(console =>
         console.name === params.consoleName)
         const [tasks, settasks] = useState([]);

         useEffect(()=>{
     
             const getTasks = async (db) => {
                 const TasksCol = collection(db, 'tasks');
                
                 const tasksSnapshot = await getDocs(TasksCol)
                 
                 const tasksList = await tasksSnapshot.docs.map(doc => (
                     {
                         id: doc.id,
                         data: doc.data() 
                     }
                 ))
                 settasks(tasksList)
             }
     
             
             getTasks(db)
     
         }, [tasks]);
         const [edit, setedit] = useState(false);

  return (
    <div className="card" style={{width: "18rem;"}}>
        <img style={{width:'100%', height: "30vh", objectFit:'contain'}} src={consolechoice.img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{consolechoice.name}</h5>
            <p className="card-text">Colors that the Product have : {consolechoice.color} </p>
            <p className="card-text">Price: {consolechoice.price} shekel</p>
            <p className="card-text">Exist in our store: {consolechoice.exist} </p>
            <button className='btn btn-success' onClick={()=>setedit(true)}>Buy Now</button>  <button className='btn btn-danger' onClick={()=>setedit(true)}>Delete</button> <button className='btn btn-primary' onClick={()=>setedit(true)}>Edit</button>
        </div>
    </div>
  )
}
