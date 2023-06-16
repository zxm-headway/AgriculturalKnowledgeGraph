<template>
  <div class="root">
    <nav id="navbar">
      <dd v-if="user_role == 1">
        <ul class="navbar-items flexbox-col">
          <li class="navbar-logo flexbox-left">
            <span class="admin">{{ user_name }}</span
            ><span class="admin">,你好</span>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_carbonMap()"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              <span class="link-text">全国碳排放可视化</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_carbonSink()"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="home-outline"></ion-icon>
              </div>
              <span class="link-text">西南地区碳汇可视化</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_calculate()"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="folder-open-outline"></ion-icon>
              </div>
              <span class="link-text">碳汇计算</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_carbonGraph()"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="pie-chart-outline"></ion-icon>
              </div>
              <span class="link-text">碳汇查询</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left" @click="navigate_xtree()">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="people-outline"></ion-icon>
              </div>
              <span class="link-text">农业目录</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_knowlegeGraph()"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </div>
              <span class="link-text">农作物分类查询</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_cropsGraph"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">农作物知识查询</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left" @click="navigate_login">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">返回登录</span>
            </a>
          </li>
        </ul>
      </dd>

      <dd v-if="user_role == 0">
        <ul class="navbar-items flexbox-col">
          <li class="navbar-logo flexbox-left">
            <span class="admin">{{ user_name }}</span
            ><span class="admin">,你好</span>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_catalogue"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">农业目录管理</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left" @click="navigate_carbon">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">碳汇数据管理</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_knowledege"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">农作物分类管理</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left" @click="navigate_carbon">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">农作物知识管理</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left" @click="navigate_user">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">用户管理</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left" @click="navigate_login">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">返回登录</span>
            </a>
          </li>
        </ul>
      </dd>
      
    </nav>

    <main id="mainFrame" name="mainFrame" width="100%" height="100%" class="flexbox-col">
      <!-- <h2 text-align="center">欢迎进入农作物碳汇分析及可视化系统!</h2> -->
      <keep-alive><router-view></router-view></keep-alive>
      <!-- <iframe src=""  id="mainFrame" name="mainFrame" width="100%" height="100%" frameBorder="0"></iframe> -->
    </main>
  </div>
</template>

<script>
export default {
  name: "usersPages",
  components: {},
  data() {
    return {
      user: {},
      user_name: "user",
      user_role: sessionStorage.getItem("user_role"),
    };
  },
  methods: {
    //路由跳转
    navigate_carbonMap() {
      // navigate_carbonMap(this);
      console.log("进行了跳转");
      this.$router.push("/userhome/carbonMap");
      // this.$router.go(0);
      // window.location.reload();
    },

    navigate_carbonSink() {
      console.log("carbinsink页面跳转");
      this.$router.push("/userhome/carbonSink");
      // this.$router.go(0);
    },
    navigate_calculate() {
      console.log("calculate页面跳转");
      this.$router.push("/userhome/calculate");
    },
    navigate_carbonGraph() {
      console.log("carbinGraph页面跳转");
      this.$router.push("/userhome/carbonGraph");
    },
    navigate_xtree() {
      console.log("carbinGraph页面跳转");
      this.$router.push("/userhome/xtree");
    },
    navigate_knowlegeGraph() {
      console.log("knowlegeGraph");
      this.$router.push("/userhome/knowledgeGraph");
    },
    navigate_cropsGraph() {
      console.log("cropsGraph");
      this.$router.push("/userhome/cropsGraph");
    },
    navigate_login() {
      console.log("login");
      this.$router.push("/login");
    },
    navigate_catalogue() {
      console.log("catalogue");
      this.$router.push("/userhome/catalogue");
    },
    navigate_crops() {
      console.log("crops");
      this.$router.push("/userhome/crops");
    },
    navigate_knowledege() {
      console.log("knowlege");
      this.$router.push("/userhome/knowledege");
    },
    navigate_carbon() {
      console.log("carbon");
      this.$router.push("/userhome/carbon");
    },
    navigate_user() {
      console.log("user");
      this.$router.push("/userhome/user");
    },
  },
};
</script>

<style scoped lang="less"> 


.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .navbar-toggler {
  top: 0.25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}

</style>

<style lang="less" scoped>
@base-font-size: 16px;
/* //indextext.css文件代码 */

.root {
  --primary: 237, 94%, 81%;
  --background: 266, 16%, 92%;
  --background-secondary: 256, 12%, 12%;
  --background-secondary-dark: 256, 10%, 10%;
  --background-secondary-light: 257, 11%, 16%;
  --text-primary: 0, 0%, 0%;
  /* Colors */
  --black: 0, 0%, 0%;
  --white: 0, 0%, 100%;
  --quite-gray: 0, 0%, 50%;
  --grooble: 10, 28%, 93%;
  /* Sizes */
  --heading-large: 5.6 * @base-font-size;
  --heading-medium: 3.6 * @base-font-size;
  --heading-small: 2.4 * @base-font-size;
  --paragraph: 1.11 * @base-font-size;
  --navbar-buttons: 2.4 * @base-font-size;
  /* misc */
  --transition-main: 0.175, 0.685, 0.32;
  /* Fonts */
  --font-main: "Poppins";
}

*, *::before, *::after {
    box-sizing: inherit;
}
html, body {
    margin: 0;
    width: 100%;
    color: hsl(var(--text-primary));
    font-family: var(--font-main);
    background-color: hsl(var(--background));
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    box-sizing: border-box;
}

/* Headings */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
/* Font Size */
h1 {
  font-size: var(--heading-large);
}
h2 {
  font-size: var(--heading-medium);
}
h3 {
  font-size: var(--heading-small);
}
h4 {
  font-size: calc(var(--heading-small) - 0.2 * @base-font-size);
}
h5 {
  font-size: calc(var(--heading-small) - 0.4 * @base-font-size);
}
h6 {
  font-size: calc(var(--heading-small) - 0.6 * @base-font-size);
}
/* Font Weight */
h1,
h2 {
  font-weight: 900;
}
h3,
h4,
h5,
h6 {
  font-weight: 800;
}
/* Paragraphs */
p {
  margin: 0;
  font-size: var(--paragraph);
}
/* Links */
a {
  color: hsla(var(--primary), 1);
  font-size: var(--paragraph);
  text-decoration: underline;
}
a:visited {
  color: hsla(var(--primary), 0.5);
}

@base-font-size: 16px;

/* =========
    Buttons
   ========= */

button {
  padding: 0.8 * @base-font-size 1.2 @base-font-size;
  border: 1px solid hsl(var(--black));
  background-color: hsl(var(--background));
  font-size: var(--paragraph);
  cursor: pointer;
  outline: none;
}
button:focus {
  box-shadow: 0 0 0 2px hsl(var(--black)), 0 0 0 3px hsl(var(--white));
  border: 1px solid transparent;
}

/* =======
    Lists
   ======= */

ul,
ol {
  margin: 1 * @base-font-size 0;
}

/* =======
    Forms
   ======= */

form {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0.5 * @base-font-size 0;
  border: none;
}
input {
  padding: 0.8 * @base-font-size 1.2 * @base-font-size;
  font-size: var(--paragraph);
  background-color: hsl(var(--grooble));
  border: 2px solid hsl(var(--grooble));
  outline: none;
}
textarea {
  padding: 0.8 * @base-font-size 1.2 * @base-font-size;
  font-size: var(--paragraph);
  font-family: var(--font-main);
  background-color: hsl(var(--grooble));
  border: 2px solid hsl(var(--grooble));
  outline: none;
}
input,
textarea {
  transition: all 0.2s ease-in-out;
}
input:hover,
input:focus,
textarea:hover,
textarea:focus {
  box-shadow: 0 0 0 2px hsl(var(--black)), 0 0 0 3px hsl(var(--white));
  border: 2px solid transparent;
}
select {
  padding: 0.8 * @base-font-size 1.2 * @base-font-size;
  border: 1px solid hsl(var(--black));
  font-size: var(--paragraph);
  outline: none;
}

/* =========
    Classes
   ========= */

/* ================
    Global classes
   ================ */

/* =========
    Flexbox
   ========= */

.flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flexbox-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.flexbox-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
/* Columns */
.flexbox-col {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.flexbox-col-left {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
}
.flexbox-col-left-ns {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
}
.flexbox-col-right {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
}
.flexbox-col-start-center {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}
/* Spacings */
.flexbox-space-bet {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* =========
    Classes
   ========= */

.view-width {
  width: 70%;
}

/* ========
    Navbar
   ======== */

#navbar {
  top: 0;
  padding: 0;
  width: 5 * @base-font-size;
  height: 100vh;
  position: fixed;
  background-color: hsl(var(--background-secondary));
  transition: width 0.35s cubic-bezier(var(--transition-main), 1);
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1000;
}
#navbar:hover {
  width: 18 * @base-font-size;
}
#navbar::-webkit-scrollbar-track {
  background-color: hsl(var(--background-secondary));
}
#navbar::-webkit-scrollbar {
  width: 8px;
  background-color: hsl(var(--background-secondary));
}
#navbar::-webkit-scrollbar-thumb {
  background-color: hsl(var(--primary));
}
.navbar-items {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
/* Navbar Logo */
.navbar-logo {
  margin: 0 0 3 * @base-font-size 0;
  width: 100%;
  height: 5 * @base-font-size;
  background: hsl(var(--background-secondary-dark));
}
.navbar-logo > .navbar-item-inner {
  width: calc(5 * @base-font-size - 8px);
}
.navbar-logo > .navbar-item-inner:hover {
  background-color: transparent;
}
.navbar-logo > .navbar-item-inner > svg {
  height: 2 * @base-font-size;
  fill: hsl(var(--white));
}
/* Navbar Items */
.navbar-item {
  padding: 0 0.5 * @base-font-size;
  width: 100%;
  cursor: pointer;
}
.navbar-item-inner {
  padding: 1 * @base-font-size 0;
  width: 100%;
  position: relative;
  color: hsl(var(--quite-gray));
  border-radius: 0.25 * @base-font-size;
  text-decoration: none;
  transition: all 0.2s cubic-bezier(var(--transition-main), 1);
}
.navbar-item-inner:hover {
  color: hsl(var(--white));
  background: hsl(var(--background-secondary-light));
  box-shadow: 0 17px 30px -10px hsla(var(--black), 0.25);
}
.navbar-item-inner-icon-wrapper {
  width: calc(5 * @base-font-size - 1 * @base-font-size - 8px);
  position: relative;
}
.navbar-item-inner-icon-wrapper ion-icon {
  position: absolute;
  font-size: calc(var(--navbar-buttons) - 1 * @base-font-size);
}
.admin {
  font-family: "Lucida Calligraphy", cursive, serif, sans-serif;
  color: white;
  margin: 0;
  width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.35s cubic-bezier(var(--transition-main), 1);
  overflow: hidden;
  opacity: 0;
}
#navbar:hover .admin {
  width: calc(100% - calc(5 * @base-font-size - 8px));
  opacity: 1;
}
.link-text {
  margin: 0;
  width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.35s cubic-bezier(var(--transition-main), 1);
  overflow: hidden;
  opacity: 0;
  font-family: "Lucida Calligraphy", cursive, serif, sans-serif;
  color: white;
}
#navbar:hover .link-text {
  width: calc(100% - calc(5 * @base-font-size - 8px));
  opacity: 1;
}

/* ======
    Main
   ====== */

#main {
  margin: 0 0 0 5 * @base-font-size;
  /*min-height: 150vh;*/
  height: 700px;
}
#main > h2 {
  width: 80%;
  max-width: 80%;
}
#main > p {
  width: 80%;
  max-width: 80%;
}

/* =============
    ::Selectors
   ============= */

/* Selection */
::selection {
  color: hsl(var(--white));
  background: hsla(var(--primary), 0.33);
}
/* Scrollbar */
::-webkit-scrollbar-track {
  background-color: hsl(var(--background));
}
::-webkit-scrollbar {
  width: 8px;
  background-color: hsl(var(--background));
}
::-webkit-scrollbar-thumb {
  background-color: hsl(var(--primary));
}

/* ===============
    5. @keyframes
   =============== */

/* ==============
    @media rules
   ============== */

@media only screen and (max-width: 1660px) {
  :root {
    /* Sizes */
    --heading-large: 5.4 * @base-font-size;
    --heading-medium: 3.4 * @base-font-size;
    --heading-small: 2.2 * @base-font-size;
  }
}
@media only screen and (max-width: 1456px) {
  :root {
    /* Sizes */
    --heading-large: 5.2 * @base-font-size;
    --heading-medium: 3.2 * @base-font-size;
    --heading-small: 2 * @base-font-size;
  }
  .view-width {
    width: 80%;
  }
}
@media only screen and (max-width: 1220px) {
  .view-width {
    width: 70%;
  }
}
@media only screen and (max-width: 1024px) {
  :root {
    /* Sizes */
    --heading-large: 5 * @base-font-size;
    --heading-medium: 3 * @base-font-size;
    --heading-small: 1.8 * @base-font-size;
  }
  .view-width {
    width: 75%;
  }
}
@media only screen and (max-width: 756px) {
  :root {
    /* Sizes */
    --heading-large: 4 * @base-font-size;
    --heading-medium: 2.6 * @base-font-size;
    --heading-small: 1.6 * @base-font-size;
    --paragraph: 1 * @base-font-size;
    --navbar-buttons: 2.2 * @base-font-size;
  }
  .view-width {
    width: calc(100% - 5 * @base-font-size);
  }
}
@media only screen and (max-width: 576px) {
  .view-width {
    width: calc(100% - 3 * @base-font-size);
  }
}
@media only screen and (max-width: 496px) {
}
</style>