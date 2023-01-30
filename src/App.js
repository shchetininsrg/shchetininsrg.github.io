
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="decor_sqr"></div>
      <div className="decor_sqr-2"></div>
      <div className="login">
        <h1 className="login__header">QUZIZY</h1>
        <p className="login__text">Создай аккаунт или войди в меня <br/> Это бесплатно</p>
        <div className="form">
          <input type="name" placeholder='Username' className="login__input login__input_username"></input>
          <input type="password" placeholder='Password' className="login__input login__input_password"></input>
          <button className="login__btn">Войти</button>
        <p className="login__text login__text_margin">Нет аккаунта? <a className="login__link" href="#">Зарегистрируйся</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
