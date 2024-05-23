/* ------------------------------------------

Dernière valeur de boucle
importance: 3
Quelle est la dernière valeur affichée par ce code ? Pourquoi ?

let i = 3;

while (i) {
  alert( i-- );
}

*/

// REPONSE : 1

/* ------------------------------------------

Quelles valeurs affiche la boucle while ?
importance: 4
A votre avis, quelles sont les valeurs affichées pour chaque boucle ? Notez-les puis comparer avec la réponse.

Les deux boucles affichent-elles les mêmes valeurs dans l’alert ou pas ?

Le préfixe sous forme ++i :

let i = 0;
while (++i < 5) alert( i );
Le postfixe sous forme i++ :

let i = 0;
while (i++ < 5) alert( i );

*/

// REPONSE 1: 1 à 4
// REPONSE 2: 1 à 5

/* ------------------------------------------

Quelles valeurs sont affichées par la boucle "for" ?

Pour chaque boucle, notez les valeurs qui vont s’afficher. Ensuite, comparez avec la réponse.

Les deux boucles alert les mêmes valeurs ou pas ?

La forme postfix :

for (let i = 0; i < 5; i++) alert( i );
La forme préfix :

for (let i = 0; i < 5; ++i) alert( i );

*/

// REPONSE 1: 1 à 4
// REPONSE 2: 1 à 4

/* ------------------------------------------

Extraire les nombres pairs dans la boucle

Utilisez la boucle for pour afficher les nombres pairs de 2 à 10.

*/

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/* ------------------------------------------

Remplacer "for" par "while"
importance: 5
Réécrivez le code en modifiant la boucle for en while sans modifier son comportement (la sortie doit rester la même).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

*/

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

/* ------------------------------------------

Répéter jusqu'à ce que l'entrée soit correcte

Ecrivez une boucle qui demande un nombre supérieur à 100. Si le visiteur saisit un autre numéro, demandez-lui de le saisir à nouveau.

La boucle doit demander un numéro jusqu’à ce que le visiteur saisisse un nombre supérieur à 100 ou annule l’entrée/entre une ligne vide.

Ici, nous pouvons supposer que le visiteur ne saisit que des chiffres. Il n’est pas nécessaire de mettre en œuvre un traitement spécial pour une entrée non numérique dans cette tâche.

*/

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

/* ------------------------------------------

Extraire des nombres premiers

Un nombre entier supérieur à 1 est appelé un Nombre premier s’il ne peut être divisé sans reste par rien d’autre que 1 et lui-même.

En d’autres termes, n > 1 est un nombre premier s’il ne peut être divisé de manière égale par autre chose que 1 et n.

Par exemple, 5 est un nombre premier, car il ne peut pas être divisé sans reste par 2, 3 et 4.

Écrivez un code qui produit les nombres premiers dans l’intervall e 2 à n.

Pour n = 10, le résultat sera 2,3,5,7.

P.S. Le code devrait fonctionner pour n’importe quel n et aucune valeur fixe ne doit être codé en dur.

*/
