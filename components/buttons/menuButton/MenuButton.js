import { CloseMenu, OpenMenu } from './icons'

const MenuButton = ({ open, onClick, className }) => (
  <button onClick={onClick} className={`rounded-full ${className}`}>
    {!open ? <OpenMenu /> : <CloseMenu />}
  </button>
)

export default MenuButton
