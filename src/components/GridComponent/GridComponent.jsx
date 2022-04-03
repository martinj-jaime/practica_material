import React from 'react'

// styles
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// components
import Cards from '../Cards/Cards'

// hardcode data
const data = [
    {
        "id": 1,
        "description": "Hola 1"
    },
    {
        "id": 2,
        "description": "lorem impsun dfsfsdfdsfsdfsdfddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddd"
    },
    {
        "id": 3,
        "description": "Hola 3"
    },
    {
        "id": 4,
        "description": "Hola 4"
    }
]

const GridComponent = () => {
    return (
        <>
            <Container

            >
                <Grid 
                container 
                spacing={2}
                >
                    {
                        data && data.map(data => (
                            <Cards data={data} />
                        )
                        )
                    }
                </Grid>
            </Container>
        </>
    )
}

export default GridComponent