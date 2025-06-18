import  { useEffect, useState } from 'react';
import './App.css'
import CardList from './components/card-list/card-list.component.jsx';

const  App = () => {
  console.log('Rendering App');
  const [monsters, setMonsters] = useState([]);
  console.log('Monsters:', monsters);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setMonsters(data));
  }, []);

  return (
    <>
      <CardList monsters={monsters} />
    </>
  );
}

export default App
