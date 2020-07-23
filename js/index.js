$(function () {
  theaMsForm($('.sign-in'));
  // 单选框
  // params: 触发元素，内容元素，类名
  function radioHandle(btn, classname) {
    $(btn).each(function () {
      $(this).click(function () {
        $(this).addClass(classname).siblings().removeClass(classname);
      });
    });
  }
  radioHandle(".c-col span", "on");

  // 收集信息
  // assgin: 收集的容器
  function getMsg(btn, assgin, classname) {
    $(btn).click(function () {
      var pa = $(this).parent();
      pa.find(assgin).val(pa.find(classname).text());
    });
  }
  getMsg(".submit", ".assgin");

  // 院校切换
  function academySwitch(head, cont, classname) {
    $(head).each(function (i) {
      var that = this;

      $(that).mouseenter(function () {
        $(that).addClass(classname).siblings().removeClass(classname);
        $($(cont)[i]).addClass(classname).siblings().removeClass(classname);
      })
    });
  }
  academySwitch(".a-head span", ".a-cont li", "on");

  // 显示弹窗
  // time: 多少秒之后显示弹窗
  function showDialog(time, dialog){
    var tId = setInterval(function(){
      $(dialog).show();
      clearInterval(tId);
    }, time);
  }
  showDialog(30000, ".dialog");

  // 关闭弹窗
  function closePopup(btn, dialog){
    $(btn).click(function(){
      $(dialog).hide();
      showDialog(30000, ".dialog");
    });
  }
  closePopup(".close", ".dialog");

  // 回到顶部
  $('.to-top').click(function () {
    $('html').animate({
      scrollTop: 0
    });
  });

});