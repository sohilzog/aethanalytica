import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userRegister } from '../apis/fetchApi';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 5rem;
  margin: 5rem;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 50%;
  padding: 5rem;
  background-color: #f8f9fa; /* Light background for contrast */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const Title = styled.h3`
  color: #343a40; /* Dark text color */
`;

const StyledForm = styled.form`
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ced4da; /* Light border */
  border-radius: 4px; /* Rounded corners */
`;

const Button = styled.button`
  background-color: #28a745; /* Bootstrap success color */
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838; /* Darker green on hover */
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #007bff; /* Bootstrap primary color */
  
  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  const navigate = useNavigate();
  const [regUser , setUserRegister] = useState({
    username: "",
    email: "",
    password: ""
  });

  const formSubmit = () => {
    const { username, email, password } = regUser ;
    if (!username || !email || !password) {
      toast.warning("Invalid Output");
    } else {
      userRegister(regUser );
      toast.success("User  Registered Successfully");
      navigate('/login');
    }
  };

  return (
    <>
    <Header/>
    <Container>
      <FormContainer>
        <Title>Register Your Account</Title>
        <StyledForm>
          <FormGroup>
            <Label>Username</Label>
            <Input type="text" placeholder="Username" onChange={(e) => setUserRegister({ ...regUser , username: e.target.value })} />
          </FormGroup>
          <FormGroup>
            <Label>Email address</Label>
            <Input type="email" placeholder="Enter email" onChange={(e) => setUserRegister({ ...regUser , email: e.target.value })} />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="Password" onChange={(e) => setUserRegister({ ...regUser , password: e.target.value })} />
          </FormGroup>
        </StyledForm>
        <div className='mt-5 d-flex justify-content-between'>
          <Button onClick={formSubmit}>Register</Button>
          <LinkStyled to={'/login'}>Already have an account? SignIn here</LinkStyled>
        </div>
      </FormContainer>
    </Container>
    </>
  );
}

export default Login;