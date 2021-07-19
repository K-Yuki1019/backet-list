import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store.js";
import firebase from "firebase";

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyD1MbhRIeaeqS3wWpp9It--yDlawDee7xc",
  authDomain: "backet-list.firebaseapp.com",
  projectId: "backet-list",
  storageBucket: "backet-list.appspot.com",
  messagingSenderId: "948472925761",
  appId: "1:948472925761:web:1b219e08c7b97505a000c0",
  measurementId: "G-JN1H0SH39K",
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
