import './App.scss';
import RegisterForm from './components/RegisterForm/RegisterForm';
import React from 'react';
import { IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import French from './lang/fr.json';
import English from './lang/en.json';

const locale = navigator.language;
let defaultMessages = Spanish;
switch (locale) {
  case 'fr-FR':
    defaultMessages = French;
    break;
  case 'en-EN':
    defaultMessages = English;
    break;
  case 'es-ES':
    defaultMessages = Spanish;
    break;
  default:
    defaultMessages = English;
}

function App() {
  const [messages, setMessages] = React.useState(defaultMessages);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className='App'>
        <RegisterForm></RegisterForm>
      </div>

      <h2>Selector de idioma</h2>
      <button onClick={() => setMessages(Spanish)}>Spanish</button>
      <button onClick={() => setMessages(English)}>English</button>
      <button onClick={() => setMessages(French)}>French</button>
    </IntlProvider>
  );
}

export default App;
