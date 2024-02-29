import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    
    <Navbar className="bg-info">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
              <Navbar.Brand  className='fw-bolder d-flex align-items-center' style={{color:'white'}}>
             <h5>
                  <i  class="fa-solid fa-cloud-arrow-up  me-2"></i>{' '}
                    Media Player
             </h5>
              </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header