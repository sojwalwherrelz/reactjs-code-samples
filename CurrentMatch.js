import React, { useState , useEffect } from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

    function CurrentMatch(){
        const [posts,setPosts] =  useState([])
        useEffect( ()=>{
            const apikey = "%APIKEY%"
            axios.get(`https://api.cricapi.com/v1/currentMatches?apikey=${apikey}&offset=0`)
            .then( res =>
               {
                if(res.status==200){
                    if(res.data.status=="failure"){
                        alert(
                            res.data.reason
                        )
                    }  else{
                        setPosts(res.data.data)
                    }
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
                        <th scope="col">Match type</th>
                        <th scope="col">series Id</th>
                        <th scope="col">status</th>
                        <th scope="col">venue</th>
                        <th scope="col">date</th>
                        <th scope="col">date time GMT</th>
                        </tr>
                    </thead>
                    <tbody>

                {
                  posts?.map( posts=> (
                        <tr>
                        <td>{posts.name}</td>
                        <td>{posts.matchType}</td>
                        <td>{posts.series_id}</td>
                        <td>{posts.status}</td>
                        <td>{posts.venue}</td>
                        <td>{posts.date}</td>
                        <td>{posts.dateTimeGMT}</td>
                        </tr>
                  )
                 )
                }
                 </tbody>
                 </table>
            </div>
        )

    }

export default CurrentMatch