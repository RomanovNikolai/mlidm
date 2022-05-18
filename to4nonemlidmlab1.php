<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAB 1</title>
    <script src = "scripts/scripts.js"><</script>
</head>
<body>
    <div class="content">
        <h1>Лабораторная работа №1</h1>
        <form method="" action="" class="form" onsubmit="return false;">
            <input type = "text" class = "enter" id = "first">
            <p><input type = "text" class = "enter" id = "second"></p>
            <input class="sub" type="button" value="Посчитать" onclick="Calc()"></input>
            <div>Пример : cbii</div>
            <div class="res">
                <h2>Объеденение: </h2>
                <p id="union"></p>
            </div>
            <div class="res">
                <h2>Пересечение: </h2>
                <p id="int"></p>
            </div>
            <div class="res">
                <h2>дополнение A\B: </h2>
                <p id="diff a"></p>
            </div>
            <div class="res">
                <h2>дополнение B\A: </h2>
                <p id="diff b"></p>
            </div>
            <div class="res">
                <h2>Симметрическая разность: </h2>
                <p id="symm"></p>
            </div>
        </form>
    </div>
</div>
</body>
</html>