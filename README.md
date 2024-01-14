# Présentation de l'Application : Weather App

## Objectif de l'Application

L'application Weather App a été créée pour exploiter l'API REST
WeatherAPI afin de fournir facilement des informations
météorologiques actuelles et des prévisions sur plusieurs jours pour
une ville spécifique.

## Caractéristiques Principales

### Endpoints de l'API Utilisés :

L'application interagit avec les endpoints suivants de l'API :

Endpoint pour les Conditions Actuelles :
http://api.weatherapi.com/v1/current.json

Endpoint pour les Prévisions sur Plusieurs Jours :
http://api.weatherapi.com/v1/forecast.json

### Paramètres dans les Requêtes :

Les paramètres, tels que la clé d'API (apiKey), la ville
sélectionnée (city), le nombre de jours de prévision (days=5),
et la langue (lang=fr), sont inclus dans les requêtes HTTP
pour personnaliser les données reçues.

### Réponses JSON :

Les réponses des requêtes sont au format JSON, et
l'application utilise ces données structurées pour mettre à
jour dynamiquement l'interface utilisateur.

## Implémentation Technique

### Bibliothèque Axios pour les Requêtes HTTP :
Axios est utilisé pour effectuer les requêtes HTTP vers les
endpoints de l'API WeatherAPI. Les méthodes get() sont
utilisées pour récupérer les données.
