import { QueryResult } from "@vercel/postgres"
import { NextResponse,NextRequest } from "next/server";
import { Todo,NewTodo,db,todoTable } from "@/lib/drizzle"
import { sql } from "@vercel/postgres";


// export async function POST(request: NextRequest) {
//     const req = await request.json();
//     try {
//         if (req.task) {
//             const res = await db.insert(todoTable).values({
//                 task: req.task,
//             }).returning()
//             console.log(res)
//             return NextResponse.json({ message: "Data added successfully", data: res })
//         } else {
//             throw new Error("Task field is required")
//         }
//     } catch (error) {
//         return NextResponse.json({ message: (error as { message: string }).message })
//     }
// }

export async function POST(request:NextRequest){
    const req=await request.json();
    try{
        if(req.task){
           
    const res = await db.insert(todoTable).values({
   task: req.task,
}).returning()

        }else{
            throw new Error("Task field is required")
        }

    }
    catch(error){
return NextResponse.json({Message :(error as {message :string}).message})
    }
}


    
export async function GET(request: NextRequest) {
    try {
        await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255));`

        const res = await db.select().from(todoTable);

        return NextResponse.json({ data: res })
    } catch (error) {
        console.log((error as { message: string }).message)
        return NextResponse.json({ message: "Somthing went wrong" })
    }
}