function getPairElements(text)
{
    let isRight = true;
    let matrixElements = text.value.split(", ");
    let matrixPairs = new Array(matrixElements.length);
    for(let x = 0; x < matrixElements.length; x++) {
        matrixPairs[x] = matrixElements[x].split(" ");
        if(matrixPairs[x].length > 2) {
            alert("Количество элементов в группе равно " + matrixPairs[x].length + ", а должна быть пара, \n" +
                "то есть 2 элемента");
            isRight = false;
            break;
        }
    }

    if(isRight)
        return matrixPairs;
    else
        return false;
}

function getResult(element, result, subText)
{
    switch(result)
    {
        case -1:
            element.innerHTML = "";
            break;

        case 0:
            element.innerHTML = subText + " отношение не является функцией";
            break;

        case 1:
            element.innerHTML = subText + " отношение является функцией";
    }
    return result;
}

function uniq(a) {
    let seen = {};
    let out = [];
    let len = a.length;
    let j = 0;
    for(let i = 0; i < len; i++) {
        let item = a[i];
        if(seen[item] !== 1) {
            seen[item] = 1;
            out[j++] = item;
        }
    }
    return out;
}

function checkFunction(setA, setB, ratio, reverse)
{
    let A = new Array(setA.length);
    let B = new Array(setB.length);

    for(let x = 0; x < setA.length; x++)
        A[x] = setA[x];

    for(let x = 0; x < setB.length; x++)
        B[x] = setB[x];

    //Убирание повторяющихся элементов в множестве (множество должно содержать уникальные элементы)
    if(A.length != uniq(A).length || B.length != (uniq(B).length)) {
        alert("Множества должны содержать только уникальные элементы");
        return -1;
    }

    //Определение количества (так как здесь биекция, должно быть одинаковым)
    if(A.length != B.length)
        return 0;

    //Определение биекции (если убирать из множеств пары, то не должно остаться ни одной)
    for(let x = 0; x < ratio.length; x++)
    {
        let idA = A.indexOf(ratio[x][reverse == 0 ? 0 : 1]);
        let idB = B.indexOf(ratio[x][reverse == 0 ? 1 : 0]);

        if(idA == -1 || idB == -1)
            return 0;

        A.splice(idA, 1);
        B.splice(idB, 1);
    }

    //Проверка, остались ли какие-то элементы
    if(A.length != 0 || B.length != 0)
        return 0;

    return 1;
}

function start() {
    //Получение html элементов
    let setAElement = document.getElementById("setA");
    let setBElement = document.getElementById("setB");
    let ratioElement = document.getElementById("ratio");
    let resultABElement = document.getElementById("resultAB");
    let resultBAElement = document.getElementById("resultBA");

    //Заполнение массивов
    let A = setAElement.value.split(" ");
    let B = setBElement.value.split(" ");
    let ratio = getPairElements(ratioElement);

    //Проверка на функцию обратнего отношения и прямого, а также ображение результата
    if (getResult(resultABElement, checkFunction(A, B, ratio, 0), "A->B") == -1) return getResult(resultBAElement, -1);
    if (getResult(resultBAElement, checkFunction(B, A, ratio, 1), "B->A") == -1) return getResult(resultABElement, -1);
}