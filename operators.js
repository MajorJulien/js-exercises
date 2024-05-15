// https://javascript.info/operators

/* ------------------------------------------

Quelles sont les valeurs finales de toutes les variables a, b, c et d après le code ci-dessous ?

let a = 1, b = 1;

let c = ++a;
let d = b++;

*/

// a = 2
// b = 2
// c = 2
// d = 1

/* ------------------------------------------

Résultat d'affectation

Quelles sont les valeurs de a et x après le code ci-dessous ?

let a = 2;

let x = 1 + (a *= 2);

*/

// a = 4
// x = 5

/* ------------------------------------------

Les conversions de type

Quels sont les résultats de ces expressions ?

1: "10"
2: -1
3: 1
4: 2
5: 6
6: "9px"
7: "$45"
8: "2"
9: NaN
10: " -9 5"
11: "-14"
12: 1
13: NaN
14: -2

/* ------------------------------------------

Corrigez l'addition

Voici un code qui demande à l’utilisateur deux nombres et affiche leur somme.

Cela ne fonctionne pas correctement. La sortie dans l’exemple ci-dessous est 12 (pour les valeurs d’invite par défaut).

Pourquoi ? Réparez-le. Le résultat doit être 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

*/

let a = prompt(1, "First number?");
let b = prompt(2, "Second number?");

console.log(+a + +b);
