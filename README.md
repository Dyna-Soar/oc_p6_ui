# OpenClassrooms Projet 6: Développez une interface utilisateur pour une application web Python

Le projet est une interface utilisateur qui affiche une page contant les meilleurs films d'une catégorie donnée. L'interface récupère les données des films par le biais d'une API REST, en local, contenu dans le dossier "back-end"

## Installation

1. Cloner ce dépôt de code à l'aide de la commande `$ git clone https://github.com/Dyna-Soar/oc_p6_ui.git` 
2. Rendez-vous depuis un terminal à la racine du répertoire oc_p6_ui avec la commande `$ cd oc_p6_ui`
3. Rendez-vous dans le dossier back-end contenant l'API avec la commande `$ cd back-end`
4. Installez les dépendances de l'API à l'aide de la commande `pipenv install` 
5. Créer et alimenter la base de données à l'aide de la commande `pipenv run python manage.py create_db`



# Exécution

1. Retourner à la racine du projet avec la commande `$ cd ..`
2. Rendez-vous dans le dossier "front-end" contenant l'HTML, le CSS et Javascript, en tapant la commande `$ cd front-end`
3. Ouvrir le fichier html contenant l'interface avec la commande `$ open films.html`
4. Retourner à la racine du projet en tapant `$ cd ..`
5. Rendez-vous dans le dossier back-end `$ cd back-end`
6. Démarrer le serveur avec `pipenv run python manage.py runserver`
7. Rendez-vous sur la page dans le browser et rafraichissez celle-ci