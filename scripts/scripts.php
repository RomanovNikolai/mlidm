<?php

function showMatrix($matrix){
    $sizeX = count($matrix);
    $sizeY = count($matrix[0]);

    for($y = 0; $y < $sizeY; $y++){
        for($x = 0; $x < $sizeX; $x++){
            echo $matrix[$x][$y].' ';
        }
        echo "<br>";
    }
}

function sumMatrix($A, $B) {
    $sizeX = count($A);
    $sizeY = count($A[0]);

    $C = array($sizeX);
    for($x = 0; $x < $sizeX; $x++){
        $C[$x] = array($sizeY);
        for($y = 0; $y < $sizeY; $y++){
            $C[$x][$y] = $A[$x][$y] + $B[$x][$y];
        }
    }

    return $C;
}

function disjunctionsMatrix($A){
    $sizeX = count($A);
    $sizeY = count($A[0]);

    $C = array($sizeX);
    for($x = 0; $x < $sizeX; $x++){
        $C[$x] = array($sizeY);
        for($y = 0; $y < $sizeY; $y++){
            $C[$x][$y] = $A[$x][$y] != 0 ? 1 : 0;
        }
    }
    return $C;
}


function multiplyMatrix($A, $B)
{
    $sizeX = count($B);
    $sizeY = count($A[0]);

    $C = array($sizeX);
    for($x = 0; $x < $sizeX; $x++){
        $C[$x] = array($sizeY);
        for($y = 0; $y < $sizeY; $y++){
            $C[$x][$y] = 0;
            for($i = 0; $i < $sizeX; $i++){
                $C[$x][$y] += $A[$i][$y] * $B[$x][$i];
            }
        }
    }

    return $C;
}

function powMatrix($matrix, $power) {
    $poweredMatrix = array(count($matrix));
    for($x = 0; $x < count($matrix); $x++){
        $poweredMatrix[$x] = array(count($matrix[$x]));
        for($y = 0; $y < count($matrix[$x]); $y++) {
            $poweredMatrix[$x][$y] = $matrix[$x][$y];
        }
    }

    for($x = 0; $x < $power - 1; $x++)
        $poweredMatrix = multiplyMatrix($poweredMatrix, $matrix);

    return $poweredMatrix;
}

function getReachMatrix($matrix) {
    $sizeMatrix = count($matrix);
    $reachMatrix = array(count($matrix));
    for($x = 0; $x < count($matrix); $x++){
        $reachMatrix[$x] = array(count($matrix[$x]));
        for($y = 0; $y < count($matrix[$x]); $y++) {
            $reachMatrix[$x][$y] = 0;
        }
    }

    for($x = 0; $x < $sizeMatrix; $x++)
        $reachMatrix = sumMatrix($reachMatrix, powMatrix($matrix, $x + 1));

    return disjunctionsMatrix($reachMatrix);
}

$message = $_POST['matrix'];
$start = $_POST['start'];
$end = $_POST['end'];

$matrixElements = preg_split('/[ \n]/', $message);
$sizeMatrix = sqrt(count($matrixElements));

if(($start >= 0 && $start < $sizeMatrix) && ($end >= 0 && $end < $sizeMatrix)) {
    $isFormat = true;
    for ($x = 0; $x < $sizeMatrix * $sizeMatrix; $x++) {
        if ($matrixElements[$x] != '0' && !ctype_digit($matrixElements[$x]) && !is_int($matrixElements[$x])) {

            $isFormat = false;
            break;
        }
    }

    if ($isFormat) {
        if ($sizeMatrix - (int)$sizeMatrix == 0) {
            $matrix = array($sizeMatrix);
            for ($x = 0; $x < $sizeMatrix; $x++) {
                $matrix[$x] = array($sizeMatrix);
                for ($y = 0; $y < $sizeMatrix; $y++)
                    $matrix[$x][$y] = $matrixElements[$x + $y * $sizeMatrix];
            }
            echo "Матрица достижимости: <br>";
            showMatrix(getReachMatrix($matrix));

        } else {
            echo "Матрица должна быть квадратной.";
        }
    } else {
        echo "Не верный формат данных. Таблица должна состоять из звёздочек и натуральных чисел.";
    }
} else {
    echo "Номера начальной или конечной точки введены не верно. <br> Они должны быть больше или равны 0 и меньше размера матрицы.";
}