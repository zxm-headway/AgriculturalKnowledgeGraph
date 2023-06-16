// Date: 2021-08-26 23:00:00
import $ from 'jquery'
(function () {
    class ZUI {
        constructor() {

        }
        tree(options) {
            new Tree(options)
        }

    }
    self.ZUI = new ZUI()

    var yy, tree_defult = {
        title: 'title',
        id: 'id',
    }


    function Tree(opt) {
        yy = this
        $.each(opt, function (indexInArray, valueOfElement) {
            tree_defult[indexInArray] = valueOfElement
        })
        if (tree_defult.iconfont) {
            yy.iconfont = tree_defult.iconfont.split('|')
        }
        yy.elem = $(tree_defult.elem)
        yy.newElem = `<div class="zui-tree zui-tree-line">`
        yy.callBack = tree_defult.callBack
        yy.insertElement()
    }
    Tree.prototype.insertElement = function () {
        yy.createArray(tree_defult.data)
        yy.newElem += '</div>'
        yy.elem.html(yy.newElem)
        yy.addEvent()
    }, Tree.prototype.addEvent = function () {
        yy.elem.on('click', 'div.zui-tree-cli', function () {
            var el = $(this)
            if (el.parent().attr('class').indexOf('zui-tree-last') == -1) {
                if (el.find('i.' + yy.iconfont[0]).attr('class').indexOf(yy.iconfont[1]) == -1) {
                    el.find('i.' + yy.iconfont[0]).removeClass().addClass([yy.iconfont[0], yy.iconfont[1]])
                    el.parent().next().hide()
                } else {
                    el.find('i.' + yy.iconfont[0]).removeClass().addClass([yy.iconfont[0], yy.iconfont[2]])
                    el.parent().next().show()
                }
            } else {
                var str = `{${tree_defult.title+ ':'+ el.children('span.zui-tree-txt').text() +','+tree_defult.id+':'+el.parent().parent().attr('data-id')}}`
                yy.callBack(str)
            }
        })
    }, Tree.prototype.createArray = async function (data, bol) {
        $.each(data, function (indexInArray, valueOfElement) {
            var s, v
            s = `<div data-id="${valueOfElement.id}" class="zui-tree-set">
                         <div class="zui-tree-entry ${valueOfElement.children?'': 'zui-tree-last'}">
                            <div class="zui-tree-main zui-tree-cli"><span class="zui-tree-iconClick"><i
                                class="${valueOfElement.children?yy.iconfont[0] + ' ' + yy.iconfont[1]:yy.iconfont[0] + ' ' + yy.iconfont[3]}"></i></span><span class="zui-tree-txt">${valueOfElement.title}</span>
                            </div>
                        </div>
                    `
            v = `<div class="zui-tree-pack" style=" display: none;">
                        
                    `
            if (valueOfElement.children) {
                yy.newElem += s
                yy.newElem += v
                yy.createArray(valueOfElement.children, 'a')
                yy.newElem += '</div></div>'
            } else {
                yy.newElem += s
                yy.createArray(valueOfElement.children, 'a')
                yy.newElem += '</div>'
            }
        });
    }
})(window)