import React from 'react'
import Navbar from '../layout/Navbar'
import Container from '../layout/Container'
import StatusCount from '../layout/StatusCount'
import './Home.css'
import HeaderBlock from '../layout/HeaderBlock'
import BookBlock from '../layout/BookBlock'

function Home() {

  var menu_btnBg = {'name': 'Logout', 'to': '/'};
  var menu_links = [{'name': 'Livros', 'to': '/'}, {'name': 'Autores', 'to': '/'}, {'name': 'Perfil', 'to': '/'}];
  
  return (
    <>
        <Container>
            <Navbar menu_btnBg={menu_btnBg} menu_links={menu_links} />
            <div className="block-horizontal">
              <StatusCount name="Lendo" value="00" />
              <StatusCount name="Lido" value="00" />
            </div>
            <div className="block-vertical">
              <HeaderBlock text="Em leitura" link="#" />
              <div className="block-horizontal-start p-3">
                <BookBlock title="Title Livro" author="Author do Livro" />
              </div>
            </div>
        </Container>
    </>
  )
}

export default Home