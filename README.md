# TP-JSAU
JSAU webApp : Web application qui fait appel à l'Api Rest
JSAU Desktop : Application Desktop en Electron, qui fait appel à l'Api Rest
JSAU Serveur : Serveur web développé avec Expressjs, application Standalone
JSAU apiserver : Serveur REST pour simr des méthodes HTTP(GET, POST, PUT, DELETE)
Default : configuration du serveur Nginx
# Nginx
    Setting-up nginx avec la config du fichier Default, ce serveur ecoute les requêtes du port 80; si le chemin demandé
    est / la racine nginx nous redirige vers la Webapp si on demande /api nginx nous redirige vers notre apiserver.
# APISERVER
    Usage
    -----
    $ npm install // dependecies
    $ npm start // lancement de l'API REST sur le port 8085
    
# Desktop
    Usage
    -----
    $ npm install // dependecies
    $ npm start -- --debug // lancement en mode debug parce que les résultats sont communiqués en console

# Webapp
    Usage
    -----
    $ npm install // dependecies
    $ npm run dev // lancement du webapp sur le port 8081
    
# Serveur
    Usage
    -----
    $ npm install // dependecies
    $ npm start // lancement du serveur sur le port 3000
