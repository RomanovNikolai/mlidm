var mass;
var error_text;
function multiplyMatrix(n)
{
    let result = [];
    for (let i = 0; i < n.length; i++) {
        result[i] = [];
    }
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n.length; j++) {
            let elem = 0;
            for (let k = 0; k < n.length; k++) {
                elem += n[j][k] * n[k][i];
            }
            if (elem >= 1) {
                result[i][j] = 1;
            } else {
                result[i][j] = 0;
            }
        }
    }
    return result;
}
/**
 * Функция определения правильности ввода
 */
function validate(str)
{
    let mass = str;
    let flag = true;
    if(str.length>0) {
        for (let i = 0; i < mass.length; i++) {
            if (mass.length != mass[i].length) {
                error_text = "Матрица неверного формата. Формат n*n";
                flag = false;
                break;
            }
            for (let j = 0; j < mass[i].length; j++) {
                if (mass[i][j] != 1 && mass[i][j] != 0) {
                    error_text = "Матрица должна содержать только элементы 1 или 0";
                    flag = false;
                    break;
                }
            }
        }
    }
    else {
        error_text = "Массив не может быть пустым";
        flag = false;
    }
    return flag;
}

/**
 * Функция, создающий двумерный массив
 */
function needmass( str )
{
    var massiv = [];
    massiv = str.split("\n").map(function (x) { return x.split(" "); });

    for (let i = 0; i < massiv.length; i++) {
        if (massiv[i] == "" && massiv[i].length == 1) {
            massiv.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < massiv.length; i++) {
        for (let j = 0; j <=  massiv[i].length; j++) {
            if (massiv[i][j] == "") {
                massiv[i].splice(j, 1);
            }
        }
    }
    return massiv;
}
/**
 * Основная функция, которая выполняет все остальные функции по нажатию кнопки
 */
function rasschetmatrix()
{
    var a = document.getElementById('mass');
    var massmat = [];
    massmat = needmass( a.value );
    if(validate(massmat) == false)
    {
        alert(error_text);
    }
    else {
        let doublemat = multiplyMatrix(massmat);

        let matrixes = "";
        for (let i = 0; i < massmat.length; i++) {
            for (let j = 0; j < massmat[i].length; j++) {
                matrixes += massmat[i][j] + " ";
                }
            matrixes += "\n";
    }
        let doublematrixes = "";
        for (let i = 0; i < doublemat.length; i++) {
            for (let j = 0; j < doublemat[i].length; j++) {
                doublematrixes += doublemat[i][j] + " ";
            }
            doublematrixes += "\n";
        }
       
        let antiSym = true;
        let refl = true;
        let sym = true;
        let tranz = true;
        for(let i = 0; i < massmat.length; i++) {
            for(let j = 0; j < massmat.length; j++) {
                if (!(!((massmat[i][j] == 1) && (i != j)) || massmat[j][i] == 0)) {
                    antiSym = false;
                }
                if (i == j) {
                    if (massmat[i][j] == 0) {
                        refl = false;
                    }
                }else {
                    if(massmat[i][j] != massmat[j][i]) {
                        sym = false;
                    }
                }
                if ((massmat[i][j] == 0 && doublemat[i][j] == 1) || (massmat[i][j] == 1 && doublemat[i][j] == 0)) {
                    tranz = false;
                }
            }
        }
        let full_result = "";
        if (refl == true) {
            full_result = "Данная матрица рефлексивна\n";
        }
        else {
            full_result = "Данная матрица не рефлексивна\n";
        }
        if (sym == true) {
            full_result += "Данная матрица симметрична\n";
        }
        else {
            full_result += "Данная матрица не симметрична\n";
        }
        if (antiSym == true) {
            full_result += "Данная матрица антисимметрична\n";
        }
        else {
            full_result += "Данная матрица не антисимметрична\n";
        }
        if (tranz == true) {
            full_result += "Данная матрица транзитивна\n";
        }
        else {
            full_result += "Данная матрица не транзитивна\n";
        }
        document.getElementById('outResult').innerText = "Свойства матрицы:\n" + full_result;

    }
}