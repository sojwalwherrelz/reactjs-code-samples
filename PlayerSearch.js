import React, { useState , useEffect } from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'


    function PlayerSearch(){
        const [posts,setPosts] =  useState([])
        useEffect( ()=>{
            const Name = "Olive Smith"
            const playerName = Name.replace(" ", "%20");
            const apikey = "%APIKEY%"
            axios.get(`https://api.cricapi.com/v1/players?apikey=${apikey}&offset=0&search=${playerName}`)
            .then( res =>
               {
                if(res.status===200){  
                    setPosts(res.data.data)                    
                }else{
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
                        <th scope="col">Name</th>
                        <th scope="col">country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        posts?.map( posts=> (
                                <tr>
                                <td>{posts.name}</td>
                                <td>{posts.country}</td>
                                </tr>
                         )
                        )
                        }  
                 </tbody>
                 </table>
            </div>
        )

    }

export default PlayerSearch