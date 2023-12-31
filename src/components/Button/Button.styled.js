import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color:  ${props => props.theme.colors.violet};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color:  ${props => props.theme.colors.white};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
  0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    &:hover {background-color: ${props => props.theme.colors.violet}}
    &:focus {background-color: ${props => props.theme.colors.violet}}
`;
