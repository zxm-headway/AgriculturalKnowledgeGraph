<template>
  <div style="overflow-x:hidden;overflow-y:hidden;" class="bod">
    <div id="treediv" style="width: 25%; border-color: #eee; float: left"></div>
    <div style="width: 74%; float: left">
      <iframe
        src=""
        style="overflow-x: hidden; overflow-y: auto"
        id="mainFrame"
        name="mainFrame"
        width="100%"
        height="900px"
        frameBorder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
// import ZUI from '@/utils/tree.js'
import $ from "jquery"
export default {
  name: 'xtreePages',
  data(){
    return{
      muen:[
        {
        "title": "江西",
        "id": 1,
        "children": [{
            "title": "南昌",
            "id": 1000,
            "children": [{
                "title": "<a onclick=openWin('https://baike.baidu.com/item/233/18862861')>青山湖区</a>",
                "id": 10001
            }, {
                "title": "高新区",
                "id": 10002
            }]
        }, {
            "title": "九江",
            "id": 1001
        }, {
            "title": "赣州",
            "id": 1002
        }]
    },
        {
        "title": "广西",

        "id": 2,
        "children": [{
            "title": "南宁",
            "id": 2000
        }, {
            "title": "桂林",
            "id": 2001
        }]
    }, {
        "title": "陕西",
        "id": 3,
        "children": [{
            "title": "西安",
            "id": 3000
        }, {
            "title": "延安",
            "id": 3001
        }]
    }]
    }
  },
  methods:{
    openWin(url) {
      console.log(url);
      // window.open(url);
      this.iframeSrc = url;
    },

  },
  mounted(){
    $.ajax({
         type: "get",
         url: "loaddata",
         dataType: "json",
         async: false,
         success: function (response) {
             this.muen = response ;
             console.log(this.muen);
         }
     }),

    tree({
        data: this.muen,
        title: 'title',
        id: 'id',
        elem: '#treediv',
        children: 'children',
        iconfont: 'iconfont|icon-add_circle|icon-iconset0187|icon-file',
        callBack: function (con) {
            console.log("==="+con);
        }
    })
  }
};
</script>

<!-- <style src="@/assets/css/iconfont.css" lang="less" scoped></style> -->
<style lang="less" scoped>
.zui-tree {
    line-height: 22px;
}

.zui-tree-set {
    width: 100%;
    position: relative;
}

.zui-tree-entry {
    position: relative;
    padding: 3px 0;
    height: 20px;
    white-space: nowrap;
}

.zui-tree-main {
    cursor: pointer;
    padding-right: 10px;
} 
.zui-tree-main span {
    line-height: 36px;
}
.zui-tree-main span.zui-tree-txt:hover {
    text-decoration: underline;
}

.zui-tree-icon {
    height: 12px;
    line-height: 12px;
    width: 12px;
    text-align: center;
}

.zui-tree-txt {
    display: inline-block;
    vertical-align: middle;
    color: #555;
}

.zui-tree-line .zui-tree-pack {
    padding-left: 27px;
}

.zui-tree-set {
    width: 100%;
    position: relative;
}

.zui-tree-iconClick {
    position: relative;
    height: 20px;
    line-height: 20px;
    margin: 0 10px;
    color: #c0c4cc;
}
</style>