import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [list, setlist] = useState([]);
  const [newItem, setItem] = useState("");

  const getting = async () => {
    await axios.get('http://localhost:5000/')
      .then(response => { setlist(response.data.msg); console.log("MSG ", response.data.msg) })
      .catch(err => console.log(err))

  }


  const posting = async () => {
    await axios.post('http://localhost:5000/')
      .then(response => {
        let array = response.data.msg
        for (let i in array)
          {
            setItem(array[i])
            setlist(array[i])
          }
        console.log("MSG ", response.data.msg)
      })
      .catch(err => console.log(err))

      // if(!newItem)



  }

  return (
    <div className="App">
      <div>

        <button onClick={() => getting()}>    ANYTHING </button>

        <input type="text" onChange={(e) => e.target.value} />

        <button onClick={() => posting()}>    add new member </button>


        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>

          }
          )
          }</ul>
      </div>
    </div>
  );
}

export default App;
