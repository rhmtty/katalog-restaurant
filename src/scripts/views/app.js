import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import NavbarInitiator from '../utils/navbar-initiator';

class App {
  constructor({ button, drawer, content, header }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._header = header;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    NavbarInitiator.init({
      header: this._header,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
