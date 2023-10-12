
(function () {
    'use strict';

// 创建栏元素
    var customBar = document.createElement("div");
    customBar.className = "custom_bar";

    var boxContainer1 = document.createElement("div");
    boxContainer1.className = "boxContainer1";

    var buttons1 = ["限定网址","限定标题","限定资源类型","限定文件类型"]
    var inputs1 = ["","","",""]
    var div_list = []

// 绑定按钮和输入框
    for(var i=0;i<4;i++){
        var div =  document.createElement("div");
        div.className = "item1_box"
        var button = document.createElement("button");
        button.textContent = buttons1[i];
        button.className = "custom_button";
        var input = document.createElement("input");
        input.placeholder = inputs1[i];

        div.appendChild(button)
        div.appendChild(input)
        div_list.push(div)
    }


    customBar.appendChild(boxContainer1);

    div_list.forEach(function (button) {
        boxContainer1.appendChild(button);
    });

// 将栏元素添加到class为"head_wrapper"的div下面
    var headWrapper = document.querySelector(".head_wrapper");
    headWrapper.appendChild(customBar);

    var search_btn = document.querySelector("#su");
// 添加新的点击事件处理函数
    search_btn.addEventListener("click", function () {
        alert("额外的点击事件触发");
    });

})();