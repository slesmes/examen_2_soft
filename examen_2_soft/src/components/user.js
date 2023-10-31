import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, Checkbox, Modal} from '@mui/material';
import { Link } from 'react-router-dom';

export const User = () => {

    useEffect(() => {

    }, []);

    const [formData, setFormData] = useState({
        firstname: '',
        lastName: '',
        email: '',
        phone: '',
        current_password: '',
        password2: '',
    });

    const [showPolicyModal, setShowPolicyModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    
    const urlPostUser = "http://localhost:3100/api/v1/auth/signin"
    const handleSubmit = (e) => {
        setFormData(true)
        e.preventDefault();
        console.log(formData)
            fetch(urlPostUser, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Post creado:', data);

                })
                .catch((error) => {
                    console.error('Error al crear el post:', error);
                });
        
    }

    const handlePolicyModalOpen = () => {
        setShowPolicyModal(true);
    }

    const handlePolicyModalClose = () => {
        setShowPolicyModal(false);
    }

    return (
        <div>
            <Box display="flex" justifyContent="space-between" p={3}>
                <Typography variant="h6">
                    <Link to="/login">Login</Link>
                </Typography>
            </Box>
            <Box p={3}>
                <Typography variant="h4" align="center" gutterBottom>
                    Registrarse
                </Typography>
                <form>
                    <TextField
                        name="firstname"
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value= {formData.firstname}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="lastName"
                        label="Apellido"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value = {formData.lastName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value = {formData.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="phone"
                        label="Celular"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value = {formData.phone}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="current_password"
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value = {formData.current_password}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="password2"
                        label="Repite la Contraseña"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.password2}
                        onChange={handleInputChange}
                    />
                    <label>
                        <Checkbox />
                        Acepto la <span onClick={handlePolicyModalOpen} className="policy-link">POLÍTICA GENERAL DE TRATAMIENTO DE DATOS PERSONALES</span>
                    </label>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        fullWidth
                        style={{ marginTop: '1rem' }}
                    >
                        Registrarse
                    </Button>
                </form>
            </Box>
            <Modal open={showPolicyModal} onClose={handlePolicyModalClose} >
                <Box p={3} className="policy-modal" style={{ backgroundColor: 'white' }}>
                    <Typography variant="h6">POLÍTICA GENERAL DE TRATAMIENTO DE DATOS PERSONALES</Typography>

                    <Typography variant="subtitle1">CLIENTES, PROSPECTOS DE CLIENTES, FUNCIONARIOS, PROVEEDORES Y VISITANTES</Typography>
                    <Typography variant="subtitle1">ENTRADA EN VIGENCIA: OCTUBRE DE 2023</Typography>
                    <Typography variant="subtitle1">ÚLTIMA VERSIÓN: OCTUBRE DE 2023</Typography>

                    <Typography variant="h6">INTRODUCCIÓN</Typography>
                    <Typography variant="body1">
                        Nombre pág. S.A.S. (en adelante, Nombre pág) es responsable de los Datos Personales e información que le suministran sus clientes, prospectos de clientes proveedores, contratistas, y visitantes (en adelante, los Titulares).
                    </Typography>

                    <Typography variant="body1">
                        En la presente Política de Tratamiento se establecen las finalidades, medidas y procedimientos de las Bases de Datos de Nombre pág así como los mecanismos con que los Titulares cuentan para conocer, actualizar, rectificar, suprimir los datos suministrados o revocar la autorización que se otorga con la aceptación de la presente Política de Tratamiento.
                    </Typography>

                    <Typography variant="body1">
                        La aceptación de propuestas, la celebración de contratos, el diligenciamiento de formatos, el acceso a los Servicios de la página web www.nombrepág.co (en adelante la Página Web) y/o la aceptación expresa o inequívoca de las presente políticas, implica la aceptación de los Titulares de la Política de Tratamiento y Protección de Datos Personales y su autorización para los usos y otros tratamientos que aquí se describen.
                    </Typography>

                    <Typography variant="h6">DEFINICIONES</Typography>
                    <Typography variant="body1">
                        Para los efectos de la presente Política de Privacidad, se entiende por:
                    </Typography>
                    <ul>
                        <li><strong>Dato personal:</strong> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.</li>
                        <li><strong>Dato público:</strong> Dato personal que no es semiprivado, privado o sensible. Entre otros, son los datos relativos al estado civil de las personas, a su profesión u oficio y a su calidad de comerciante o de servidor público. Por su naturaleza, los datos públicos pueden estar contenidos, entre otros, en registros y documentos públicos.</li>
                        <li><strong>Dato Privado:</strong> Es el dato que por su naturaleza íntima o reservada sólo es relevante para el Titular.</li>
                        <li><strong>Dato personal sensible:</strong> Se entiende como datos sensibles aquellos que afecten la intimidad del titular o cuyo uso indebido pueda afectar la intimidad del Titular o la potencialidad de generar su discriminación.</li>
                    </ul>
                </Box>
            </Modal>

        </div>
    );
}





