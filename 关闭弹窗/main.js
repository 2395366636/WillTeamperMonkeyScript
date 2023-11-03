"use strict";
// 获取当前网站的URL
var currentURL = window.location.href;

// 预定义的网址列表
var predefinedURLs = [
    "https://unitystr.com/",
    "https://assetsfree.top/",
    "https://gfx-station.com/"
];

// 初始化匹配的索引为-1
var matchedIndex = -1;

// 检查当前网站是否匹配预定义的网址列表
for (var i = 0; i < predefinedURLs.length; i++) {
    if (currentURL.includes(predefinedURLs[i])) {
        matchedIndex = i;
        break; // 找到匹配的网址后停止循环
    }
}

if(matchedIndex==0) {
    var blockDiv = document.querySelector(".adbn-wrap");
    if (blockDiv) {
        blockDiv.style.display = "none";
    }
}
if(matchedIndex==1) {
    var blockDiv = document.querySelector(".site-block");
    if (blockDiv) {
        blockDiv.style.display = "none";
    }

    var elementsClass = [".header",".container",".footer"]
    for(var elementClass of elementsClass){
        var element = document.querySelector(elementClass);
        var classToRemove = "hello";
        if (element && element.classList.contains(classToRemove)) {
            element.classList.remove(classToRemove);
        }
    }
}
if(matchedIndex==2){
    var block = document.querySelector(".popSc")
    if(block){
        block.style.display = "none"
    }
}