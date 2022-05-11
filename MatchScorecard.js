import React, { useState , useEffect } from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

    function MatchScorecard(){
        const [infoname, setinfoname] = useState('initial');
        const [date, setdate] = useState('initial');
        const [matchType, setmatchType] = useState('initial');
        const [matchWinner, setmatchWinner] = useState('initial');
        const [score, setscore] = useState([]);

        useEffect( ()=>{
           
            const apikey = "%APIKEY%"
            const id   = "fc4a5881-fb19-4d21-933c-45e913dc0d3c"
            axios.get(`https://api.cricapi.com/v1/match_scorecard?apikey=${apikey}&offset=0&id=${id}`)
            .then( res =>
               {
                if(res.status === 200){
                    if(res.data.status === "failure"){
                        alert(
                            res.data.reason
                        )
                      }  else{

                        setinfoname(res.data.data.name)
                        setdate(res.data.data.date)
                        setmatchType(res.data.data.matchType)
                        setmatchWinner(res.data.data.matchWinner)
                        setscore(res.data.data.score)
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
                        <th scope="col">Date</th>
                        <th scope="col">match Type</th>
                        <th scope="col">match Winner</th>
                        <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                                <tr>
                                <td>{infoname}</td>
                                <td>{date}</td>
                                <td>{matchType}</td>
                                <td>{matchWinner}</td>
                                <td>{score.map(score=>(
                                    <ul>
                                        <li>R : {score.r}</li>
                                        <li>W:{score.w}</li>
                                        <li>O:{score.o}</li>
                                        <li>inning:{score.inning}</li>
                                    </ul>
                                ))}</td>
                                </tr>
                 </tbody>
                 </table>
            </div>
        )

    }

export default MatchScorecard