export class Router {

  routes = {}

  add(routeName, page){
    this.routes[routeName] = page;
  }

  route(event){
    event = event || window.event; //Caso não tenha evento, pega o da janela
    event.preventDefault();
  
    //Salva no Histórico do navegador a página clicada, simulando uma visita que na prática não aconteceu
    window.history.pushState({},"",event.target.href); 
  
    this.handle();
  }

  handle(){
    /*
      Desestruturando o objeto, ou poderia usa da maneira abaixo
        const pathname = window.location.pathname;
    */
    const {pathname} = window.location;
    const route = this.routes[pathname] || this.routes[404];
  
    /*
    Evento assíncrono que 
      - 1º pega um arquivo
      - 2º Função que retorna o conteúdo do arquivo lido
      - 3º Função que executa o que fará com o conteúdo lido
    */
    fetch(route)
    .then(function(data){
      return data.text();
    })
    .then(function(html){
      document.querySelector('#app').innerHTML = html
    });
  }
}