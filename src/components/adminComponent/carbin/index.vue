<template>
  <div
    class="container"
    style="padding: 0; overflow-x: hidden; overflow-y: hidden"
  >
    <hr />
    <div class="search" style="line-height: 30px">
      <a style="padding: 10px">@农作物知识管理</a>
      <a
        style="float: right"
        th:href="@{/carbon/add}"
        class="btn btn-success"
        th:if="${session.user.role!=2}"
        >添加</a
      >
      <div
        class="input-group col-md-12"
        style="float: right; width: 450px; padding-right: 50px"
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
            <th>实体名</th>
            <th>属性说明</th>
            <th>实体关系</th>
            <th>关联实体</th>
            <th th:if="${session.user.role==0}">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr th:each="item : ${items}">
            <th scope="row" th:text="${itemStat.index + 1}">1</th>
            <td th:text="${item.cname}"></td>
            <td th:text="${item.property}"></td>
            <td th:text="${item.rship}"></td>
            <td th:text="${item.pname}"></td>
            <td th:if="${session.user.role!=2}">
              <a
                class="btn btn-sm btn-warning"
                th:href="@{/carbon/update(id=${item.id})}"
                >修改</a
              >
              <a
                class="btn btn-sm btn-danger"
                th:href="@{/carbon/delete(id=${item.id})}"
                >删除</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal-footer">
      <ul class="pagination pagination-sm">
        <!-- 首页 -->
        <li>
          <a th:href="'/carbon/list?pageNum=0'">首页</a>
        </li>
        <!-- 上一页 -->
        <li th:if="${items.hasPrevious()}">
          <a
            th:href="'/carbon/list?pageNum=' + ${items.previousPageable().getPageNumber()}"
            th:text="上一页"
          ></a>
        </li>
        <!-- 中间页 -->
        <li
          th:each="pageNum:${#numbers.sequence(0, items.getTotalPages() - 1)}"
        >
          <a
            th:href="'/carbon/list?pageNum=' + ${pageNum}"
            th:text="${pageNum + 1}"
            th:if="${pageNum ne items.pageable.getPageNumber()}"
          ></a>
          <a
            th:href="'/carbon/list?pageNum=' + ${pageNum}"
            th:text="${pageNum + 1}"
            th:if="${pageNum eq items.pageable.getPageNumber()}"
            th:style="'font-weight:bold;background: #6faed9;'"
          ></a>
        </li>
        <!-- 下一页 -->
        <li th:if="${items.hasNext()}">
          <a
            th:href="'/carbon/list?pageNum=' + ${items.nextPageable().getPageNumber()}"
            th:text="下一页"
          ></a>
        </li>
        <!-- 尾页 -->
        <li>
          <a th:href="'/carbon/list?pageNum=' + ${items.getTotalPages() - 1}"
            >尾页</a
          >
        </li>
        <li>
          <a>总条数:[[${total}]]</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import "@/assets/css/bootstrap.min.css";
export default {
  name: "carbonPages",
};
</script>

<style scoped>
.displaybox {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>