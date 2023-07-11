import { useState } from "react";

const DisplayData = () => {
    const data = [
      {
        id: 0,
        language: "JavaScript",
        description: "Software Engineering",
      },
      {
        id: 1,
        language: "Python",
        description: "Data Science",
      },
      {
        id: 2,
        language: "Kotlin",
        description: "Android Development",
      },
    ];

    const [search, setSearch] = useState('')
    console.log(search)
  
    return (
      <>
      <form >
        <input type="text" 
        onChange={(e) => setSearch(e.target.value)}    placeholder="Search"/>
      </form>
        {data.filter((item) =>{
            return search.toLowerCase() === '' ? item : item.language.toLowerCase().includes(search);
        }).map((item) => {
          return (
          <div key={item.id}>
            <div>{item.language}</div>
            <div>{item.description}</div>
          </div>
        )})}
      </>
    );
  };
  
  export default DisplayData;