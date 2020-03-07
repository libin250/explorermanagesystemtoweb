<template>
  <div class="index">

    <el-container>
      <!-- 顶部-->
      <el-header height="100px">
        <div class="itop_left">
          <h1 class="itop_left_h1">云南民大应院宿舍资源管理系统</h1>
        </div>
        <div class="itop_right">
          <div class="itop_right_1">
            <h4><a href="" target="rightFrame">修改密码&nbsp||</a></h4>
          </div>
          <div class="itop_right_1">
            <h4><a href="" target="_parent">&nbsp切换用户</a></h4>
          </div>
          <div class="itop_right_2">
            <h3>欢迎您&nbsp</h3>
            <input type="hidden" value="${sessionScope.user.username}"/>
          </div>
        </div>
      </el-header>


      <el-container>
        <!-- 左边-->
        <el-aside width="300px">Aside</el-aside>

        <el-container>
          <!--右边-->
          <el-main>Main</el-main>

          <!--底部-->
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style lang="less" scoped>
  .index {
  }

  .el-header {
    background: rgb(1, 165, 167);
  }

  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
  }

  body > .el-container {
    margin-bottom: 50px;
  }

  .el-container:nth-child(3) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .itop {
    height: 70px;
    width: 100%;
    background: rgb(1, 165, 167);
  }

  .itop_left {
    float: left;
    width: 350px;
    height: 70px;
    margin-top: 8px;
    margin-left: 1px;
  }

  .itop_left_h1 {
    float: left;
    width: 350px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-family: "Cambria Math";
    font-weight: bold;
    font-size: 24px;
  }

  .itop_right {
    float: right;
    width: 350px;
    height: 60px;
    color: #fff;
  }

  .itop_right a {
    text-decoration: none;
    color: #fff;
  }

  .itop_right a:hover {
    color: #dfffed;
  }


  .itop_right_1 {
    float: left;
    width: 80px;
    height: 50px;
    margin-top: 25px;
  }

  .itop_right_2 {
    float: left;
    width: 190px;
    height: 50px;
    margin-top: 22px;
    color: #1a5779;
  }


  .main {
    width: 100%;
    height: 100%;
    background: rgb(63, 62, 78);;
  }

  .main_left {
    height: 100%;
    width: 200px;
  }


  .li1 {
    list-style: none;
    width: 200px;
    height: 35px;
    font-size: 16pt;
    font-weight: bold;
    margin-left: 30px;
    margin-top: 5px;
    border-radius: 3px;
  }

  .li1:hover {
    background: rgb(1, 165, 167);
  }

  .li1 a {
    text-decoration: none;
    color: #f3fffd;
  }

  .li2 {
    list-style: none;
    width: 160px;
    height: 25px;
    font-size: 14pt;
    margin-left: 45px;
    margin-top: 5px;
    border-radius: 3px;
  }

  .li2:hover {
    background: rgb(1, 165, 167);
  }


  .li2 a {
    text-decoration: none;
    color: #f3fffd;
  }

  .sysmanger {
    display: none;
  }

  .selected {
    background: rgb(1, 165, 167);
  }

  .selected1 {
    background: rgb(63, 62, 78);
  }

</style>
