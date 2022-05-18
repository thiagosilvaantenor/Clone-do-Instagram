import "./Menu.css";
import {ReactComponent as Home} from "./svgs/home.svg";
import {ReactComponent as Messenger} from "./svgs/messenger.svg";
import {ReactComponent as Create} from "./svgs/create.svg";
import {ReactComponent as Explorer} from "./svgs/explore.svg";
import {ReactComponent as Notifications} from "./svgs/notifications.svg";
import Perfil from "./imagens/perfil.png"
function Menu (){
  return (
    <div className="menu">
      <Home className="icon" />
      <Messenger className="icon" />
      <Create className="icon" />
      <Explorer className="icon" />
      <Notifications className="icon" />
      <img src={Perfil} className="perfil" />

    </div>
  )
}

export default Menu;