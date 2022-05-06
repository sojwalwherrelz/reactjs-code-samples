import React, { useState , useEffect } from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

    function Seriesinfo(){
        const [posts,setPosts] =  useState([])
        const [infoname, setinfoname] = useState('initial');
        const [enddate, setenddate] = useState('initial');
        const [startdate, setstartdate] = useState('initial');
        const [odi, setodi] = useState('initial');
        const [t20, sett20] = useState('initial');
        const [squads, setsquads] = useState('initial');
        const [test, settest] = useState('initial');
        useEffect( ()=>{
            const id="ce731721-f991-4749-94fe-70a5902fde4c"
            const apikey = "%APIKEY%"
            axios.get(`https://api.cricapi.com/v1/series_info?apikey=${apikey}&offset=0&id=${id}`)
            .then( res =>
               {
                if(res.status===200){  
                    if(res.data.status=="failure"){
                        alert(
                            res.data.reason
                        )
                    }  else{
                        
                        setinfoname(res.data.data.info.name)
                        setenddate(res.data.data.info.enddate)
                        setstartdate(res.data.data.info.startdate)
                        setodi(res.data.data.info.odi)
                        setsquads(res.data.data.info.squads)
                        sett20(res.data.data.info.t20)
                        settest(res.data.data.info.test)
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
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">ODI</th>
                        <th scope="col">T20</th>
                        <th scope="col">Test</th>
                        <th scope="col">squads</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <td>{infoname}</td> 
                            <td>{startdate}</td> 
                            <td>{enddate}</td> 
                            <td>{odi}</td> 
                            <td>{t20}</td> 
                            <td>{test}</td> 
                            <td>{squads}</td> 
                            </tr>
                 </tbody>
                 </table>
            </div>
        )

    }

export default Seriesinfo