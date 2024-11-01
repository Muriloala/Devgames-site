import React, { useState } from 'react';
import "./App.css";


const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setcpf] = useState('');
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [nascimento, setNascimento] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação, como enviar os dados para um servidor.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='cadastro-page'>
      <img src='./Imgs/Login-Cadastro/LogoCadastrarLogar.png' className='logo-cadastro-page'/>
      <form onSubmit={handleSubmit} className='formulario-cadastro'>
        <div>
          <input
            type="email"
            className='input-cadastro'
            placeholder='E-mail'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            className='input-cadastro mt-3'
            placeholder='Senha'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            className='input-cadastro mt-3'
            placeholder='CPF'
            id="number"
            value={cpf}
            onChange={(e) => setcpf(e.target.value)}
          />
        </div>
        <div>
          <input
            type="name"
            className='input-cadastro mt-3'
            placeholder='Nome Completo'
            id="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            className='input-cadastro mt-3'
            placeholder='Número celular'
            id="number"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div>
          <input
            type="date"
            className='input-cadastro mt-3'
            style={{color: '#867444'}}
            id="Nascimento"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
          />
        </div>
        <button type="submit" className='btn-cadastro-page'>Criar</button>
      </form>
      <p className='link-redirect mt-3'>Não tem uma conta? 
        <a className='link-destaque-redirect'>Cadastre-se</a>
      </p>
    </div>
  );
};

export default Cadastro;