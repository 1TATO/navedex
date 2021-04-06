import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const Button: React.FC <ButtonProps>= ({ children, color, ...rest }: ButtonProps) => {
  return (
    <Container color={color} {...rest}>
      <p>{children}</p>
    </Container>
  );
};

export default Button;
