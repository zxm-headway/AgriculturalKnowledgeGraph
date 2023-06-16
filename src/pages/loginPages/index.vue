<template>
  <!-- <div class="box" id="app"> -->
  <div class="body">
    <div class="box">
    <form @submit.prevent="handleSubmit">
      <h3>农作物和碳汇知识可视化系统</h3>
      <div class="inputBox">
        <input
          type="text"
          required="required"
          id="account"
          name="account"
          v-model="login.account"
        />
        <span>UserName</span>
        <i></i>
      </div>
      <div class="inputBox">
        <input
          type="password"
          id="password"
          name="password"
          required="required"
          v-model="login.password"
        />
        <span>Password</span>
        <i></i>
      </div>
      <div class="inputBox">
        <input
          type="text"
          id="input"
          required="required"
          ref="getValue"
          v-model="login.code"
        />
        <span>验证码</span>
        <i></i>
      </div>
      <div class="links1">
        <canvas
          id="myCanvas"
          :width="isShowCode ? 100 : 300"
          height="40"
          title="看不清，更换验证码"
          @click="clickCanvs()"
        ></canvas>
        <span style="color: black; font-style: italic" v-if="isShowCode"
          >看不清，更换验证码</span
        >
      </div>
      <div class="links">
        <a href="#">忘记密码?</a>
        <a @click.prevent="navigate_register()">进入注册界面</a>
      </div>
      <input
        type="submit"
        value="Login"
        class="submitBtn"
        v-on:click="login2()"
      />
    </form>
  </div>
  </div>

</template>

<script>
import Verification from "@/utils/captcha.js";
// import axios  from 'axios';
export default {
  name: "loginPages",
  components: {},
  data() {
    return {
      // code:'',
      isShowCode: false,
      login: {
        account: "",
        password: "",
        code: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // alert("提交成功");
    },
    login2() {
      if (this.login.account !== "") {
        if (this.login.password !== "") {
          if (this.login.code !== "") {
            if (this.login.code === this.$refs.getValue.value.toLowerCase()) {
              alert("登陆成功");

              if (this.login.account == "john") {
                //设置人物的角色为管理员 0
                sessionStorage.setItem("user_role", 0);
                this.navigate_users();
              } else {
                //设置人物的角色为用户
                sessionStorage.setItem("user_role", 1);
                this.navigate_users()();
              }
            } else {
              alert("验证码错误!");
              location.href = "login";
            }
          } else {
            alert("验证码为空！");
          }
        } else {
          alert("密码为空！");
        }
      } else {
        alert("账号为空！");
      }
    },

    //点击画板进行初始化
    clickCanvs() {
      console.log("进行了验证码初始化");
      const certify_code = new Verification();
      certify_code.init();
      this.isShowCode = true;
    },
    //用编程式路由导航进行跳转到register页面
    navigate_register() {
      this.$router.push({
        name: "register",
        params: {
          account: this.login.account,
        },
      }); // 在点击事件中导航到指定路径

      console.log(this.login.account);
    },
    //跳转到用户或者管理者页面
    navigate_users() {
      this.$router.push({
        name: "userhome",
        params: {
          account: this.login.account,
        },
      }); // 在点击事件中导航到指定路径

      // console.log(this.login.account)
    },
  },
  mounted() {},
};
</script>

<style  lang="less" scoped>
/* 引入需要的字体 */
// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  /*background: #23242a;*/
  background-image: url('../../assets/image/background.png');
}

.box {
  position: relative;
  width: 380px;
  height: 560px;
  border-radius: 8px;
  overflow: hidden;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

form {
  position: absolute;
  inset: 2px;
  background: #28292d;
  padding: 35px 40px;
  border-radius: 8px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  opacity: 85%;
  border: 3px solid #45f3ff;
}

h3 {
  color: #45f3ff;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.1em;
}

.inputBox {
  position: relative;
  width: 300px;
  margin-top: 30px;
  opacity: 85%;
}

.inputBox input {
  position: relative;
  width: 100%;
  padding: 5px 0px 2px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  color: #23242a;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
}

.inputBox span {
  position: absolute;
  left: 0;
  padding: 5px 0px 2px;
  pointer-events: none;
  font-size: 1em;
  color: #8f8f8f;
  letter-spacing: 0.05em;
  transition: 0.5s;
}

.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  color: #45f3ff;
  transform: translateX(0px) translateY(-34px);
  font-size: 0.75em;
}

.inputBox i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #45f3ff;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.5s;
  pointer-events: none;
  z-index: 9;
}

.inputBox input:valid ~ i,
.inputBox input:focus ~ i {
  height: 44px;
}

.links {
  display: flex;
  justify-content: space-between;
}

.links a {
  margin: 10px 0;
  font-size: 0.75em;
  color: #8f8f8f;
  text-decoration: beige;
}

.links a:hover,
.links a:nth-child(2) {
  color: #45f3ff;
}

input[type="submit"] {
  border: none;
  outline: none;
  padding: 11px 25px;
  background: #45f3ff;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  width: 100px;
  margin-top: 10px;
}

input[type="submit"]:active {
  opacity: 0.8;
}
</style>