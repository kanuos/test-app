import React, {useEffect, useState} from 'react';
import axios from 'axios'

const HomePage = ({requestCount, setMessage}) => {
    const [thoughts, setThoughts] = useState([])
    const getData = async () =>{
        try
        {
            const serverResponse = await axios({
            method: 'GET',
            url:'/api',
        })
        if(serverResponse.status === 200){
            setThoughts([...serverResponse.data.thoughts].sort((a,b)=> Date.parse(b.date) - Date.parse(a.date)))
        }
     }
     catch(err){
         console.log(err)
     }
    }

    const doubleDigit = num => num < 10 ? `0${num}` : num

    const monthName = month => {
        switch(month){
            case 0: return 'January'
            case 1: return 'February'
            case 2: return 'March'
            case 3: return 'April'
            case 4: return 'May'
            case 5: return 'June'
            case 6: return 'July'
            case 7: return 'August'
            case 8: return 'September'
            case 9: return 'October'
            case 10: return 'November'
            default: return 'December'
        }
    }

    const getTime = (hours, minutes) =>{
        let tempHrs = hours;
        let meridian = 'PM';
        if (hours >= 0 && hours <=11){
            meridian = 'AM'
            if (hours === 0){
                tempHrs = 12
            }
        }else{
            tempHrs = (hours) - 12
        }
        return `${doubleDigit(tempHrs)}:${doubleDigit(minutes)} ${meridian}`
    }

    const dateString = string =>{
        const dateObj = new Date(string)
        const date = dateObj.getDate()
        const month = dateObj.getMonth() 
        const year = dateObj.getFullYear()
        const time = getTime(dateObj.getHours(),dateObj.getMinutes())

        return `${doubleDigit(date)}-${monthName(month)}-${year} (${time})`
    }

    useEffect(()=>{
        getData()
    },[])
  
    useEffect(()=>{
        getData()
    },[requestCount])


    return (
        <div className="mt-3">
            <h1 className="text-center font-weight-lighter mb-3">{thoughts && `Thought Count : ${thoughts.length}`}</h1>
            {thoughts ? 
                <div className="row">
                {thoughts.map(thought =>(
                        <ul className="col-md-6 col-xl-3" key={thought._id}>
                            <li className="card p-2">
                                <article id="card" className="card-body">
                                    <h5 className="card-title text-center" style={{color:'crimson'}}>            {thought.title}
                                    </h5>
                                    <em className="d-block card-subtitle mb-1 text-secondary">
                                        Created on : {dateString(thought.date)}
                                    </em>
                                    <hr/>
                                    <p className="card-text" style={{color:'crimson'}}>
                                        {thought.text}
                                    </p>
                                </article>
                            </li>
                        </ul>
                ))}
                </div>
             : <h5>No thoughts yet. Write one now!!</h5>}
        </div>
    )
}

export default HomePage
