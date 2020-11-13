import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colours.red};
`;

function Button() {
  return <StyledButton>Click me!</StyledButton>;
}

export default Button;
