
import Post from './components/posts/Post'
import Storie from './components/story/Storie'
import './App.css'
import Lupa from './components/posts/images/lupa.png'
import Home from './components/posts/images/home.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebookMessenger } from 'react-icons/fa'
import Postagem from './components/posts/images/postagem.png'
import Fav from './components/posts/images/fav.png'
import Perfil from './components/header/imagens/perfil.png'
import Explorar from './components/posts/images/explorar.png'
import Feed from './components/Feed/Feed'
import Header from './components/header/Header'



function App() {
  

  //Header//
  return (
    <div className='app'>
      <Header />
      <div>
        <Feed />
      </div>
      <div className="timeline">
        
      </div>
    </div>
  )
}

export default App
