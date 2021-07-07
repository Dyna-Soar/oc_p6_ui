# OpenClassrooms Projet 6: Développez une interface utilisateur pour une application web Python

Le projet est une interface utilisateur qui affiche une page contant les meilleurs films d'une catégorie donnée. L'interface récupère les données des films par le biais d'une API REST, en local, contenu dans le dossier "back-end"

## Installation

1. Cloner ce dépôt de code à l'aide de la commande `$ git clone clone https://github.com/Dyna-Soar/oc_p6_ui.git` 


### Installation et exécution de l'application avec pipenv

1. Cloner ce dépôt de code à l'aide de la commande `$ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git` (vous pouvez également télécharger le code [en temps qu'archive zip](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR/archive/refs/heads/master.zip))
2. Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande `$ cd ocmovies-api-fr`
3. Installez les dépendances du projet à l'aide de la commande `pipenv install` 
4. Créer et alimenter la base de données à l'aide de la commande `pipenv run python manage.py create_db`
5. Démarrer le serveur avec `pipenv run python manage.py runserver`

# Exécution