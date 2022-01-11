import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
//import { registerUserSincrono } from '../actions/registerActions';
import { FormContainer } from '../styles/Styles';
import { registroEmailPasswordNombre } from '../actions/registerActions';

const Register = () => {
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        name: " ",
        email: " ",
        password: ""
    });

    

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });
        
    }

    const hadleSumbit = (e) => {
        e.preventDefault();
        localStorage.setItem('registro', JSON.stringify(values));
        dispatch(registroEmailPasswordNombre(values.email, values.password, values.name));
    }


    return (
        <>
            <FormContainer>
                <img src="https://i.ibb.co/S33Lj5n/Logo2.png" alt="Logo amazonas"/>
                <Form onSubmit={hadleSumbit} className='mx-auto mt-5 b'>
                    <h1>Crear Cuenta</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tu nombre</Form.Label>
                        <Form.Control type="text" placeholder=" " required name ="name" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder=" " required name ="email" onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" required name ="password" onChange={handleInputChange}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className='w-100'>
                        Crea tu cuenta de Amazonas
                    </Button>
                </Form>

            </FormContainer>
        </>
    )
}

export default Register
