import React from 'react'

// Components
// import CarRotation from './components/CarRotation/CarRotation'
// import AccordionCard from './components/AccordionCard/AccordionCard'
// import Filter from './components/Filter/Filter'
// import Inputs from './components/Inputs/Inputs'
// import SessionCard from './components/SessionCard/SessionCard'
// import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import GridComponent from './components/GridComponent/GridComponent'
import AccordionCard from './components/AccordionCard/AccordionCard'

const App = () => {

  return (
    <>
      <div style={{ height:'100vh' }} >
        <AccordionCard />
        <GridComponent />
        {/* <CarRotation /> */}
        {/* <AccordionCard /> */}
        {/* <Filter /> */}
        {/* <Inputs /> */}
        {/* <SessionCard /> */}
        {/* <NotFoundPage /> */}  {/* HACER UN REDIRECT DIRECTO ES MUCHO MAS RAPIDO */}

      </div>
    </>
  );
}

export default App;
