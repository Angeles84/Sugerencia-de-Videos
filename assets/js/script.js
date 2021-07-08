const getUrlyId = (() => {
  let funcionPrivada = (url,id) =>{
    //mostrar video en HTML 
    let ids = document.getElementById(id);        
    if (ids) {
      ids.setAttribute("src", url);
    } else {
      console.warn("El elemento no existe ene el DOM");
    }          
  };  //retornar función pública forma 1
  return{
    funcionPublica: (url,id) => {
      funcionPrivada (url,id)
    }
  }
  //retornar función pública forma 2
  //const funcionPlubica = (url, id) => funcionPrivada(url, id); 
  //return funcionPlubica;

  // ó funcionPrivada(url, id);
})();

class Multimedia {
  #url;
  constructor(url) {
    this.#url = url;
  }

  getUrl(){
    return this.#url;
  }
  setUrl(nuevaUrl) {
    this.#url = nuevaUrl;
  }

  setInicio(){
    return `Este método es para realizar un cambio en la URL del video”.`
  }
}

class Reproductor extends Multimedia {
  #id;
  constructor(url, id) {
    super(url);
    this.#id = id;
  }
  
  playMultimedia() {
    getUrlyId.funcionPublica(this.getUrl(), this.#id);   //para función pública forma 2 getUrlyId(this.url, this.id);
  } 
  setInicio(time = 0){
    const inicio = document.getElementById(this.#id);
    if (!inicio) return;
    inicio.setAttribute("src",`${this.getUrl()}?start=${time}`)
  }
}

const musica = new Reproductor("https://www.youtube.com/embed/_8CdAO8n7sw", "musica" );
const peliculas = new Reproductor("https://www.youtube.com/embed/M3Io2hVVNwQ",  "peliculas");
const series = new Reproductor("https://www.youtube.com/embed/q9Evo8pJTV0", "series" )
musica.playMultimedia();
musica.setInicio(5);
peliculas.playMultimedia();
series.playMultimedia();



