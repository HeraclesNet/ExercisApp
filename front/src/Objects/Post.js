export default class Post {
    Usuario = null;
    Escrito = null;
    Multimedia = null;
    Muscles = 0;
    Existe = null;
    Id = null;
    Url = null;
    UploadDate = null;
    Liked = null;
    MediaType = null;
    NickName = null;
    // bool que determina el like
    // nickname

    constructor (id, user, escrito, existe) {
      this.Usuario = user
      this.Escrito = escrito
      this.Id = id
      this.Existe = existe
    }

    getUser () {
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

    getDate () {
      return this.UploadDate
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

    setMediaType (mediatype) {
      this.MediaType = mediatype
    }

    setLiked (liked) {
      this.Liked = liked
    }

    setNickName (nickname) {
      this.NickName = nickname
    }

    getUrl () {
      return this.Url
    }

    getExiste () {
      return this.Existe
    }

    getLiked () {
      return this.Liked
    }

    getNickName () {
      return this.NickName
    }

    getMediaType () {
      return this.MediaType
    }
}
