import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { registerProductSincrono } from '../actions/productsAction'
import { getBaseProducts } from '../helpers/ProductsApi'
import { CardDescription, CardImage } from '../styles/Styles'


const Home = () => {

    const dispatch = useDispatch();
    const [state, setstate] = useState([])

    useEffect( () => {
        getItems();
    }, [])

    const getItems = async() =>{
        const basePrducts = await getBaseProducts();
        setstate(basePrducts)
        console.log(basePrducts);
    }

    const handleRegister = () => {
        //localStorage.setItem('registro', JSON.stringify(state[2]));
        // eslint-disable-next-line array-callback-return
        state.map( (item) => {
            dispatch(registerProductSincrono(item))
        })

    }

    return (
        <Container fluid className='pt-5 '>
            <Row>
            {

                state.map(item => (

                    <Col xs xl="3" sm="12" lg="6" className='mb-3' key={item.id}>
                        <a href="/" alt="product Image">
                            <Card style={{width: '80%', height: '600px'}} className='mx-auto'>
                            <CardImage  variant="top" src={item.image}  />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <CardDescription>{item.description}</CardDescription>
                                <Card.Text>US ${item.price}</Card.Text>
                                <Card.Text>Rating: {item.rating.rate}</Card.Text>
                            </Card.Body>
                            </Card>
                        </a>
                    </Col>
                ))
            }

            </Row>,
            <button className='w-50' onClick={() => handleRegister()}></button>
        </Container>
    )
}

export default Home
