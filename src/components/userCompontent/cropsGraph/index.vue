<template>

    <div class="container" style="padding: 0;overflow-x:hidden;overflow-y:hidden;">
      <hr>
    <div class="search" style="line-height: 30px;">
      <a style="padding: 0px;">@农作物知识查询</a>
      <hr>
      <div class="input-group col-md-12 " style="float: left;width: 550px;padding-right: 50px;">
        <form class="input-group-btn displaybox">
          <input class="form-control" style="width: 400px;margin-right: 20px;" type="text" v-model="keyword" placeholder="请输入节点关键字，按回车键" @keydown.enter="search">
          <button class="btn btn-primary" type="button" @click="search">查询</button>
        </form>

        <br/>
        <br />
        <div class="input-group col-md-12" style="width: 550px;padding-right: 50px; ">
        <table border="1" style="width: 550px;text-align: center;">
          <thead>
            <td>实体1</td>
            <td>关系</td>
            <td>实体2</td>
            <td>说明</td>
          </thead>
          <tbody>
            <tr v-for="item in searchResults" :key="item.cname">
              <td>{{ item.cname }}</td>
              <td>{{ item.rship }}</td>
              <td>{{ item.pname }}</td>
              <td>{{ item.property }}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      
    </div>
    <div class="" style="text-align: center;float:right;width:49%">
      <!-- <iframe :src="frameSource" id="mainFrame" name="mainFrame" width="100%" height="800px" frameBorder="0">请先输入关键字查询...</iframe> -->
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "cropsGraph",
  data() {
    return {
      keyword: '',
      searchResults: [],
    };
  },
  computed: {
    frameSource() {
      return `http://localhost:8081/neo4j/queryNodeAByKeyWord?keyword=${this.keyword}`;
    },
  },
  methods: {
    search() {
      if (this.keyword === '') {
        alert("查询条件不能为空");
        return;
      }
      
      // Perform AJAX request to retrieve search results
      // Replace the URL with your actual API endpoint
      axios.post(`/carbon/listByKeyWord?keyword=${this.keyword}`)
        .then((response) => {
          const result = response.data;
          if (result === '') {
            alert("查无相关信息");
            return;
          }
          this.searchResults = result;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
  html {
  font-size: 16px; /* 使用固定的字体大小，例如16px */
}

th {
  text-align: center;
}

.displaybox{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.container {
  /*background-color: rgba(155, 155, 155, 0.1);*/
}
</style>
