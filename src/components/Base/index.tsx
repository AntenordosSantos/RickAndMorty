import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
padding: 20px;
border-bottom-width: 1px;
border-color: #8B0000; 
`;

const Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 16px;
`;

interface BaseProps {
  text: string;
}

export default function Base({ text }: BaseProps) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}
