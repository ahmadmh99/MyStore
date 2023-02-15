


import { useParams } from 'react-router-dom'
import { cellList } from '../dummy-data'
import React, {useState, useEffect} from 'react'

import { collection, getDocs } from 'firebase/firestore'

import { db } from '../firebase-config'

export default function MyCell() {

    let params = useParams(); // :coffeeName
    let cellchoice = cellList.find(cell =>
         cell.name === params.coffeeName)
         const [tasks, settasks] = useState([]);

         useEffect(()=>{
     
             const getTasks = async (db) => {
                 const TasksCol = collection(db, 'tasks');
                 // getDocs() - return all documents for our collection - tasks
                 const tasksSnapshot = await getDocs(TasksCol)
                 // console.log(tasksSnapshot)
                 const tasksList = await tasksSnapshot.docs.map(doc => (
                     {
                         id: doc.id,
                         data: doc.data() // title, description, completed..
                     }
                 ))
                 settasks(tasksList)
             }
     
             // call the function
             getTasks(db)
     
         }, [tasks]);
         const [edit, setedit] = useState(false);

  return (
    <div className="card" style={{width: "18rem;"}}>
        <img style={{width:'100%', height: "30vh", objectFit:'contain'}} src={cellchoice.img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{cellchoice.name}</h5>
            <p className="card-text">Colors that the Product have : {cellchoice.color} </p>
            <p className="card-text">Price: {cellchoice.price} shekel</p>
            <p className="card-text">Exist in our store: {cellchoice.exist} </p>
            <button className='btn btn-success' onClick={()=>setedit(true)}>Buy Now</button>  <button className='btn btn-danger' onClick={()=>setedit(true)}>Delete</button> <button className='btn btn-primary' onClick={()=>setedit(true)}>Edit</button>
        </div>
    </div>
  )
}
