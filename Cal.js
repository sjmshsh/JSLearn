<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tencent</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .parent {
            height: 400px;
            width: 500px;
            background-color: gray;
            margin: 0 auto;
        }
        .parent .one {
            height: 150px;
            width: 100px;
            color: white;
            margin: 0 auto;
            line-height: 150px;
            font-size: 50px;
            text-align: center;
        }
        .parent .two {
            height: 250px;
            width: 500px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .parent .two button {
            font-size: 50px;
            width: 100px;
            height: 80px;
            text-align: center;
            line-height: 80px;
            border: none;
            border-radius: 10px;
        }
        .parent .two button:active {
            background-color: green;
        }
    </style>
</head>
<body>
    <div class="parent">
        <div class="one">0</div>
        <div class="two">
            <button id="plusButton">+</button>
            <button id="minusButton">-</button>
        </div>
    </div>
    <script>
        let plusButton = document.querySelector('#plusButton');
        plusButton.onclick = function() {
            let one = document.querySelector('.one');
            let content = one.innerHTML;
            let result = parseInt(content) + 1;
            one.innerHTML = result;
        }
        let minusButton = document.querySelector('#minusButton');
        minusButton.onclick = function() {
            let one = document.querySelector('.one');
            let content = one.innerHTML;
            let result = parseInt(content) - 1;
            one.innerHTML = result;
        }

    </script>
</body>
</html>
