import React, { useState , useEffect } from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

    function MatchScorecard(){
        const [posts,setPosts] =  useState([])
        useEffect( ()=>{
            // const apikey = "%APIKEY%"
            const apikey = "da2589ff-76cf-4b11-8654-080868ac896b"
            const id   = "fc4a5881-fb19-4d21-933c-45e913dc0d3c"
            axios.get(`https://api.cricapi.com/v1/match_scorecard?apikey=${apikey}&offset=0&id=${id}`)
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
                    alert(res.reason)
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
                        <th scope="col">Teams Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">match Type</th>
                        <th scope="col">Venue</th>
                        <th scope="col">Date</th>
                        <th scope="col">Date Time GMT</th>
                        <th scope="col">Series Id</th>
                        <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        posts?.map( posts=> (
                                <tr>
                                <td>{posts.name}</td>
                                <td>{posts.status}</td>
                                <td>{posts.matchType}</td>
                                <td>{posts.venue}</td>
                                <td>{posts.date}</td>
                                <td>{posts.dateTimeGMT}</td>
                                <td>{posts.series_id}</td>
                                <td>{posts.score.map(score=>(
                                    <ul>
                                        <li>r:{score.r}</li>
                                        <li>w:{score.w}</li>
                                        <li>o:{score.o}</li>
                                        <li>inning : {score.inning}</li>
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

export default MatchScorecard