(function () {
    'use strict';
    // css样式使用b站的
    var button = document.createElement("button");
    button.textContent = "清理失效";
    button.className = "text";

    setTimeout(()=>{
        var bar = document.querySelector(".fav-filters")

        if (bar) {
            var box = document.createElement("div")
            box.className = "filter-item do-batch"
            box.appendChild(button)
            const firstChild = bar.firstChild;
            bar.insertBefore(box, firstChild);
        } else {
            console.log("未找到栏,添加按钮失败")
        }

        button.addEventListener("click", function () {
            const invalidVideoLink = document.querySelector('a[title="已失效视频"]');

            if (invalidVideoLink) {
                // 获取第一个兄弟元素
                let videoEditDiv = invalidVideoLink.nextElementSibling;
                // 循环遍历所有兄弟元素，直到没有下一个兄弟元素为止
                while (videoEditDiv) {
                    if (videoEditDiv.className == "be-dropdown video-edit") {
                        break;
                    }

                    // 获取下一个兄弟元素
                    videoEditDiv = videoEditDiv.nextElementSibling;
                }

                if (videoEditDiv) {
                    const delimiterLi = videoEditDiv.querySelector('li.be-dropdown-item.be-dropdown-item-delimiter');

                    if (delimiterLi) {
                        delimiterLi.click()
                        console.log(delimiterLi);
                    } else {
                        console.log("未找到class为'be-dropdown-item be-dropdown-item-delimiter'的li标签");
                    }
                } else {
                    console.log("未找到class为'be-dropdown video-edit'的div标签");
                }
            } else {
                console.log("未找到title为'已失效视频'的a标签");
            }

        })
    },1000)



})();