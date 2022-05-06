import React, { useState , useEffect } from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'


    function MatchPoints(){
        const [posts,setPosts] =  useState([])
        useEffect( ()=>{
            const apikey      = "%APIKEY%"
            const id          = "119f27e8-cb92-4ddf-b275-a2d265cec2dd"
            axios.get(`https://api.cricapi.com/v1/match_points?apikey=${apikey}&offset=0&id${id}`)
            .then( res =>
               {
                if(res.status===200){  
                    if(res.data.status=="failure"){
                        alert(
                            res.data.reason
                        )
                    }  else{
                        setPosts(res.data.data)
                    }
                }else{
                    console.log(res)
                    setPosts(res.reason)
                }
               } 
            ).catch(err=>{
                console.log(err)
            }
           )
        },[])
        
        return (
            <div>
                <table className="table">
                <thead>
                        <tr>
                        <th scope="col">Team Name</th>
                        <th scope="col">Batting</th>
                        <th scope="col">Bowling</th>
                        <th scope="col">Catching</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        posts?.map( posts=> (
                                <tr>
                                <td>{posts.inning}</td>
                                <td>{posts.batting.map(batting=>(
                                    <ul>
                                        <li>name : {batting.name}</li>
                                        <li>points:{batting.points}</li>
                                    </ul>
                                ))}</td>
                                
                                <td>{posts.bowling.map(bowling=>(
                                    <ul>
                                        <li>name : {bowling.name}</li>
                                        <li>points:{bowling.points}</li>
                                    </ul>
                                ))}</td>
                                
                                <td>{posts.catching.map(catching=>(
                                    <ul>
                                        <li>name : {catching.name}</li>
                                        <li>points:{catching.points}</li>
                                    </ul>
                                ))}</td>

                                </tr>
                         )
                        )
                        }  
                        
                 </tbody>
                 </table>
            </div>
        )

    }

export default MatchPoints