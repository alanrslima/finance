import { ReactElement } from 'react';
import { Form } from 'components/molecules/Form';
import { TextInput } from 'components/atoms/TextInput';
import { FormControl } from 'components/atoms/FormControl';
import { Grid } from 'components/atoms/Grid';
import { GridItem } from 'components/atoms/GridItem';
import { ColorPicker } from 'components/molecules/ColorPicker';
import { items } from 'components/molecules/ColorPicker/items.config';

export function AccountsForm(): ReactElement {
  const onSubmit = () => {};

  return (
    <Form handleSubmit={onSubmit}>
      {({ formState: { errors, isSubmitting } }) => {
        return (
          <Grid columns={12}>
            <GridItem colSpan={12}>
              <FormControl error={errors?.breaker?.message} name="name" label="Nome">
                <TextInput placeholder="Ex: Carteira, Poupança, etc" name="name" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={12}>
              <FormControl error={errors?.breaker?.message} name="initial_value" label="Valor inicial">
                <TextInput pattern="\d*" placeholder="R$ 0,00" type="number" name="initial_value" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={12}>
              <FormControl error={errors?.breaker?.message} name="color" label="Cor">
                {/* <TextInput name="color" /> */}
                <ColorPicker name="color" options={items} />
              </FormControl>
            </GridItem>

            {/* <GridItem colSpan={12}>
              <FormActions>
                <Button wide color="primary" type="submit" isLoading={isSubmitting}>
                  Save
                </Button>
                <Button type="button" wide onClick={onCancel} isLoading={isSubmitting}>
                  Cancel
                </Button>
              </FormActions>
            </GridItem> */}
          </Grid>
        );
      }}
    </Form>
  );
}
