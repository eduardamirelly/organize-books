import React from 'react'
import Navbar from '../layout/Navbar'
import Container from '../layout/Container'

function Home() {

  var menu_btnBg = {'name': 'Logout', 'to': '/'};
  var menu_links = [{'name': 'Livros', 'to': '/'}, {'name': 'Autores', 'to': '/'}, {'name': 'Perfil', 'to': '/'}];
  
  return (
    <>
        <Container>
            <Navbar menu_btnBg={menu_btnBg} menu_links={menu_links} />
        </Container>
    </>
  )
}

export default Home