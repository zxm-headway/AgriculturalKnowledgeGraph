<template>
  <div>
    <!-- @mouseenter="isCollapse=true" @mouseleave="isCollapse=false" -->
    <el-container style="height: 100vh; " > 
      <!-- <el-aside width="8vh" v-if="sideOne">
        <i class="el-icon-d-arrow-right leftArrow" @click="methods_sideOne()"></i>
      </el-aside> -->
     
      <el-aside width="28vh" v-show="isCollapse">
        <div class="asideBox">
          <span class="userName"> 你好,王虎 </span>
          <!-- <i class="el-icon-d-arrow-left leftArrow"></i> -->
        </div>
        
        <el-menu default-active="1">
          <el-menu-item index="1">
            <!-- <i class="el-icon-setting"></i> -->
            <span slot="title">全国碳排放可视化</span>
          </el-menu-item>
          <el-menu-item index="2">
            <!-- <i class="el-icon-setting"></i> -->
            <span slot="title">西南地区碳汇可视化</span>
          </el-menu-item>
          <el-menu-item index="3">
            <!-- <i class="el-icon-setting"></i> -->
            <span slot="title">碳汇计算</span>
          </el-menu-item>
          <el-menu-item index="4">
            <!-- <i class="el-icon-setting"></i> -->
            <span slot="title">碳汇查询</span>
          </el-menu-item>
          <el-menu-item index="5">
            <!-- <i class="el-icon-setting"></i> -->
            <span slot="title">农业目录</span>
          </el-menu-item>
          <el-menu-item index="6">
            <!-- <i class="el-icon-setting"></i> -->
            <span slot="title">农作物分类查询</span>
          </el-menu-item>
          <el-menu-item index="7">
            <!-- <i class="el-icon-setting"></i> -->
            <span slot="title">农作物知识查询</span>
          </el-menu-item>
        </el-menu>

        <div class="useredit" style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px ;color: #fff;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看个人信息</el-dropdown-item>
              <el-dropdown-item>编辑</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </div>
      </el-aside>
      <el-container>
        
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #333;
  /* color: #333; */
  min-height: 99vh;
}
.el-menu {
  height: 85vh;
  background-color: #333;
  /* color: #fff; */

  /* padding: 5vh; */
}
.el-menu-item {
  height: 9vh;
  line-height: 9vh;
  text-align: center;
  color: #fff;

  /* padding: 5vh; */
}
.el-menu-item:hover{
  color: #333;
}
.asideBox{
  /* position: relative; */
  display: flex;
  justify-content:space-around;
  align-items:center;
  border-bottom: 2px solid #fff;
}
.userName {
  height: 10vh;
  line-height: 10vh;
  /* margin-right: 10px; */
  text-align: center;
  color: #fff;
  /* border-bottom: 1px solid #fff; */
  font-style: italic;
  font-size: larger;
  
}
.leftArrow{
  /* width: 10vh; */
  font-size:larger;
  color: #fff;
  text-align: right;
  width: 8vh;
  height: 8vh;
  line-height: 8vh;
  text-align: center;
  /* margin-left:5vh ; */
  /* float:; */
}
.leftArrow:hover{
  cursor: pointer;
  color: #b3c0d1;
}

.useredit{
  color: #fff;
  margin-right: 10px;
}
</style>

<script>
export default {
  name: "homePages",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      isCollapse: true,
    
      tableData: Array(20).fill(item),
    };
  },
  methods:{
    // methods_sideOne(){
    //   this.sideOne = true;
    //   this.sideTwo = false;
    // },
    // methods_sideTwo(){
    //   this.sideOne = false;
    //   this.sideTwo = true;
    // }
  }
};
</script>