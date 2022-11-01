import { Button } from 'components/atoms/Button';
import { FormControl } from 'components/atoms/FormControl';
import { Grid } from 'components/atoms/Grid';
import { GridItem } from 'components/atoms/GridItem';
import { TextInput } from 'components/atoms/TextInput';
import { Form } from 'components/molecules/Form';
import { ReactElement } from 'react';
import * as yup from 'yup';
import { WrapperButtons } from './styles';

export function RegistrationForm(): ReactElement {
  const handleRegistration = (data) => {
    console.log(data);
  };

  const schema = yup.object().shape({
    firstname: yup.string().required('Informe seu nome'),
    lastname: yup.string().required('Informe seu sobrenome'),
    email: yup.string().email('Digite um e-mail válido').required('Informe seu email'),
    password: yup.string().required('Informe sua senha'),
  });
  return (
    <Form schema={schema} handleSubmit={handleRegistration}>
      {({ formState: { errors, isSubmitting } }) => (
        <Grid columns={12}>
          <GridItem colSpan={6}>
            <FormControl error={errors?.firstname?.message} name="firstname" label="Nome">
              <TextInput name="firstname" placeholder="Digite seu nome" type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl error={errors?.lastname?.message} name="lastname" label="Sobrenome">
              <TextInput name="lastname" placeholder="Digite seu sobrenome" type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl error={errors?.email?.message} name="email" label="E-mail">
              <TextInput name="email" placeholder="Digite seu e-mail" type="email" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={12}>
            <FormControl label="Senha" error={errors?.password?.message} name="password">
              <TextInput name="password" secureTextEntry placeholder="Digite sua senha" />
            </FormControl>
          </GridItem>
          <GridItem style={{ display: 'flex', justifyContent: 'center' }} colSpan={12}>
            <WrapperButtons>
              <Button schema="primary" type="submit">
                Cadastrar
              </Button>
            </WrapperButtons>
          </GridItem>
        </Grid>
      )}
    </Form>
  );
}
