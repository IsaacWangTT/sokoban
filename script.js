//============================函数=============================
function createE(oCss) {
    var oBox = document.createElement("div");
    oCss.f.appendChild(oBox);
    oBox.style.width = oCss.w + "px";
    oBox.style.height = oCss.h + "px";
    oBox.style.position = oCss.p;
    oBox.style.left = oCss.l + "px";
    oBox.style.top = oCss.t + "px";
    return oBox;
}

function init() {
    mapArr = [ //地图编排
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 2, 1],
            [1, 0, 0, 0, 1, 1, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 3, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 3, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
            [1, 1, 0, 0, 4, 1, 0, 0, 4, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 3, 0, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 3, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 4, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 2, 1, 0, 1, 4, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
            [1, 0, 4, 2, 3, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 3, 4, 1, 0, 1],
            [1, 0, 4, 1, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 4, 0, 1, 0, 1],
            [1, 0, 3, 0, 0, 3, 3, 4, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
    ];
}

function isFinished() {
    var finish = true;
    for (var i = 0; i < mapArr[level].length; i++) {
        for (var j = 0; j < mapArr[level][i].length; j++) {
            if (mapArr[level][i][j] == 4) {
                finish = false;
            }
        }
    }
    return finish;
}

function isWin() {
    var success = isFinished();
    if (success === true) { //判断是否为true，是则弹窗，否则跳过
        document.getElementById("box").innerHTML = "<img src = 'imgs/tgt.gif' width = '500px' height = '500px'/>"; //设置胜利界面
    }
}
//=============================================================

//==========================创建地图============================

var mapArr = [ //地图编排
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 2, 1],
        [1, 0, 0, 0, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 0, 1, 0, 0, 3, 0, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 3, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 1, 0, 0, 4, 1, 0, 0, 4, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 3, 0, 0, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 3, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 4, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 2, 1, 0, 1, 4, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 4, 2, 3, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 0, 3, 4, 1, 0, 1],
        [1, 0, 4, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 4, 0, 1, 0, 1],
        [1, 0, 3, 0, 0, 3, 3, 4, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
];
var level = 0; //定义关卡数为0

var start = document.getElementById("start");; //获取开始按钮
start.onclick = function() {
    createMap(mapArr[level]); //创建地图
    start.onclick = null; //只触发一次
}

var oRestart = document.getElementById("restart");
oRestart.onclick = function() {
    document.body.removeChild(document.getElementById("box")); //删除原先关卡
    init();
    createMap(mapArr[level]); //创建地图
}

var last = document.getElementById("last"); //获取上一关按钮
last.onclick = function() {
    document.body.removeChild(document.getElementById("box")); //删除原先关卡
    level--; //关卡数-1
    if (level < 0) {
        level = 0;
    }
    init();
    createMap(mapArr[level]); //创建地图
}

var next = document.getElementById("next"); //获取下一关按钮
next.onclick = function() {
    document.body.removeChild(document.getElementById("box")); //删除原先关卡
    level++; //关卡数+1
    if (level > mapArr.length - 1) {
        level = mapArr.length - 1;
    }
    init();
    createMap(mapArr[level]); //创建地图
}

//遍历
function createMap(mapArr) { //创建大容器
    var oBox = createE({
        "w": 500, //宽
        "h": 500, //高
        "p": "relative", //position 定位
        "f": document.body //父元素
    });
    oBox.id = "box";
    oBox.style.margin = "20px auto"; //居中
    oBox.style.backgroundImage = "url('imgs/ground.png')";
    //计算小容器
    var w = oBox.clientWidth / mapArr.length; //总宽度 / 列数
    var h = oBox.clientHeight / mapArr[0].length; //总高度 / 行数

    for (var row = 0; row < mapArr.length; row++) { //行数
        for (var col = 0; col < mapArr[0].length; col++) { //列数
            var oGrid = createE({ //生成地图
                "w": w, //宽
                "h": h, //高
                "p": "absolute", //position 定位
                "f": oBox, //父元素
                "l": col * w, //left定位
                "t": row * h //top定位
            });
            if (mapArr[row][col] == 1) { //定义障碍
                oGrid.style.backgroundImage = "url('imgs/wall.png')";
                oGrid.style.zIndex = 0; //设置优先图层
            }
            if (mapArr[row][col] == 2) { //定义角色
                var role = createE({
                    "w": w, //宽
                    "h": h, //高
                    "p": "absolute", //position 定位
                    "f": oBox, //父元素
                    "l": col * w, //left定位
                    "t": row * h //top定位
                });
                role.style.backgroundImage = "url('imgs/down.png')";
                role.style.zIndex = 5; //设置优先图层
                role.row = row; //定义角色所在行
                role.col = col; //定义角色所在列
            }
            if (mapArr[row][col] == 3) { //定义箱子
                var oCase = createE({
                    "w": w, //宽
                    "h": h, //高
                    "p": "absolute", //position 定位
                    "f": oBox, //父元素
                    "l": col * w, //left定位
                    "t": row * h //top定位
                });
                oCase.style.backgroundImage = "url('imgs/xz.png')";
                oCase.style.zIndex = 4; //设置优先图层
                oCase.id = "case" + row + col; //使两个箱子不冲突
                oCase.row = row; //同81行
                oCase.col = col; //同82行
            }
            if (mapArr[row][col] == 4) { //定义推进箱子的位置
                var oHole = createE({
                    "w": w, //宽
                    "h": h, //高
                    "p": "absolute", //position 定位
                    "f": oBox, //父元素
                    "l": col * w, //left定位
                    "t": row * h //top定位
                });
                oHole.style.backgroundImage = "url('imgs/f.png')";
                oHole.style.zIndex = 3; //设置优先图层
                oHole.row = row; //同81行
                oHole.col = col; //同82行
            }
        }
    } //=============================================================

    //=========================移动================================
    document.onkeydown = function move(e) {
            var key = e.keyCode; //定义key值为记录键位Unicode值
            // console.log(key);  //输出键位Unicode值
            /*
                ↑: 38
                ↓: 40
                ←: 37
                →: 39
                w: 87
                s: 83
                a: 65
                d: 68
            */
            if (key == 38 || key == 87) { //↑
                if (mapArr[role.row - 1][role.col] == 0) { //判断角色上方一格是否为0
                    mapArr[role.row][role.col] = 0; //使角色消失
                    role.row = role.row - 1; //角色行数上移一格
                    role.style.top = role.row * w + "px"; //角色的样式上移一格
                    mapArr[role.row][role.col] = 2; //使角色出现
                } else if (mapArr[role.row - 1][role.col] == 3) { //判断角色上方一格是否为箱子
                    if (mapArr[role.row - 2][role.col] == 0 || mapArr[role.row - 2][role.col] == 4) { //判断角色上方两格是否为地面或推进箱子的位置
                        //=====================箱子部分=====================
                        var box = document.querySelector("#case" + (role.row - 1) + role.col); //选择箱子
                        mapArr[box.row][box.col] = 0; //使箱子消失
                        box.row = box.row - 1; //箱子的样式上移一格
                        box.style.top = box.row * w + "px"; //箱子的样式上移一格
                        mapArr[box.row][box.col] = 3; //使箱子出现
                        box.id = "case" + box.row + box.col; //更新箱子ids
                        isWin();
                        //=================================================

                        //=====================人物部分=====================
                        mapArr[role.row][role.col] = 0; //使角色消失
                        role.row = role.row - 1; //角色行数上移一格
                        role.style.top = role.row * w + "px"; //角色的样式上移一格
                        mapArr[role.row][role.col] = 2; //使角色出现
                        //=================================================
                    }
                }
                role.style.backgroundImage = "url('imgs/up.png')"; //更换贴图
            }
            if (key == 40 || key == 83) { //↓
                if (mapArr[role.row + 1][role.col] == 0) { //判断角色下方一格是否为0
                    mapArr[role.row][role.col] = 0; //使角色消失
                    role.row = role.row + 1; //角色行数下移一格
                    role.style.top = role.row * w + "px"; //角色的样式下移一格
                    mapArr[role.row][role.col] = 2; //使角色出现
                } else if (mapArr[role.row + 1][role.col] == 3) { //判断角色下方一格是否为箱子
                    if (mapArr[role.row + 2][role.col] == 0 || mapArr[role.row + 2][role.col] == 4) { //判断角色下方两格是否为地面或推进箱子的位置
                        //=====================箱子部分=====================
                        var box = document.querySelector("#case" + (role.row + 1) + role.col); //选择箱子
                        mapArr[box.row][box.col] = 0; //使箱子消失
                        box.row = box.row + 1; //箱子的样式下移一格
                        box.style.top = box.row * w + "px"; //箱子的样式下移一格
                        mapArr[box.row][box.col] = 3; //使箱子出现
                        box.id = "case" + box.row + box.col; //更新箱子id
                        isWin();
                        //=================================================

                        //=====================人物部分=====================
                        mapArr[role.row][role.col] = 0; //使角色消失
                        role.row = role.row + 1; //角色行数下移一格
                        role.style.top = role.row * w + "px"; //角色的样式下移一格
                        mapArr[role.row][role.col] = 2; //使角色出现
                        //=================================================
                    }
                }
                role.style.backgroundImage = "url('imgs/down.png')"; //更换贴图
            }
            if (key == 37 || key == 65) { //←
                if (mapArr[role.row][role.col - 1] == 0) { //判断角色左方一格是否为0
                    mapArr[role.row][role.col] = 0; //使角色消失
                    role.col = role.col - 1; //角色行数左移一格
                    role.style.left = role.col * h + "px"; //角色的样式左移一格
                    mapArr[role.row][role.col] = 2; //使角色出现
                } else if (mapArr[role.row][role.col - 1] == 3) { //判断角色左方一格是否为箱子
                    if (mapArr[role.row][role.col - 2] == 0 || mapArr[role.row][role.col - 2] == 4) { //判断角色左方两格是否为地面或推进箱子的位置
                        //=====================箱子部分=====================
                        var box = document.querySelector("#case" + role.row + (role.col - 1)); //选择箱子
                        mapArr[box.row][box.col] = 0; //使箱子消失
                        box.col = box.col - 1; //箱子的样式左移一格
                        box.style.left = box.col * h + "px"; //箱子的样式左移一格
                        mapArr[box.row][box.col] = 3; //使箱子出现
                        box.id = "case" + box.row + box.col; //更新箱子id
                        isWin();
                        //=================================================

                        //=====================人物部分=====================
                        mapArr[role.row][role.col] = 0; //使角色消失
                        role.col = role.col - 1; //角色行数左移一格
                        role.style.left = role.col * h + "px"; //角色的样式左移一格
                        mapArr[role.row][role.col] = 2; //使角色出现
                        //=================================================
                    }
                }
                role.style.backgroundImage = "url('imgs/left.png')"; //更换贴图
            }
            if (key == 39 || key == 68) { //→
                if (mapArr[role.row][role.col + 1] == 0) { //判断角色右方一格是否为0
                    mapArr[role.row][role.col] = 0; //使角色消失
                    role.col = role.col + 1; //角色行数右移一格
                    role.style.left = role.col * h + "px"; //角色的样式右移一格
                    mapArr[role.row][role.col] = 2; //使角色出现
                } else if (mapArr[role.row][role.col + 1] == 3) { //判断角色右方一格是否为箱子
                    if (mapArr[role.row][role.col + 2] == 0 || mapArr[role.row][role.col + 2] == 4) { //判断角色右方两格是否为地面或推进箱子的位置
                        //=====================箱子部分=====================
                        var box = document.querySelector("#case" + role.row + (role.col + 1)); //选择箱子
                        mapArr[box.row][box.col] = 0; //使箱子消失
                        box.col = box.col + 1; //箱子的样式右移一格
                        box.style.left = box.col * h + "px"; //箱子的样式右移一格
                        mapArr[box.row][box.col] = 3; //使箱子出现
                        box.id = "case" + box.row + box.col; //更新箱子id
                        isWin();
                        //=================================================

                        //=====================人物部分=====================
                        mapArr[role.row][role.col] = 0; //使角色消失
                        role.col = role.col + 1; //角色行数右移一格
                        role.style.left = role.col * h + "px"; //角色的样式右移一格
                        mapArr[role.row][role.col] = 2; //使角色出现
                        //=================================================
                    }
                }
                role.style.backgroundImage = "url('imgs/right.png')"; //更换贴图
            }
        }
        //=============================================================
}