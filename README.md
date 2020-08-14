 ## Etape 0 : Créer un programme d'IA très basic en python :
  - Créer un programme qui pause une question à l'utilisateur et en fonction de la réponse revoie un message prédéfini. Le programme doit exactement inclure:
  - Au moins une déclaration de variable
  - Un tableau (array)
  - Une itération
  - Une condition (if ...)

 ## Etape 1 : Quizz :

  - A quoi sert console.log ? cela sert à voir la console  ainsi que les logs pour permettre de faire du débug (equivalent de print en python)

  - A quoi sert var ? sert à déclarer une variable

  - Quelle est la différence avec const et let ? 
  let : permet de déclarer une variable dont la portée est celle du bloc courant
  const : permet de créer une constante nommée accessible uniquement en lecture (l'identifiant ne peut pas être réaffecté cette constante ne pourra pas être déclarée de nouveau)

  - Comment définir une fonction en JS ?
  une définition de fonction est construite avec le mot-clé "function" suivi par :
        -le nom de la fonction
        - une liste d'arguments à passer à la fonction, entre parenthèses et séparers pars des virgules.
        -les instructions JavaScript définissant la fonction, entre accolades{}

  - Quelle est la nouvelle syntaxe ?
  ECMAScript 6

  - A quoi sert document ?
  l'interface "document" représente n'importe quelle page web chargée dans le navigateur et sert de point d'entrée dans le contenu de la page web qui est l'arborescence DOM

  - Quelle est la différence avec window ?
  Windows est propre à la fenêtre de toutes les données venant des fenêtres (taille, temps,souris,ect..)

  - A quoi sert querySelector ?
  la méthode querySelector de l'interface "Document" retourne le premier element dans le document correspondant au sélecteur - ou groupe de sélecteurs ou null

  - Quelle est la différence avec getElementById et querySelectorAll ?
        -querySelectorAll renvoie une NodeList statique représentant une liste des éléments du document qui correspondent au groupe de sélecteurs spécifiés
        -getElementById de Document renvoie un objet Element représentant l'élément dont la propriété id correspond à la chaîne de caractères spécifiée.

  - A quoi sert addEventListener ?
  La méthode addEventListener d'EventTarget met en place une fonction à appeler chaque fois que l'événement spécifié est remis à la cible. Cette méthode fonctionne par ajout d'une fonction ou d'un objet implémentant EventListener à la liste des écouteurs d'évènement pour un type d'évènement spécifié dans la EventTarget

  - Siter d'autre events pouvant être écoutés ?
  UseCapture

  - A quoi sert innerText ?
  Node.innerText est une proprété représentant le contenu textuel d'un noeud. Utilisé en lecteur, il renvoie une approximation du texte que l'utilisateur ou obtiendrait s'il ou elle séletionnait le contenu d'un élément avec le curseur, et le copiait dans le presse-papier

  - Quel est la différence avec innerHTML et InsertAdjacentHTML ?
  Element.innerHTML de Element récupère ou définir la syntaxe HTML décrivant les descendants de l'élément.
  InsertAdjacentHTML analyse le texte spéficié en tant que HTML u XML et insère les noeurs résultants dans le DOM à la position spécifiée. les élements qui sont utilisé n'est pas réanalysé et les élements qu'il contient ne sont pas corrumpus (plus rapide et directe que innerHTML)

  - Qu'est que la concatenation ?
  concateténer est un mot générlament utilisé pour désigner le fait de rassembler deux chaine de caractères pour en former une nouvelle. L'opérateur en JS est + (attention le + entre deux nombre restera toujours une addition même en JS)

  - Quelle est la différence avec l'interpolation ?
  

  - Siter la methode qui permet de faire une itération ( elle n'est pas dans le programme )

 ## Etape 2 : Modification du programme :

  - Remplacer les "var" par les bons mots
  - Ecrire la fonction avec la nouvelle syntaxe
  - Utiliser une autre methode que querySelector
  - Remplacer la concatenation par une interpolation
  - Utiliser une autre methode que innerText

 ## Etape 3 : Utiliser ce dossier comme exemple pour créer votre page

  - Modifier les noms des id et des varaibles pour qu'elles correspondent à votre programme (s'assurer que ca marche toujours :) )
  - Convertir votre programme python en programme JS (Il devrait être dans la fonction "createMessage")
  - Faire un peut de CSS pour rendre ca Jolie

 ## Etape 4 : Mettre en ligne sur GitHhub

  - Sassurer que le nom du dossier finisse par ".github.io" (ca vous simplifiera la vie pour la suite :) )
  - Initialiser git sur ce projet
  - Mettre ce projet sur github
  - Mettre ce projet en ligne accessible à tous

