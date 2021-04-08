import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ children, name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);
  
  return (
    <Container isErrored={!!error}>
      <label>{rest.placeholder}</label>
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error}
    </Container>
  );
}

export default Input;