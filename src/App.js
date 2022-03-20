import React from 'react'

// Components
import CarRotation from './components/CarRotation/CarRotation'
import AccordionCard from './components/AccordionCard/AccordionCard'
import Filter from './components/Filter/Filter'
import Inputs from './components/Inputs/Inputs'

const App = () => {


  return (
    <>
      <div style={{ height:'100vh' }} >
        <CarRotation />
        <AccordionCard />
        <Filter />
        <Inputs />
      </div>
    </>
  );
}

export default App;
