import React, { useState } from 'react';
import { Box, Button, Paper, TextField, Typography, Checkbox, Modal } from '@mui/material';

export const User = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
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

    const handleSubmit = () => {
        // Puedes agregar la lógica de envío del formulario aquí
        // formData contiene la entrada del usuario
        console.log(formData);
    }

    const handlePolicyModalOpen = () => {
        setShowPolicyModal(true);
    }

    const handlePolicyModalClose = () => {
        setShowPolicyModal(false);
    }

    return (
        <div>
            <Box p={3}>
                <Typography variant="h4" align="center" gutterBottom>
                    Registrarse
                </Typography>
                <form>
                    <TextField
                        name="name"
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="lastName"
                        label="Apellido"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="phone"
                        label="Celular"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="password"
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="password2"
                        label="Repite la Contraseña"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
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





