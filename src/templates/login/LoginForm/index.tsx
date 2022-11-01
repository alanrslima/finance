import { Button } from 'components/atoms/Button';
import { FormControl } from 'components/atoms/FormControl';
import { Grid } from 'components/atoms/Grid';
import { GridItem } from 'components/atoms/GridItem';
import { TextInput } from 'components/atoms/TextInput';
import { Form } from 'components/molecules/Form';
import { ReactElement } from 'react';
import * as yup from 'yup';
import { WrapperButtons } from './styles';

export function LoginForm(): ReactElement {
  const handleSignIn = (data) => {
    console.log(data);
  };

  const handleForgotPassword = () => {};

  const schema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido').required('Informe seu email'),
    password: yup.string().required('Informe sua senha'),
  });
  return (
    <Form schema={schema} handleSubmit={handleSignIn}>
      {({ formState: { errors, isSubmitting } }) => (
        <Grid>
          <GridItem>
            <FormControl error={errors?.email?.message} name="email" label="E-mail">
              <TextInput name="email" placeholder="Digite seu e-mail aqui" type="email" />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl
              actionButton={{ label: 'Esqueci minha senha', onClick: handleForgotPassword }}
              label="Senha"
              error={errors?.password?.message}
              name="password"
            >
              <TextInput name="password" secureTextEntry placeholder="Digite sua senha aqui" />
            </FormControl>
          </GridItem>
          <WrapperButtons>
            <Button schema="primary" type="submit">
              Entrar
            </Button>
            <Button leftIcon="google">Entrar com Google</Button>
            <Button leftIcon="facebook">Entrar com Facebook</Button>
          </WrapperButtons>
        </Grid>
      )}
    </Form>
  );
}
