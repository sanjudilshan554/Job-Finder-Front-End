// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import './vendor/css/bootstrap.min.css';
import './vendor/css/owl.carousel.min.css';
import './vendor/css/flaticon.css';
import './vendor/css/price_rangs.css';
import './vendor/css/slicknav.css';
import './vendor/css/animate.min.css';
import './vendor/css/magnific-popup.css';
import './vendor/css/fontawesome-all.min.css';
import './vendor/css/themify-icons.css';
import './vendor/css/nice-select.css';
import './vendor/css/style.css'; 

import './vendor/js/vendor/modernizr-3.5.0.min.js'; 
import './vendor/js/vendor/jquery-1.12.4.min.js'; 
import './vendor/js/jquery.slicknav.min.js'; 
import './vendor/js/owl.carousel.min.js'; 
import './vendor/js/slick.min.js'; 
import './vendor/js/price_rangs.js'; 
import './vendor/js/animated.headline.js'; 
import './vendor/js/jquery.magnific-popup.js'; 
import './vendor/js/jquery.scrollUp.min.js'; 
import './vendor/js/jquery.nice-select.min.js'; 
import './vendor/js/jquery.sticky.js'; 
import './vendor/js/contact.js'; 
import './vendor/js/jquery.validate.min.js'; 
import './vendor/js/jquery.ajaxchimp.min.js'; 
import './vendor/js/plugins.js'; 
import './vendor/js/jquery.validate.min.js'; 

// import './vendor/js/wow.min.js'; 
// import './vendor/js/popper.min.js'; 
// import './vendor/js/bootstrap.min.js'; 
// import './vendor/js/jquery.form.jss'; 
// import './vendor/js/ail-script.js'; 
// import './vendor/js/jquery.form.jss'; 
// import './vendor/js/ail-script.js';  
// import './vendor/js/main.jss';   

const app = createApp(App)

app.use(router)

app.mount('#app')
