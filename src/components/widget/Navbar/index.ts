import Navbar from './Navbar';
export { default as MobileMenu } from './chunk/MobileMenu';
export { default as NavItem } from './chunk/NavItem';
export { default as OpenMenuBtn } from './chunk/OpenMenuBtn';
export { default as SmNav } from './chunk/SmNav';
export { OpenContext } from './Navbar';

export default Navbar;

export const menuOptions = [
  {
    id: 101,
    text: '//01 <Inicio/>',
    href: '#hero',
  },
  {
    id: 102,
    text: '//02 <SobreMí/>',
    href: '#aboutme',
  },
  {
    id: 103,
    text: '//03 <MisProyectos/>',
    href: '#myproject',
  },

  {
    id: 104,
    text: '//04 <Contacto/>',
    href: '#contact',
  },
];
