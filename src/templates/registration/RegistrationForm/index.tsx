import { Button } from 'components/atoms/Button';
import { FormControl } from 'components/atoms/FormControl';
import { Grid } from 'components/atoms/Grid';
import { GridItem } from 'components/atoms/GridItem';
import { TextInput } from 'components/atoms/TextInput';
import { Form } from 'components/molecules/Form';
import { errorHandler } from 'lib/errorHandler';
import { messageHandler } from 'lib/messageHandler';
import { showMessage } from 'lib/messages';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useCreateUser } from 'services/user/useCreateUser';
import * as yup from 'yup';
import { WrapperButtons } from './styles';

export function RegistrationForm(): ReactElement {
  const createUser = useCreateUser();
  const router = useRouter();

  const handleRegistration = async (values, { setError }) => {
    try {
      const { data } = await createUser.mutateAsync(values);
      messageHandler(data);
      router.push({ pathname: 'login', query: { email: values.email } });
    } catch (err) {
      errorHandler(err, null, { setError });
    }
  };

  const schema = yup.object().shape({
    firstName: yup.string().required('Informe seu nome'),
    lastName: yup.string().required('Informe seu sobrenome'),
    email: yup.string().email('Digite um e-mail válido').required('Informe seu email'),
    password: yup.string().required('Informe sua senha'),
  });
  return (
    <Form schema={schema} handleSubmit={handleRegistration}>
      {({ formState: { errors, isSubmitting } }) => (
        <Grid columns={12}>
          <GridItem colSpan={6}>
            <FormControl error={errors?.firstName?.message} name="firstName" label="Nome">
              <TextInput name="firstName" placeholder="Digite seu nome" type="text" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl error={errors?.lastName?.message} name="lastName" label="Sobrenome">
              <TextInput name="lastName" placeholder="Digite seu sobrenome" type="text" />
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
              <Button isLoading={isSubmitting} schema="primary" type="submit">
                Cadastrar
              </Button>
            </WrapperButtons>
          </GridItem>
        </Grid>
      )}
    </Form>
  );
}
