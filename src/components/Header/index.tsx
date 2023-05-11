import { navItems } from '../../data/navItems';
import { SearchZone } from '../SearchZone';

import {
  Container,
  LogoContainer,
  Logo,
  NavBar,
  Address,
  Cart,
} from "./styles";
import {
  CaretDown,
  HandbagSimple,
  SignIn,
} from "@phosphor-icons/react";

export const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo viewBox="0 0 1004 530.58">
          <path
            d="M-4,529.31H72.41l42.46-211.2H38.45ZM42.66,292.92h76.73L132,229.73H55.3Zm59.47,295.82h76.42l46.69-228.18h57.31L291,318.11H234.79l2.13-9.55c3.18-18,9.55-38.21,38.2-38.21,17,0,32.91,1.06,48.82,8.49l8.5-44.57a167.8,167.8,0,0,0-55.19-9.56c-61.56,0-104,36.09-119.93,93.4H130.79l-8.49,42.45h26.53Z"
            transform="translate(4 -224.71)"
            fill="#ea1d2c"
          />
          <path
            d="M344.11,533.56c90.21,0,152.83-81.73,152.83-148.59,0-49.88-45.64-71.11-90.21-71.11C308,313.86,253.9,402,253.9,462.45c0,49.88,46.7,71.11,90.21,71.11m242,0c90.21,0,152.83-81.73,152.83-148.59,0-49.88-46.7-71.11-91.28-71.11-98.7,0-152.82,88.09-152.82,148.59,0,49.88,47.76,71.11,91.27,71.11m277-4.25h75.35L1000,229H923.59l-18.05,89.15-31.84-3.18c-74.29,0-142.21,95.51-142.21,163.44,0,27.59,18,55.19,48.82,55.19,43.51,0,74.29-21.23,87-42.46h4.24ZM627.48,687.45a295,295,0,0,1-212.26,66.86c-100.83-6.37-173-83.85-185.73-165.57h4.24c23.35,51,79.6,98.71,148.59,106.13,70,8.49,153.89-23.34,199.52-66.86L530.9,588.74H684.79l-34,163.45-22.29-63.68Z"
            transform="translate(4 -224.71)"
            fill="#ea1d2c"
          />
        </Logo>
      </LogoContainer>
      <NavBar>
        <ul>
        {navItems.map(item => <li><a>{item}</a></li>)}
        </ul>
      </NavBar>
      <SearchZone placeholder="Busque por um item ou loja" />
      <Address>
        <span>Av. Taquaritinga, 367</span>
        <CaretDown size={16} fill="#ea1d2c" weight="bold" />
      </Address>
      <Cart>
        <a>
          <SignIn size={22} fill="#ea1d2c" />
        </a>
        <button>
          <HandbagSimple size={22} fill="#ea1d2c" />
          <div>
            <span>R$ 0,00</span>
            <span>0 itens</span>
          </div>
        </button>
      </Cart>
    </Container>
  );
};
