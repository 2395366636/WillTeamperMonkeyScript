// ==UserScript==
// @name         高级搜索
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant        none
// ==/UserScript==
(function () {
    var css = "<style type=\"text/css\">" +
        ".custom_button{\n" +
        "    backgroundColor : #4caf50;\n" +
        "    color : #fff;\n" +
        "    padding : 10px 20px;\n" +
        "    border : none;\n" +
        "    borderRadius : 5px;\n" +
        "    cursor : pointer;\n" +
        "    textAlign : center;\n" +
        "}" +
        "</style>"
    console.log(css)
    var style= document.createElement("style")
    style.innerText=css
    document.head.appendChild(style)
    'use strict';
    // 创建栏元素
    var customBar = document.createElement("div");
    customBar.className = "custom_bar";

    var buttonContainer = document.createElement("div");
    buttonContainer.className = "button_container";

    var buttons1 = ["限定网址","限定标题","限定资源类型","限定文件类型"]
    var inputs1 = ["","","",""]
    var div_list = []

    // 绑定按钮和输入框
    for(var i=0;i<4;i++){
        var div =  document.createElement("div");
        var button = document.createElement("button");
        button.textContent = buttons1[i];
        button.className = "custom_button";
        var input = document.createElement("input");
        input.placeholder = inputs1[i];
        div.style.height = "50px";
        div.style.display = "flex";
        div.style.justifyContent = "space-between";
        div.style.alignItems = "center";
        div.appendChild(button)
        div.appendChild(input)
        div_list.push(div)
    }


    // 为栏和按钮添加样式
    customBar.style.width = "100%";
    customBar.style.height = "50px";
    customBar.style.backgroundColor = "#007bff";
    customBar.style.color = "#fff";
    customBar.style.display = "flex";
    customBar.style.justifyContent = "space-between";
    customBar.style.alignItems = "center";
    //
    buttonContainer.style.width = "50%";
    buttonContainer.style.height = "50px";
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "space-between";
    buttonContainer.style.alignItems = "center";


    customBar.appendChild(buttonContainer);

    div_list.forEach(function (button) {
        buttonContainer.appendChild(button);
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