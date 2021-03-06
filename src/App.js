
import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Other from './components/Other/Other';

export const ExampleContext = createContext()

function App() {
  const [count,setCount] = useState('')
  return (
      <ExampleContext.Provider value={[count,setCount]}>
          <Header></Header>
          <Home></Home>
          <Other></Other>
      </ExampleContext.Provider>
  );
}

export default App;
