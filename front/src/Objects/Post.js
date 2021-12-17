export default class Post {
    Usuario = null;
    Escrito = null;
    Multimedia = null;
    Muscles = 0;
    Existe = null;
    Id = null;
    Url = null;

    constructor (id, user, escrito, existe, url) {
      this.Url = url
      this.Usuario = user
      this.Escrito = escrito
      this.Id = id
      this.Existe = existe
    }

    getUsuario () {
      return this.Usuario
    }

    getEscrito () {
      return this.Escrito
    }

    getId () {
      return this.Id
    }

    getMuscles () {
      return this.Muscles
    }

    getFiles () {
      return this.Files
    }

    setEscrito (escrito) {
      this.Escrito = escrito
    }

    setMuscles (muscles) {
      this.Muscles = muscles
    }

    setFiles (content) {
      this.Multimedias = content
    }

    setUrl (content) {
      this.Url = content
    }

    getUrl () {
      return this.Url
    }

    getExiste () {
      return this.Existe
    }
}
