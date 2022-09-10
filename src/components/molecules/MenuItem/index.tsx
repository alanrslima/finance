import { ReactElement, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Container, Icon, IconWrapper, MenuLink } from './styles';
import { MenuItemProps } from './types';

export function MenuItem({ url, icon, exact }: MenuItemProps): ReactElement {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!exact) {
      setIsActive(router?.asPath?.startsWith(url));
      return;
    }
    setIsActive(router?.asPath === url);
  }, [router?.asPath, exact, url]);

  return (
    <Container role="listitem">
      <NextLink href={url} passHref>
        <MenuLink active={isActive}>
          <IconWrapper>
            <Icon as={icon} />
          </IconWrapper>
        </MenuLink>
      </NextLink>
    </Container>
  );
}
