import { forwardRef, ReactElement } from 'react';
import { Props } from './types';
import { Container, SpinnerContainer, WrapperLeftIcon, Spinner } from './styles';
import { Icon } from '../Icon';

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, isLoading, leftIcon, disabled, ...rest }, ref): ReactElement => {
    return (
      <Container {...rest} disabled={disabled || isLoading} ref={ref}>
        {leftIcon && (
          <WrapperLeftIcon>
            <Icon name={leftIcon} size={23} />
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
  }
);

Button.defaultProps = {
  type: 'button',
};
