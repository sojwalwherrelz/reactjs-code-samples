import React, { useState , useEffect } from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

    function Countries(){
        const [posts,setPosts] =  useState([])
        useEffect( ()=>{
            const apikey = "%APIKEY%"
            axios.get(`https://api.cricapi.com/v1/countries?apikey=${apikey}&offset=0`)
            .then( res =>
               {
                if(res.status==200){
                    // console.log(res.data.data)
                    setPosts(res.data.data)
                }else{
                    console.log("Data Not found")
                }
               } 
            ).catch(err=>{
                console.log(err)
            }
           )
        },[] )
        
        return (
            <div>
                <table className="table">
                <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Flag</th>
                        </tr>
                    </thead>
                    <tbody>

                {
                  posts?.map( posts=> (
                        <tr>
                        <td>{posts.name}</td>
                        <td><img width="100" height="100" src={posts.genericFlag} ></img></td>
                        </tr>
                  )
                 )
                }
                 </tbody>
                 </table>
            </div>
        )

    }





export default Countries