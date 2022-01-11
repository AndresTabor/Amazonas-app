import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { FormContainer } from '../styles/Styles'

const Login = () => {

    return (
        <>
            <FormContainer>
                <img src="https://i.ibb.co/S33Lj5n/Logo2.png" alt="Logo amazonas"/>
                <Form className='mx-auto mt-5 b'>
                    <h1>Iniciar sesión</h1>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder=" " required name ="email"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" required name ="password"/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className='w-100'>
                        Continuar
                    </Button>
                </Form>

            </FormContainer>
        </>
    )
}

export default Login
