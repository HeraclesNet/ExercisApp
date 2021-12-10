export default class Post {
    Usuario = null;
    Escrito = null;
    Id = null;

    constructor(user, escrito, id) 
    {
      this.Usuario = user;
      this.Escrito = escrito;
      this.Id = id;
    }
    getUsuario()
    {
      return this.Usuario;
    }
    getEscrito()
    {
      return this.Escrito;
    }        
}