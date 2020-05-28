import styled from 'styled-components';

export default styled.input`
  background: #132b47;
  border: 1px solid #4c5f75;
  border-radius: 3px 0 0 3px;
  height: 40px;
  width: 70%;
  max-width: 300px;
  padding-left: 12px;
  font-weight: 300;
  font-size: 0.875em;
  color: rgb(187, 194, 203);
  border-right: none;
  &::placeholder {
    color: rgb(187, 194, 203);
  }
  &:focus {
    outline: none;
  }
`;
