import { forwardRef, ReactElement } from 'react';
import { Props } from './types';
import { Container, SpinnerContainer, WrapperLeftIcon, Spinner } from './styles';
import { Icon } from '../Icon';

export const Button = forwardRef<HTMLButtonElement, Props>(({ children, isLoading, ...props }, ref): ReactElement => {
  return (
    <Container {...props} disabled={props.disabled || isLoading} ref={ref}>
      {props.leftIcon && (
        <WrapperLeftIcon>
          <Icon name={props.leftIcon} size={23} />
        </WrapperLeftIcon>
      )}

      {isLoading ? (
        <SpinnerContainer>
          <Spinner thickness="3px" />
        </SpinnerContainer>
      ) : (
        children
      )}
    </Container>
  );
});

Button.defaultProps = {
  type: 'button',
};
