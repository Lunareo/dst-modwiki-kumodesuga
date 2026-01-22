const img_bed_root = "https://raw.githubusercontent.com/Lunareo/Runar-Img-Bed/refs/heads/main/"

const allplugins = [
    //item-header
    function (hook, vm) {
        hook.afterEach(function (html) {
            return html.replace(/<item-header([\s\S]*?)(?:\/?>)/g, function (match, content) {
                const getAttr = (name) => {
                    const res = new RegExp(name + '="([^"]*)"').exec(content);
                    return res ? res[1] : "";
                };
                const img = getAttr('img');
                const title = getAttr('title');
                const tags = getAttr('tags');
                const height = getAttr('height') || "70";
                // 如果没有图片，则不生成图片部分的 HTML
                const imgHtml = img
                    ? `<img src="${img_bed_root}${img}" class="item-header-img" style="height: ${height}px;" alt="${title}">`
                    : "";
                const tagsHtml = tags
                    ? tags.split(',').map(t => `<code>${t.trim()}</code>`).join('')
                    : "";
                return `<div class="item-header">
                            ${imgHtml}
                            <div class="item-header-info">
                                <h1 class="item-header-title">${title}</h1>
                                <div class="item-header-tags">${tagsHtml}</div>
                            </div>
                        </div>`;
            });
        });
    },
    //ingredient
    function (hook, vm) {
        hook.afterEach(function (html) {
            return html.replace(/<ingredient([\s\S]*?)(?:\/?>)/g, function (match, content) {
                const getAttr = (name) => {
                    const res = new RegExp(name + '="([^"]*)"').exec(content);
                    return res ? res[1] : "";
                };
                const img = getAttr('img');
                const name = getAttr('name');
                const num = getAttr('num');
                const type = getAttr('type');
                const ismod = getAttr('ismod') == "1";
                const img_class = type == 'charactor' ? 'ingredient-div-img-charactor' : 'ingredient-div-img';
                const ref = ismod ? `#/${type == 'charactor' ? 'charactor' : 'invitem'}/${img}.md` : `https://dontstarve.huijiwiki.com/wiki/${name}`;
                const img_folder = type == 'charactor' ? 'saveslot_portraits' : 'inventoryimages';
                const num_span = num ? `<span class="ingredient-div-number">${num}</span>` : '';
                return `<a href=${ref} class="ingredient">
                            <div class="ingredient-div">
                                <img src="${img_bed_root}images/${img_folder}/${img}.png" alt="${name}" class="${img_class}">
                                ${num_span}
                            </div>
                        </a>`;
            })
        })
    },
    //badge
    function (hook, vm) {
        hook.afterEach(function (html) {
            return html.replace(/<([A-Za-z]+)-badge>/g, function (match, type) {
                return `<img src="${img_bed_root}images/global_redux/status_${type}.png" height="40px", width="auto">`;
            });
        });
    },
    //arrow
    function (hook, vm) {
        hook.afterEach(function (html) {
            return html.replace(/<right-arrow>/g, function (match, type) {
                return `<img src="${img_bed_root}images/ui/arrow_right.png" height="20px", width="auto">`
            })
        })
    },
]
