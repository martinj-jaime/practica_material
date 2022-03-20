import React from 'react'

// styles
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip'

// icons
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { FaLayerGroup, FaSortAlphaDown } from 'react-icons/fa'


const Icons = () => {
        
  return (
    <div  >
        <Stack direction="row" spacing={1} >
            <Chip
                icon={<BsFillCalendarDateFill />}
                label='Fecha'
                color="primary"
                sx={{ padding:'1rem', '&:hover': {border: '1px solid #000'} }}
                variant='outlined'
                component="button"
                clickable
            />
            <Chip
                icon={<FaSortAlphaDown />}
                label='Alfabeto'
                color="primary"
                sx={{ padding:'1rem', '&:hover': {border: '1px solid #000'} }}
                variant='outlined'
                component="button"
                clickable
            />
            <Chip
                icon={<FaLayerGroup />}
                label='Grupo'
                color="primary"
                sx={{ padding:'1rem', '&:hover': {border: '1px solid #000'} }}
                variant='outlined'
                component="button"
                clickable
            />
        </Stack>
    </div>
  )
}

export default Icons