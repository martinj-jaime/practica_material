import React from 'react'

// styles
import TextField from '@mui/material/TextField';

const Inputs = () => {
    return (
        <div>
            <TextField
                error
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
        </div>
    )
}

export default Inputs