import Multimedia from './Multimedia.js'
export default class Post {
    Usuario = null;
    Escrito = null;
    Multimedias = null;
    Muscles = 0;
    Id = null;

    constructor (id, user, escrito, existe) {
      this.Usuario = user
      this.Escrito = escrito
      this.Id = id
      this.Multimedias = new Multimedia(existe)
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
}
