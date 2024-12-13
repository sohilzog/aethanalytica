import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLogin } from '../apis/fetchApi';
import { useNavigate } from 'react-router-dom';
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
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  color: #343a40;
  margin-bottom: 2rem;
`;

const StyledButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 1rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const [logData, setLogData] = useState({
    username: "",
    password: ""
  });

  const formSubmit = () => {
    const { username, password } = logData;
    if (!username || !password) {
      toast.warning("Invalid Output");
    } else {
      userLogin(logData).then((res) => {
        console.log(res.data.token);
        toast.success("Login Successful");
        navigate('/');
        sessionStorage.setItem("token", res.data.token);
      });
    }
  };

  return (
    <>
    <Header/>
    <Container>
      <FormContainer>
        <Title>Login To Your Account</Title>
        <form>
          <div className="mb-3">
            <label htmlFor="formBasicUsername">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              onChange={(e) => setLogData({ ...logData, username: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="formBasicPassword">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setLogData({ ...logData, password: e.target.value })}
            />
          </div>
        </form>
        <div>
          <StyledButton onClick={formSubmit}>Login</StyledButton>
          <StyledLink to={'/reg'}>New User? SignUp</StyledLink>
        </div>
      </FormContainer>
    </Container>
    </>
  );
};

export default Login;