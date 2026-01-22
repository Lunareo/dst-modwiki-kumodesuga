window.$docsify = {
    // 项目名称
    //name: '学习',
    // 仓库地址，点击右上角的Github章鱼猫头像会跳转到此地址
    //repo: ,
    // 侧边栏支持，默认加载的是项目根目录下的_sidebar.md文件
    loadSidebar: true,
    //sidebarDisplayLevel: 1,
    alias: {
        '/.*/_sidebar.md': '/_sidebar.md'
    },
    // 导航栏支持，默认加载的是项目根目录下的_navbar.md文件
    loadNavbar: true,
    // 封面支持，默认加载的是项目根目录下的_coverpage.md文件
    coverpage: true,
    // 最大支持渲染的标题层级
    maxLevel: 5,
    // 自定义侧边栏后默认不会再生成目录，设置生成目录的最大层级（建议配置为2-4）
    subMaxLevel: 3,
    // 小屏设备下合并导航栏到侧边栏
    mergeNavbar: true,
    auto2top: true,
    //Latex设置
    latex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$']],
        customOptions: {}
    },
    pagination: {
        previousText: '上一条目',
        nextText: '下一条目',
    },
    /*搜索相关设置*/
    search: {
        paths: 'auto',// 注意：仅适用于 paths: 'auto' 模式
        placeholder: '搜索',
        // 支持本地化
        placeholder: {
            '/zh-cn/': '搜索',
            '/': 'Type to search'
        },
        noData: '找不到结果',
        depth: 4,
        hideOtherSidebarContent: false,
        namespace: 'Docsify-Guide',
    },
    count: {
        countable: true,
        position: 'top',
        margin: '10px',
        float: 'right',
        fontsize: '0.9em',
        color: 'rgb(90,90,90)',
        language: 'chinese',
        isExpected: true
    },
    plugins: allplugins,
}
