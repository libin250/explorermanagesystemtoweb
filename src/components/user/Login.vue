<template>
  <div class="Login">


    <!--logo-->
    <div class="logo">
      <div style="height: 200px"></div>
      <img src="../../assets/logo.png" width="90px">
      <h3>资源管理系统</h3>
    </div>

    <!--表单-->
    <div class="user">
      <el-form ref="user" :model="user" label-width="80px">

        <el-form-item label="用户名">
          <el-input v-model="user.userName" placeholder="用户名" maxlength="20"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="user.passWord" maxlength="20" placeholder="密码" type="password"></el-input>
        </el-form-item>

        <el-button type="primary" @click="login(user.userName,user.passWord)">登录</el-button>
        <el-button @click="clear">取消</el-button>
      </el-form>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return { //存放对象，全局对象
        user: {
          userName: '',
          passWord: '',
        }
      }
    },
    mounted() {  //  加载时候的方法

    },
    methods: { //通过事件触发的方法

      //登录
      login(userName, passWord) {
        if(!userName.length > 0) {
          alert("请输入用户名")
        } else if(!passWord.length > 0) {
          alert("请输入密码")
        } else {
          this.http.post(this.ports.user.userlogin, {
            userName: userName,
            passWord: passWord
          }, res => {
            if(res.data.code === 200) {
              this.$router.replace("/")
            } else {
              alert("用户名或密码错误")
            }
          })
        }
      },

      //取消按钮
      clear() {
        this.user.userName = "";
        this.user.passWord = "";
      }

    }
  }
</script>

<style scoped>
  .Login {
    padding: 0;
    margin: 0;
  }

  .user {
    width: 400px;
    margin: 0 auto;
    height: 100%
  }

  .logo {
    margin: 0 auto;
    margin-bottom: 5px;
    text-align: center;
  }


</style>
