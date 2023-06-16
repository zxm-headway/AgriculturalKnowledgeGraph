<template>
  <div class="body">
    <div class="box">
      <form @submit.prevent="register">
        <h3>注册</h3>
        <div class="inputBox">
          <input
            v-model="account"
            id="account"
            name="account"
            type="text"
            required
          />
          <span id="account-mess">accountMessage</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input
            v-model="password"
            id="password"
            name="password"
            type="password"
            required
          />
          <span id="password-mess"> passwordMessage</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input
            v-model="repeatPassword"
            id="repeatpassword"
            name="repeatpassword"
            type="password"
            required
          />
          <span id="repeatpassword-mess">repeatPasswordMessage </span>
          <i></i>
        </div>
        <div class="inputBox">
          <input
            v-model="realname"
            id="realname"
            name="realname"
            type="text"
            required
          />
          <span id="realname-mess">RealName</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input v-model="phone" id="phone" name="phone" type="text" required />
          <span id="phone-mess">PhoneNumber</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input
            v-model="address"
            id="address"
            name="address"
            type="text"
            required
          />
          <span id="address-mess">Address</span>
          <i></i>
        </div>
        <div class="links">
          <a href="#">忘记密码?</a>
          <a @click.prevent="navigator_login()">回到登陆</a>
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { layer, layui } from "layui";

export default {
  name: "registerPages",
  data() {
    return {
      account: "",
      accountMessage: "",
      password: "",
      passwordMessage: "",
      repeatPassword: "",
      repeatPasswordMessage: "",
      realname: "",
      phone: "",
      address: "",
    };
  },
  methods: {
    register() {
      var userfalg = true;
      var pwdfalg = true;
      var repwdfalg = false;

      // 在后面与后端的环境配合重新写--------

      // 表单验证以及检测用户名是否存在
      if (this.account !== "") {
        var reg_username = /^\w{4,10}$/;
        let flag = reg_username.test(this.account);
        if (!flag) {
          this.accountMessage = "格式不正确！";
          alert("账号格式不正确！");
          userfalg = false;
        } else {
          axios.get("user/checkuser?account=" + this.account, (data) => {
            if (data === "no") {
              this.accountMessage = "用户名已存在！";
              alert("账号已存在！");
              userfalg = false;
            } else {
              this.accountMessage = "";
              userfalg = true;
            }
          });
        }
      }

      if (this.password !== "") {
        var reg_password = /^\w{6,12}$/;
        let flag = reg_password.test(this.password);
        if (!flag) {
          this.passwordMessage = "密码格式不正确！";
          alert("密码格式不正确！");
          pwdfalg = false;
        } else {
          this.passwordMessage = "";
          pwdfalg = true;
        }
      }

      var repeatpassword = this.repeatPassword;
      var password = this.password;
      let flag = repeatpassword === password;
      if (!flag) {
        this.repeatPasswordMessage = "两次密码不一致！";
        repwdfalg = false;
        alert("两次密码不一致！");
      } else {
        this.repeatPasswordMessage = "";
        repwdfalg = true;
      }

      this.$refs.form.validate((valid) => {
        if (valid) {
   
          // 表单验证以及检测用户名是否存在
          // ...

          if (userfalg && pwdfalg && repwdfalg) {
            // 触发注册操作
            var param = {
              account: this.account,
              password: this.password,
              realname: this.realname,
              phone: this.phone,
              address: this.faddress,
            };

            console.log(param);
            axios
              .post("user/regist", param)
              .then((response) => {
                if (response.data === 1) {
                  alert("恭喜你，注册成功！");
                  this.navigator_login()
                } else {
                  this.$message.error("哎呀出错了！请重试...");
                  // 把账号密码清空
                  this.account = "";
                  this.password = "";
                }
              })
              .catch((error) => {
                console.log(error);
                this.$message.error("请求出错，请重试...");
              });
          } else {
            this.$message.error("申请有误！请确认后再次提交！");
          }
        } else {
          this.$message.error("表单填写有误，请检查并修正错误！");
        }
      });
      },

    navigator_login() {
      this.$router.push("/login");
    },
  },
  mounted() {},
};
</script>

<style scoped>
/* 引入需要的字体 */
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'); */

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
  background-image: url("../../assets/image/background.png");
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
  padding: 10px 10px;
  background: #45f3ff;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  width: 100px;
  /* line-height: 30px; */
  text-align: center;
  margin-top: 10px;
}

input[type="submit"]:active {
  opacity: 0.8;
}
</style>
