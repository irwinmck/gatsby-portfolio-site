import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${p => p.theme.main.bgColor};
  width: 100%;
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Menu = styled.div`
  color: ${p => (p.close ? p.theme.x : p.theme.color1)};
  display: flex;
  align-items: center;

  & svg {
    width: 35px;
    height: 35px;
  }
`;

export const Mak = styled.div`
  color: ${p => p.theme.text.header};
  font-size: 1.8em;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  z-index: 1000;
`;

export const MakDrawer = styled(Mak)`
  color: ${p => p.theme.white};
`;

export const ThemeToggle = styled.div`
  color: ${props => props.theme.color1};
  display: flex;
  align-items: center;
  z-index: 101;

  & svg {
    width: 40px;
    height: 40px;
  }
`;

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: ${p => (p.open ? 0 : '-105%')};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.sidenav.bgColor};
  transition: 0.4s left ease-in-out;
`;

export const Top = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px 15px;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-align: center;
  color: ${p => p.theme.white};

  & li {
    padding: 10px;
    font-weight: 600;
  }
`;
