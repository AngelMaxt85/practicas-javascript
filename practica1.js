let finalpiso = 10;
let initial = 1;
let piso = 0;
let asterisco = "";



for (initial; initial <= finalpiso; initial++){
    for (piso; piso <= finalpiso; piso++){
        console.log(asterisco.padEnd(piso, "*"));
    }
}