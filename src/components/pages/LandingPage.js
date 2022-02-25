import React from 'react'
import Container from '../layout/Container'
import Navbar from '../layout/Navbar'
import ButtonBlue from '../links/ButtonBlue'
import './LandingPage.css'

function LandingPage() {
  return (
    <>
      <Container>
        <Navbar />
        <div className='landing-body'>
          <div className='landing-headline'>
            <div className='landing-text'>
              <h3>Online Organize Books</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur nisi sit amet ante vulputate luctus. Integer ac tempus nisl, at vestibulum mauris.</p>
            </div>
            <ButtonBlue width="10rem" to="/register" name="Comece já" />
          </div>
          <div className="landing-img">
            <img src="/images/books.png" alt="img-landing" />
          </div>
        </div>
      </Container>
    </>
  )
}

export default LandingPage