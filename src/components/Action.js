import axios from 'axios'
import React,{useState} from 'react'

export const Data = () => {
    const [state, setstate] = useState(null)
    axios.get("https://www.gov.uk/bank-holidays.json").then(resp => {
      setstate(resp.data);
      console.log(resp)
    })
    .catch(err => console.log(err))
   return state;
}
