// https://fr.javascript.info/logical-operators

/* ------------------------------------------

Quel est le résultat de OR ?

Qu’est-ce que le code ci-dessous va sortir ?

alert( null || 2 || undefined );

*/

// REPONSE : 2

/* ------------------------------------------

Quel est le résultat des alertes OR ?

Qu’est-ce que le code ci-dessous va sortir ?

alert( alert(1) || 2 || alert(3) );

// REPONSE : 1 puis 2

*/

/* ------------------------------------------

Quel est le résultat de AND ?

Qu’est-ce que ce code va afficher ?

alert( 1 && null && 2 );

*/

// REPONSE : null

/* ------------------------------------------

Quel est le résultat des alertes AND ?

Qu’est-ce que ce code va afficher ?

alert( alert(1) && alert(2) );

*/

// REPONSE : 3

/* ------------------------------------------

Vérifiez la plage entre

Ecrivez une condition "if" pour vérifier que l’age est compris entre 14 et 90 ans inclus.

“Inclus” signifie que l’age peut atteindre les 14 ou 90 ans.

*/

// REPONSE : if (age >= 14 && age <= 90)

/* ------------------------------------------

Vérifiez à l'extérieur de la plage

Ecrivez une condition if pour vérifier que l’age n’est PAS compris entre 14 et 90 ans inclus.

Créez deux variantes: la première utilisant NOT !, La seconde – sans ce dernier.

*/

// VARIANTE 1 : if (!(age >= 14 && age <= 90))
// VARIANTE 2 : if (age < 14 || age > 90)

/* ------------------------------------------

Une question à propos de "if"

Lesquelles de ces alertes vont s’exécuter ?

Quels seront les résultats des expressions à l’intérieur de if (...) ?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

*/

// 1: Vrai et s'éxecute
// 2: Faux et ne s'éxecute pas
// 3: Vrai et s'écxecute

/* ------------------------------------------

Check the login

Écrivez le code qui demande une connexion avec prompt.

Si le visiteur entre "Admin", puis prompt pour un mot de passe, si l’entrée est une ligne vide ou Esc – affichez “Canceled”, s’il s’agit d’une autre chaîne de caractères – alors affichez “I don’t know you”.

Le mot de passe est vérifié comme suit :

S’il est égal à “TheMaster”, alors affichez “Welcome!”,
Une autre chaînede caractères – affichez “Wrong password”,
Pour une chaîne de caractères vide ou une entrée annulée, affichez “Canceled”.

Veuillez utiliser des blocs if imbriqués. Attention à la lisibilité globale du code.

Astuce: passer une entrée vide à un prompt renvoie une chaîne de caractères vide ''. En pressant ESC lors d’un prompt cela retourne null.

*/

let userName = prompt("Who's there?", "");

if (userName === "Admin") {
  let pass = prompt("Password?", "");

  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === "" || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
