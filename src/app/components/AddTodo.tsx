"use client"
import React, { useState, useTransition } from 'react'
import Image from "next/image"
import { NewTodo } from '@/lib/drizzle'
import { useRouter } from "next/navigation";

const AddTodo = () => {
    const [task, setTask] = useState<NewTodo | null>(null);
    const { refresh } = useRouter();


    const handleSubmit = async () => {
        try {
            if (task) {
                const res = await fetch("/api/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        task: task.task
                    }),

                })
                refresh();
            }
        } catch (error) {
            console.log("error")
        }

    }

    return (
        <div>
            <form className='w-full flex gap-x-3'>
                <input
                    onChange={(e) => setTask({ task: e.target.value })}
                    className='rounded-full w-full py-3.5 px-5 border focus:outline-secondary' type="text" />
                <button type='button' onClick={handleSubmit} className='p-4 shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary' >
                    <Image src={"/send.png"} width={20} height={20} alt='arrow' />
                </button>
            </form>
        </div>
    )
}

export default AddTodo
// "use client"
// import React from 'react'
// import Image from 'next/image'
// import { useState } from 'react'
// import { NewTodo } from '@/lib/drizzle'
// import { useRouter} from "next/navigation";


// const AddTodo = () => {
//  const [task,settask] =  useState<NewTodo | null>(null);
//  const [loading,setloading]=useState(false);
//  const {refresh}= useRouter();

//  const handleSubmit=async()=>{
//     try {
//         setloading(true);
//         if(task){
            
//             const res=await fetch("/api/todo" ,{
//                 method:"POST",
//                 body:JSON.stringify({
//                     task:task.task
//                 })
//             })
//             refresh();
//         }
            
//     } catch (error) {
//         console.log("error")
//     }
//     finally{
//         setloading(false);
//     }
   
//  }
//   return (
//     <div>
// <form className="w-full flex gap-x-3">
//     <input
//     onChange={((e)=>settask({
//         task :e.target.value
//     }))} 
//     type="text" className="rounded-full w-full py-3.5 px-5 border focus:outline-secondary"/>
// <button type="button" onClick={handleSubmit} className=" p-4 shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary">
//     <Image src={"/arrow.svg"} width={20} height={20} alt="arrow"/>
//     </button></form>
//     </div>
//   )
// }

// export default AddTodo;