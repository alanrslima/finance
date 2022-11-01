import { GuestLayout } from 'layouts/GuestLayout';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { RegistrationForm } from '../RegistrationForm';
import { Title, Subtitle, Body, Footer, FooterText, FooterButton } from './styles';

export function RegistrationPage(): ReactElement {
  const router = useRouter();

  const handleLogin = () => {
    router.push('login');
  };

  return (
    <GuestLayout>
      <Body>
        <Title as="h1">Crie uma conta</Title>
        <Subtitle>Comece uma nova vida financeira agora mesmo! </Subtitle>
        <RegistrationForm />
      </Body>
      <Footer>
        <FooterText>
          Já possui uma conta?
          <FooterButton onClick={handleLogin} type="button">
            Faça o login
          </FooterButton>
        </FooterText>
      </Footer>
    </GuestLayout>
  );
}
