import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';
import './views/templates/component/hero-section';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#maincontent'),
  header: document.querySelector('header'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
