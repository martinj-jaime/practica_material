import React, { useState } from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { AiOutlineAlert } from 'react-icons/ai'

const AccordionCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

  return (
    <div style={{ padding: '2rem' }} >
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
            
            <AccordionSummary 
                // expandIcon={<AiOutlineAlert style={{ color:'red' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <AiOutlineAlert style={{ color:'red' }} />
            </AccordionSummary>

            <AccordionDetails >
                <Typography style={{ color:'red' }} >ALARMA POR PANICO 20/05/2022</Typography>
            </AccordionDetails>

        </Accordion>
    </div>
  )
}

export default AccordionCard