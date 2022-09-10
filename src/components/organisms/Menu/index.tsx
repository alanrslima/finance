import { MenuItem } from 'components/molecules/MenuItem';
import { menuConfig } from 'config/menu';
import { ReactElement } from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { Container, LogoutWrapper, MenuItemsWrapper } from './styles';

export function Menu(): ReactElement {
  const { items } = menuConfig;

  const arias = {
    role: 'navigation',
  };

  return (
    <Container as="nav" {...arias}>
      <MenuItemsWrapper role="list">
        {items.map(({ id, label, url, icon }) => (
          <MenuItem key={id} url={url} icon={icon} exact />
        ))}
        <LogoutWrapper>
          {/* <MenuItem url="/signout" icon={IoLogOutOutline}>
            Logout
          </MenuItem> */}
        </LogoutWrapper>
      </MenuItemsWrapper>
    </Container>
  );
}
