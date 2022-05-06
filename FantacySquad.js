import React, { useState , useEffect } from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'


    function FantacySquad(){
        const [posts,setPosts] =  useState([])
        useEffect( ()=>{
            const id = "dd5dcdcd-f09b-4a44-a50e-12f52d9d3d8c"
            const apikey = "%APIKEY%"
            axios.get(`https://api.cricapi.com/v1/match_squad?apikey=${apikey}&offset=0&id=${id}`)
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
                                <td>{posts.teamName}</td>
                                {posts.players.map(players=> (
                                    <ul><li>{players.name}</li></ul>
                                ) ) }
                                </tr>
                         )
                        )
                        }  
                 </tbody>
                 </table>
            </div>
        )

    }

export default FantacySquad