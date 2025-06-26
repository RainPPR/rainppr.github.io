// 示例：调用接口
updateHeaderTitle("About RainPPR");
setFooterContent("by RainPPR", "2025-06-26");
setContentWidth(0.5);

addMainContent("自我介绍", `<p>我是一名高中生。</p>`);

addMainContent(
    "我的博客",
    `<ul>
<li>信息学博客：<a href="https://raineblog.github.io/blog/" class="uri">https://raineblog.github.io/blog/</a>。</li>
<li>文化课博客：<a href="https://raineblog.github.io/whk/" class="uri">https://raineblog.github.io/whk/</a>。</li>
</ul>`
);

addSecondaryContent(
    "学业",
    `<ul>
<li>2024 中考（已上岸）。</li>
<li>2027 高考。</li>
</ul>`
);

addSecondaryContent(
    "技能",
    `<p>我是辣鸡。</p>
<p>使用 <a href="https://pandoc.org/try/" class="uri">https://pandoc.org/try/</a> 生成 HTML。</p>`
);
