(function () {
    console.log(2)
    'use strict';
    var temp = document.createElement("template");
    var elbtn = document.createElement("el-button")
    elbtn.type = "primary"
    elbtn.innerText = "wadaw"
    temp.appendChild(elbtn)


// 创建栏元素
    var customBar = document.createElement("div");
    customBar.className = "custom_bar";

    var boxContainer1 = document.createElement("div");
    boxContainer1.className = "boxContainer1";

    var buttons1 = ["限定网址", "标题中包括", "url中包括", "文件类型为"]
    var inputs1 = ["", "", "", ""]

    // 绑定按钮和输入框
    for (var i = 0; i < 5; i++) {
        var item_box = document.createElement("div");
        item_box.className = "item1_box"

        if (i < 4) {
            // 添加标题
            var button = document.createElement("button");
            button.textContent = buttons1[i];
            button.className = "custom_button";
            item_box.appendChild(button)
        }

        if (i == 3) {
            var selectEl = document.createElement("select");
            selectEl.className = "custom_input"
            var options = ["all", "doc", "docx", "pdf", "xls", "ppt", "pptx"]
            for (var j=0;j<options.length;j++) {
                var optionEl = document.createElement("option");
                if(j==0){
                    optionEl.innerText = ""
                    selectEl.appendChild(optionEl)
                    continue
                }
                optionEl.innerText = options[j]
                optionEl.title = options[j]
                optionEl.value = options[j]
                selectEl.appendChild(optionEl)
            }
            item_box.appendChild(selectEl)
        }

        if (i < 3) {
            // 添加输入框
            var input = document.createElement("input");
            input.placeholder = inputs1[i];
            input.className = "custom_input"
            input.type = "text"
            item_box.appendChild(input)
        }

        if(i == 4){
            var buttonEl = document.createElement("button");
            buttonEl.textContent = "搜索";
            buttonEl.className = "custom_button";
            buttonEl.id = "search_button";
            item_box.appendChild(buttonEl)

            var buttonEl = document.createElement("button");
            buttonEl.textContent = "重置";
            buttonEl.className = "custom_button";
            buttonEl.id = "reset_button";
            item_box.appendChild(buttonEl)
        }


        boxContainer1.appendChild(item_box)
    }


    customBar.appendChild(boxContainer1);



    // 将栏元素添加到class为"head_wrapper"的div下面
    var headWrapper = document.querySelector(".head_wrapper");
    headWrapper.appendChild(customBar);
    headWrapper.appendChild(temp)

    // 事件绑定
    var search_btn = document.querySelector("#search_button");
    search_btn.addEventListener("click", function () {
        var inputs = document.getElementsByClassName("custom_input")
        console.log(inputs)
        var site = inputs[0].value
        var title = inputs[1].value
        var sourceType = inputs[2].value
        var fileType = inputs[3].value

        var search_input = document.querySelector("#kw");
        if (site!='') {
            search_input.value += ` site:${site}`
        }
        if (title !='') {
            search_input.value += ` title:${title}`
        }
        if (sourceType!='') {
            search_input.value += ` sourceType:${sourceType}`
        }
        if (fileType!='') {
            search_input.value += ` fileType:${fileType}`
        }

        var search_btn = document.querySelector("#su");
        window.onload = function() {
            // 在新页面的所有内容加载完毕后执行的代码
            alert("新页面的所有内容都已加载完毕");
        }

        search_btn.click()

    });

    var reset_btn = document.querySelector("#reset_button");
    reset_btn.addEventListener("click", function () {


    })


})();