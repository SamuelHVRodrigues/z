import './app.css';
import ValidateLogin from './validators';

function Login() {
  return (
    <div className='App-header'>
      <h1>Login</h1>
      <form onSubmit={ValidateLogin}>
        <label>E-mail: </label>
        <input type='email' name='email' placeholder='E-mail' />
        <label>Senha: </label>
        <input type='password' name='password' placeholder='Senha' />
        <input type='submit' value={'Entrar'} />
      </form>
    </div>
  );
}

export default Login;
