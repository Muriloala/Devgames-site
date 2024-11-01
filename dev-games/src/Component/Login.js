import React, { useState } from 'react';
import "./App.css";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação, como enviar os dados para um servidor.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='login-page'>
      <img src='./Imgs/Login-Cadastro/LogoCadastrarLogar.png' className='logo-login-page'/>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            className='input-login'
            placeholder='E-mail'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            className='input-login mt-3'
            placeholder='Senha'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className='btn-login-page'>Entrar</button>
      </form>
      <p className='link-redirect mt-3'>Já possui conta?
        <a className='link-destaque-redirect'>Entre</a>
      </p>
    </div>
  );
};

export default Login;