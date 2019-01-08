import React from 'react';

import { Container, NewPlayList, Nav } from './styles';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Rádio</a>
        </li>
      </Nav>
      
      <Nav>
        <li>
          <span>
            Sua biblioteca
          </span>
        </li>

        <li>
          <a href="">Seu Daily Mix</a>
        </li>
        <li>
          <a href="">Tocados recentemente</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
        <li>
          <a href="">Álbuns</a>
        </li>
        <li>
          <a href="">Artistas</a>
        </li>
        <li>
          <a href="">Estações</a>
        </li>
        <li>
          <a href="">Arquivos locais</a>
        </li>
        <li>
          <a href="">Vídeos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>      

      <Nav> 
        <li>
          <span>
            playlists
          </span>
        </li>

        <li>
          <a href="">melhores do urucu</a>
        </li>
      </Nav>
    </div>

    <NewPlayList>
      <img src={AddPlayListIcon} alt="Add playlist"/>
      Nova playlist
    </NewPlayList>
  </Container>
);

export default Sidebar;
