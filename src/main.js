import { createApp } from "vue";
import App from "./App.vue";
import HomePage from "./components/body/HomePage.vue";
import PageHeader from "./components/header/PageHeader";
import { createWebHistory, createRouter } from "vue-router";
import AboutMe from "./components/body/AboutMe.vue";

const app = createApp(App);

const routes = [{ path: "/about", component: AboutMe }];

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.component("home-page", HomePage);
app.component("page-header", PageHeader);
app.use(router);

app.mount("#app");
