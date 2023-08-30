var chance = 0;

function takeTurn(c1) {
    var win;

    if (c1.value == "") {
        chance++;
        if (chance % 2 == 0) {
            c1.value = "O";
            win = check2("O");
        } else {
            c1.value = "X";
            win = check2("X");
        }

        if (win) {
            setTimeout(winner, 50);
            function winner() {
                alert("Player " + c1.value + " Won");
                chance = 0;
                for (var i = 1; i <= 9; i++) {
                    document.getElementById("b" + i).value = null;
                }
            }
            return;
        }
    } else {
        alert("You cant over write move !!");
    }
    if (chance == 9) {
        setTimeout(draw, 50);
        function draw() {
            alert(" Game Drawn !!!");
            chance = 0;
            for (var i = 1; i <= 9; i++) {
                document.getElementById("b" + i).value = null;
            }
        }
        return;
    }
}

function check(p1) {

    // -------------------------- horizontal 1 -------------------------- //
    winFlag = true;
    for (i = 1; i <= 3; i++) {
        x = document.getElementById("b" + i).value;
        if (x != p1) {
            winFlag = false;
            break;
        }
    }

    if (winFlag) {
        return true;
    }

    // -------------------------- horizontal 2 -------------------------- //
    winFlag = true;
    for (i = 4; i <= 6; i++) {
        x = document.getElementById("b" + i).value;
        if (x != p1) {
            winFlag = false;
            break;
        }
    }
    if (winFlag) {
        true;
    }

    // -------------------------- horizontal 3 -------------------------- //
    winFlag = true;
    for (i = 7; i <= 9; i++) {
        x = document.getElementById("b" + i).value;
        if (x != p1) {
            winFlag = false;
            break;
        }
    }
    if (winFlag) {
        return true;
    }

    // -------------------------- verticle 1 -------------------------- //
    winFlag = true;
    for (i = 1; i <= 7; i += 3) {
        x = document.getElementById("b" + i).value;
        if (x != p1) {
            winFlag = false;
            break;
        }
    }
    if (winFlag) {
        return true;
    }

    // -------------------------- verticle 2 -------------------------- //
    winFlag = true;
    for (i = 2; i <= 8; i += 3) {
        x = document.getElementById("b" + i).value;
        if (x != p1) {
            winFlag = false;
            break;
        }
    }
    if (winFlag) {
        return true;
    }

    // -------------------------- verticle 3 -------------------------- //
    winFlag = true;
    for (i = 3; i <= 9; i += 3) {
        x = document.getElementById("b" + i).value;
        if (x != p1) {
            winFlag = false;
            break;
        }
    }
    if (winFlag) {
        return true;
    }

    // -------------------------- Diagonal 1 -------------------------- //
    winFlag = true;
    for (i = 1; i <= 9; i += 4) {
        x = document.getElementById("b" + i).value;
        if (x != p1) {
            winFlag = false;
            break;
        }
    }
    if (winFlag) {
        return true;
    }

    // -------------------------- Diagonal 2 -------------------------- //
    winFlag = true;
    for (i = 3; i <= 7; i += 2) {
        x = document.getElementById("b" + i).value;
        if (x != p1) {
            winFlag = false;
            break;
        }
    }
    if (winFlag) {
        return true;
    }
}

function check2(p1) {
    const arr = [
        [1, 3, 1],
        [4, 6, 1],
        [7, 9, 1],
        [1, 7, 3],
        [2, 8, 3],
        [3, 9, 3],
        [1, 9, 4],
        [3, 7, 2],
    ];


    for (i = 0; i < 8; i++) {
        winFlag = true;
        for (j = arr[i][0]; j <= arr[i][1]; j += arr[i][2]) {
            x = document.getElementById("b" + j).value;
            if (x != p1) {
                winFlag = false;
                break;
            }
        }
        if (winFlag) {
            return true;
        }
    }
}