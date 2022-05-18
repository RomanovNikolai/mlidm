<html>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <script src="scripts/scripts3.js"></script>
    </head>
    <body>
        <div class="container backgroundContainer">
            <div class="jetBrainsHeaderFont headerText">Лабораторная работа 3</div>
        </div>
        <div class="container backgroundContainer">
            <div>
                <div class="jetBrainsFont defaultText"></div>
                <input id="setA" type="text" size="40" class="jetBrainsFont" placeholder="Первое множество"> Пример ввода: a b c d<br></td>
            </div>
            <div>
                <div class="jetBrainsFont defaultText"></div>
                <input id="setB" type="text" size="40" class="jetBrainsFont" placeholder="Втортое множество"> Пример ввода: 1 2 3 4<br></td>
            </div>
            <div>
                <div class="jetBrainsFont defaultText"></div>
                <input id="ratio" type="text" size="40" class="jetBrainsFont" placeholder="Пары отношений"> Пример ввода:a 1, b 2, c 3, d 4<br></td>
            </div>
            <div class="buttonOffset">
                <button class="button" onclick="start();">Проверить</button>
            </div>
            <div id="resultAB" class="jetBrainsFont defaultText buttonOffset"></div>
            <div id="resultBA" class="jetBrainsFont defaultText buttonOffset"></div>
        </div>
    </body>
</html>