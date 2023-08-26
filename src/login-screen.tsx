import './app.css';

function Login() {
  return (
    <div className='App-header'>
      <h1>Login</h1>
      <form action=''>
        <label htmlFor=''>E-mail: </label>
        <input type='email' placeholder='E-mail' />
        <label htmlFor=''>Senha: </label>
        <input type='password' placeholder='Senha' />
        <input type='submit' value={'Entrar'} />
      </form>
    </div>
  );
}

export default Login;
