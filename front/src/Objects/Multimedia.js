export default class Post {
    Existe = null;
    Nombre = null;
    Url = null;
    Tipo = null;
    Size = null;

    constructor () {
    }

    getExiste () {
      return this.Existe
    }

    getUrl () {
      return this.Url
    }

    setUrl (url) {
      this.Url = url
    }
}
