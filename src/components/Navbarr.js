
import { Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap'
import { BarraNav } from '../styles/Styles'


const Navbarr = () => {

    
    return (
        <header>
            <BarraNav>
               
                <img src="https://i.ibb.co/KNWbmxc/amazonas-Logo.png" alt="Logo amazonas"/>
               
               <ul>
                   <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        <div>
                            <button>
                                <p>Hola</p>
                                <p>Elige tu dirección</p>
                            </button>                            
                        </div>
                   </li>
                   <li>
                    <InputGroup className="mb-3">
                            <DropdownButton
                            variant="outline-secondary"
                            title="Todos los departamentos"
                            id="input-group-dropdown-1"
                            >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                            <FormControl aria-label="Text input with dropdown button" />
                        </InputGroup>
                   </li>
                   <li>                       
                        <div>
                            <button>
                                <p>Hola, identificate</p>
                                <DropdownButton
                                variant="outline-secondary"
                                title="Cuenta y Listas"
                                id="input-group-dropdown-1"
                                className="ps-0"
                                >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </DropdownButton>
                            </button>                            
                        </div>                       
                   </li>
                   <li>
                       <a href="/">                        
                            <p>Devoluciones <br/><span>Y Pedidos</span></p>                                 
                       </a>
                   </li>
                   <li>
                       <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <p>Carrito</p>
                       </a>
                   </li>
               </ul>
            </BarraNav>
        </header>
    )
}

export default Navbarr
