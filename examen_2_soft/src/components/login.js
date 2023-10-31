import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        current_pasword: '',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3100/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            window.location.href = 'http://localhost:3000/principal'
        } else {
            const errorData = await response.json();
            console.log('Error de autenticación:', errorData);
        }
    };

    return (
        <Box p={3}>
            <Typography variant="h4" align="center" gutterBottom>
                Iniciar Sesión
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <TextField
                    name="current_pasword"
                    label="Contraseña"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.current_pasword}
                    onChange={handleInputChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '1rem' }}
                >
                    Iniciar Sesión
                </Button>
            </form>
        </Box>
    );
};

export default Login;

