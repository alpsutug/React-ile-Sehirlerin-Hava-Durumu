import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from './City';

function App() {
  const key="f917c35e2eac44b9ee42778dea37637f";
  const [search, setSearch] = useState("");
  const [city,setCity] = useState();
  useEffect(()=> {

    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      }
       catch (error)
        {
        console.error(error);
        }
    }
    getApi();
  },[search]);
  console.log(search);

  return (
    <div className="App">
    <div>
      
        <input  
         onChange={(e)=>setSearch(e.target.value)}
         type="text"
         placeholder="Placeholder"
         className="px-3 py-3 placeholder-blueGray-600 relative bg-White rounded text-sm border-0 shadow outline-none focus:outline-none foucs:ring" />
         <City city={city} />

      </div>
      

    </div>
  );
};

export default App;
