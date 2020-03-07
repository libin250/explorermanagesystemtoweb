<template>
    <div class="index">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-main>Main</el-main>
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
  .el-header{
    height: 50px;
    width: 100%;
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
    line-height:100%;
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
</style>
