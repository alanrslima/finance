// import { Head } r } from 'components/Sidebar';
import { Head } from 'components/atoms/Head';
import { Card } from 'components/molecules/Card';
import { ReactElement } from 'react';
import { Container, Overlay, WrapperCard } from './styles';
import { GuestLayoutProps } from './types';

export function GuestLayout({ children, title }: GuestLayoutProps): ReactElement {
  return (
    <>
      <Head title={title} />
      <Container>
        <Overlay>
          <WrapperCard>
            <Card>{children}</Card>
          </WrapperCard>
        </Overlay>
      </Container>
    </>
  );
}
