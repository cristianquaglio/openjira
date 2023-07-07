# Next.js OpenJira App

-   Descargar el proyecto

```
git clone https://github.com/cristianquaglio/openjira.git
```

-   Levantar la base de datos en Docker

```
docker-compose up -d
```

-   la URL de la base de datos es

```
mongodb://localhost:27017/entriesdb
```

-   Configurar las variables de entorno

```
mv .env.template .env
```

-   Reconstruir los módulos de node y levantar Next

```
yarn
yarn run dev
```

-   Llenar la base de datos con información de pruebas

```
    http://localhost:3000/api/seed
```

-   Ingresar a la app desde:

```
    http://localhost:3000
```
