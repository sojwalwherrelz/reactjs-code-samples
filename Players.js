import React, { useState , useEffect } from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'


    function Players(){
        const [posts,setPosts] =  useState([])
        useEffect( ()=>{
            const apikey      = "%APIKEY%"
            axios.get(`https://api.cricapi.com/v1/players?apikey=${apikey}&offset=0`)
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

export default Players