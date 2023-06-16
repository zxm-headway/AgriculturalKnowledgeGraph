<template>
  <div
    class="container"
    style="padding: 0; overflow-x: hidden; overflow-y: hidden"
  >
  <hr>
    <div class="search" style="line-height: 30px">
      <a style="padding: 10px">@农作物目录管理</a>
      <a
        style="float: right"
        th:href="@{/catalogue/add}"
        class="btn btn-success"
        th:if="${session.user.role!=2}"
        >添加</a
      >
      <div
        class="input-group col-md-12"
        style="float: right; width: 350px; padding-right: 50px"
      >
        <form class="input-group-btn" action="list">
          <input
            class="form-control"
            type="text"
            name="keyword"
            placeholder="请输入关键字，按回车键"
          />

        </form>
        <button class="btn btn-primary" type="submit" id="search">
            查询
          </button>
      </div>
    </div>
    <div class="width:100%" style="text-align: center">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>名称</th>
            <th>链接</th>
            <th>父节点ID</th>
            <th th:if="${session.user.role==0}">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr th:each="item : ${items}">
            <th scope="row" th:text="${itemStat.index + 1}">1</th>
            <td th:text="${item.title}"></td>
            <td
              th:text="${item.url}"
              style="max-width: 80px; overflow-x: hidden"
            ></td>
            <td th:text="${item.pid}"></td>
            <td th:if="${session.user.role!=2}">
              <a
                class="btn btn-sm btn-warning"
                th:href="@{/catalogue/update(id=${item.id})}"
                >修改</a
              >
              <a
                class="btn btn-sm btn-danger"
                th:href="@{/catalogue/delete(id=${item.id})}"
                >删除</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import "@/assets/css/bootstrap.min.css"
export default {
  name:'cataloguePages',

};
</script>

<style>
</style>