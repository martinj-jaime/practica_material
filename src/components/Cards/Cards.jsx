import React from 'react'

// styles
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import CardActionArea from '@mui/material/CardActionArea'

// icons
import { MdMoreVert } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
import { FcEmptyBattery, FcChargeBattery } from 'react-icons/fc'
import { AiFillAlert } from 'react-icons/ai'

// components
import AccordionCard from '../AccordionCard/AccordionCard'

const Cards = ({ data }) => {
    const { id, description } = data

    return (
        <Grid
            item
            // xs={6}
            xs={12} sm={6} md={6}
        >
            <Card 
            key={id}  
            sx={{ 
                minWidth: 275, minHeight: '100%',
                display: 'flex', flexDirection: 'column',
                height: '100%'
            }} 
            flexDirection='column'
            >

                <CardHeader
                    avatar={
                        <Avatar>
                            <AiFillAlert />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MdMoreVert />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    sx={{ borderBottom: '1px solid gray' }}
                >
                </CardHeader>

                <CardActionArea
                    onClick={() => console.log('ok')}
                    sx={{ 
                        display: 'flex', height: '100%', 
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignContent: 'flex-start',
                        justifyContent: 'space-between',
                        padding: '1rem'
                    }}
                >
                    {/* <CardContent> */}
                    <Box
                    component='div'
                    >
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant='body2' > {description} </Typography>
                    </Box>
                    <Box
                    component='div'
                    >
                        <GoLocation />
                        <FcChargeBattery />
                    </Box>
                </CardActionArea>

            </Card>
        </Grid>
    )
}

export default Cards