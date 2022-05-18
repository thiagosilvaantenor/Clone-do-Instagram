import './Header.css'
import Menu from './Menu.js'
function Header() {
  return (
    <div className="header">
      <div className="container">
        <img
          className="logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo do instagram"
        />
        <div className='search_bar'>
        <a className='lupa'> <svg
            aria-label="Pesquisar"
            className="searchIcon"
            color="#8e8e8e"
            fill="#8e8e8e"
            height="16"
            role="img"
            viewBox="0 0 24 24"
            width="16"
          >
            <path
              d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="16.511"
              x2="22"
              y1="16.511"
              y2="22"
            ></line>
          </svg></a>
          <input type="search" className="pesquisa" placeholder="Pesquisar" />
        </div>
        <Menu />
      </div>
    </div>
  )
}
export default Header
