<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>代表事项</title>
    <style>
        body {
            background: url("大美女.PNG");
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .nav {
            width: 800px;
            height: 100px;
            margin: 0 auto;
            display: flex;
            align-items: center;
        }
        /* 任务的输入框 */
        .nav input {
            height: 50px;
            width: 600px;
        }
        .nav button {
            height: 50px;
            width: 200px;
            background-color: orange;
            color: white;
            border: none;
            border-radius: 5px;
        }
        .nav button:active {
            background-color: blue;
        }
        .todo {
            height: 100%;
            width: 50%;
        }
        .done {
            height: 100%;
            width: 50%;
        }
        .container {
            width: 800px;
            height: 800px;
            margin: 0 auto;
            display: flex;
        }
        .container h3 {
            text-align: center;
            height: 50px;
            line-height: 50px;
            background-color: #333;
            color: #ffff;
        }
        .row {
            height: 50px;
            display: flex;
            align-items: center;
        }
        .row #checkbox {
            /*设置上下外边距为0，左右外边距为10px*/
            margin: 0 10px;
        }
        .row span {
            width: 300px;
        }
        .row button {
            width: 50px;
            height: 40px;
            border-radius: 10px;
            border: 10px;
            border-color: black;
        }
        .row button:active {
            background-color: purple;
        }
        .AllDoNot {
            height: 30px;
            width: 80px;
            background-color: orange;
            color: white;
            border-radius: 10px;
            text-align: center;
            line-height: 30px;
            margin: 0 auto;
        }
        .AllDoNot:active {
            background-color: wheat;
        }
    </style>
</head>
<body>
    <!-- 最上面一行，输入框 + 新建任务按钮 -->
    <div class="nav">
        <input type="text">
        <button id="NewTask">新建任务</button>
    </div>
    <!-- 下面就是包含了 左右两个部分的 内容区域 -->
    <div class="container">
        <!-- 左侧的部分 -->
        <div class="todo">
            <h3>未完成</h3>
        </div>
        <!-- 右侧的部分 -->
        <div class="done">
            <h3>已完成</h3>
        </div>
    </div>
    <script>
        let addTaskButton = document.querySelector('.nav button');
        addTaskButton.onclick = function() {
            let input = document.querySelector('.nav input');
            let taskContent = input.value;
            if (taskContent == '') {
                return;
            }
            let row = document.createElement('div');
            row.className = 'row';
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            let span = document.createElement('span');
            span.innerHTML = taskContent;
            let button = document.createElement('button');
            button.innerHTML = '删除';
            row.appendChild(checkbox);
            row.appendChild(span);
            row.appendChild(button);
            let todo = document.querySelector('.todo');
            todo.appendChild(row);
            input.value = '';
        //根据checkedbox的选中状态来判定
            checkbox.onclick = function() {
                if (checkbox.checked) {
                    //选中状态，把row放到done里面
                    let target = document.querySelector('.done');
                    target.appendChild(row);
                } else {
                    //未被选中状态，把row放到todo里面
                    let target = document.querySelector('.todo');
                    target.appendChild(row);
                }
            }
            //删除功能
            button.onclick = function() {
                let parent = row.parentNode; //这个操作可以直接得到父元素
                parent.removeChild(row);
            }
        }
    </script>
</body>
</html>
