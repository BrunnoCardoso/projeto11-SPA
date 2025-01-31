import { Router } from './router.js';

// const routes = {
//   '/': '/pages/home.html',
//   '/about': '/pages/about.html',
//   '/contact': '/pages/contact.html',
//   404: '/pages/404.html'
// }
const router = new Router();
router.add('/', '/pages/home.html');
router.add('/about', '/pages/about.html');
router.add('/contact', '/pages/contact.html');
router.add(404, '/pages/404.html');

router.handle(); //Para iniciar a Home

//Grava as páginas clicadas no histórico do navegador
window.onpopstate = function(){
  router.handle();
}

window.route = function(){
  router.route();
}