import { GuestLayout } from 'layouts/GuestLayout';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { LoginForm } from '../LoginForm';
import { Title, Subtitle, Body, Footer, FooterText, FooterButton } from './styles';

export function LoginPage(): ReactElement {
  const router = useRouter();

  const handleRegistration = () => {
    router.push('registration');
  };

  return (
    <GuestLayout>
      <Body>
        <Title as="h1">Seja bem vindo(a)!</Title>
        <Subtitle>Para entrar, digite seus dados abaixo</Subtitle>
        <LoginForm />
      </Body>
      <Footer>
        <FooterText>
          Não tem uma conta? <FooterButton onClick={handleRegistration}>Cadastre-se</FooterButton>
        </FooterText>
      </Footer>
    </GuestLayout>
  );
}
