'use strict';

/*
Правильні назви: 
1)  FD, FM або FE. 
2) "20"
3) 2 цифри
4) нічого або "- цифра/и"
*/

const arrGroups = [
    'FE2021-5',
    'Fe2020-2',
    'FD2021',
    'fD2022-1',
    'FE2020-3',
    'FD2020/2',
    'fe2021-3',
    'FD2020$5',
    'FE2008-52',
    'FU2008-3',
    'Fm2008-23',
    'FM2022-1',
];

function checkCorrectName(groups) {
    const regExpr = /^(F[DME]|f[dme])(20[0-9]{2})(-\d+)?$/;

    return groups.map((name) =>
        regExpr.test(name) ? `Success: ${name}` : `Error: ${name}`,
    );
}

const result = checkCorrectName(arrGroups);

for (const group of result) {
    console.log(group);
}
