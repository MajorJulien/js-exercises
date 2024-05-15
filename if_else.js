// https://javascript.info/ifelse

/* ------------------------------------------

if (une chaîne de caractères avec zéro)

Est-ce que alert sera affiché ?

if ("0") {
  alert( 'Hello' );
}

*/

// Oui, car il y a au moins un caractère dans le string

/* ------------------------------------------

Le nom de JavaScript

En utilisant la construction if..else, écrivez le code qui demande : ‘Quel est le nom “officiel” de JavaScript?’

Si le visiteur entre “ECMAScript”, alors éditez une sortie “Bonne réponse !”, Sinon – retourne “Ne sait pas ? ECMAScript!”

*/

let nameJavaScript = prompt('Quel est le nom “officiel” de JavaScript?');

if (nameJavaScript == 'ECMAScript') {
    console.log('Bonne réponse !');
} else {
    console.log("Ne sait pas ? ECMAScript!");
}

/* ------------------------------------------

Afficher le signe

En utilisant if..else, écrivez le code qui obtient un numéro via le prompt, puis l’affiche en alert :

1, si la valeur est supérieure à zéro,
-1, si inférieur à zéro,
0, si est égal à zéro.
Dans cet exercice, nous supposons que l’entrée est toujours un nombre.

*/

let number = prompt('number', 0);

if (number > 0) {
    console.log('1');
}

else if (number < 0) {
    console.log('-1');
}

else (number == 0) {
    console.log('0');
}

/* ------------------------------------------

Réécrire 'if' en '?'

Réécrivez ce if en utilisant l’opérateur conditionnel '?' :

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

*/

let result = (a + b < 4) ? 'Below' : 'Over';

/* ------------------------------------------

Réécrire 'if..else' en '?'

Réécrire ce if..else en utilisant plusieurs opérateurs ternaires '?'.

Pour plus de lisibilité, il est recommandé de diviser le code en plusieurs lignes.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

*/

let message = (login == 'Employee') ? 'Hello':
(login == 'Director') ? 'Greetings':
(login == '') ? 'No login' :
'';