# Popcorntv Back-end App
![Banner](https://i.imgur.com/J7j0t9G.png)

A movie data showcase applicationt built using [MovieDB API](https://themoviedb.org) with NodeJs, Typescript, TypeORM, Docker and mySQL.

This project was built as a developer portolio project, with the initial objective to  solve the following challenge :  

> Build a web site that returns TMDb data, for that, build your own API to consume that data using MySQL in 3 days. 

## How to run this project:

Make sure to run this projet first before running the **[front-end project](https://github.com/DaniloGMattos/popcorntv-frontend)**

In the project directory:

### 1. Create a **.env** file and register your API Key

To create an API key you have to login on [TMDb website](https://themoviedb.org)

### 2. Download libs and start the docker container

```shell
yarn

docker-compose up
```

### 3. Run the migrations 

This command will create the SQL tables inside the container

```shell
yarn typeorm:migration run
```

### 4. Populate database 

Make a request to the following routes : 

```shell
  http://localhost:3333/movies/top/:page/:totalPages
```
This will save 1 page of top rated movies from TMDb to the docker container, for now I recomend setting a high number for the totalPages variables, because this might make your request slower and this request should nun only one time, because the objective of this request is solely to populate the database.
In the TMDb a request to the top rated movie will movies with the highest vote average first, so selecting the first page will return the "best movies" of all time acording to peoples votes.
### 5. Run the **[Front-end project](https://github.com/DaniloGMattos/popcorntv-frontend)**


## Features implemented today 
- Save TMDb top rated movies top container database
- List top rated movies
- Save movie genres
- Return a list of movie genres

## Futher development and points to improve

For this  project, after the 3 days of the challenge I intend to archive 100% of the [Figma design](https://www.figma.com/file/6RhE6cOOnR5rd9dCEKlhZP/Untitled?node-id=14%3A188), including improving the Figma Design itself. To archive this goal I need to : 

 - [] Fix table join with movie genre (today the table join is not working perfectly)
 - [] Create authentication system 
 - [] Use more data from the TMDb
 - [] Treat better request validations
 - [] Populate database automatically
