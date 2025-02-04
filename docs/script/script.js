// 切换暗亮模式
$("#toggleModeButton").click(function () {
    $("body").toggleClass("darkMode");
    let icon = $("body").hasClass("darkMode") ? "sun" : "moon";
    $("#toggleModeButton i").removeClass().addClass(`fas fa-${icon}`);
});

// 显示信息框
$("#infoButton").click(function () {
    Swal.fire({
        title: "个人介绍",
        text:
            "这是一个用来展示个人信息的页面，支持暗亮模式切换、动态内容加载等。",
        icon: "info",
        confirmButtonText: "确定",
        background: $("body").hasClass("darkMode") ? "#333" : "#fff",
        color: $("body").hasClass("darkMode") ? "#fff" : "#000"
    });
});

// 跳转到 GitHub
$("#githubButton").click(function () {
    window.location.href = "https://github.com/RainPPR";
});

// 主要部分和次要部分内容插入接口
function addMainContent(title, content) {
    $("#mainContent").append(`
                <div class="contentCard">
                    <h3>${title}</h3>
                    <div>${content}</div>
                </div>
            `);
}

function addSecondaryContent(title, content) {
    $("#secondaryContent").append(`
                <div class="contentCard">
                    <h3>${title}</h3>
                    <div>${content}</div>
                </div>
            `);
}

// 设置页面宽度
function setContentWidth(primaryContentWidth) {
    $(".primaryContent").css("width", `${primaryContentWidth * 100}%`);
    $(".secondaryContent").css("width", `${(1 - primaryContentWidth) * 100}%`);
}

// 页脚内容插入接口
function setFooterContent(leftContent, rightContent) {
    $("#footerLeft").html(leftContent);
    $("#footerRight").html(rightContent);
}

// 修改页首标题接口
function updateHeaderTitle(newTitle) {
    $("#headerTitle").text(newTitle);
}
