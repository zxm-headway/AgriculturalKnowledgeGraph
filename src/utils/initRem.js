// import $ from "@/assets/js/jquery.min.js";
import $ from 'jquery'


$(document).ready(function(){
var whei=$(window).width()
$("html").css({fontSize:whei/20})
$(window).resize(function(){
var whei=$(window).width()
$("html").css({fontSize:whei/20})
});
});