import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-bottom: 25px;
  gap: 20px;
  padding: 15px;
  border: 2px solid #000;
  background-color: #f8f9fa;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const FormInput = styled.input`
  width: 260px;
  font-size: 22px;
  border-radius: 3px;
`;

export const Button = styled.button`
  color: #ffffff;
  background-color: #0d6efd;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  font-size: 16px;
  padding: 6px 10px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #0a58ca;
  }
`;
