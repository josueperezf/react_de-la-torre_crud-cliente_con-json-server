## crud cliente con router

proyecto general para crud, posee react router dom 6 y tailwind css
para correr el proyecto, se debe tener dos terminales
npm run dev
json-server --watch mi-db.json --port 4000

# plugins

1. npm install react-router-dom => para el enrutamiento

2. npm install formik --save => para manejar formulario

    *  si tenemos un formulario que agregue y edite al mismo tiempo, debemos colocarle la propiedad enableReinitialize = {true}

3. npm install yup --save => para las validaciones de los formularios

4. npm install -g json-server =>

    ES UN EXCELENTE EMULADOR DE BACKEND, para que funcione al 100 debemos:
    * instalarlo globalmente, en nuestro proyecto
    * crear un archivo con extension .json donde el guardara la data que maneje para el CRUD
    * ese archivo debe contener algo como esto {"clientes": []} , donde clientes es similar a la tabla donde va a gaurdar, si necesita mas tablas, crearmos otros como por ejemplo: { "clientes": [], "productos": [] }
    * debemos abrir otra terminar, donde correremos un comando
    * el comando es: json-server --watch mi-archivo.json --port 4000
    * el comando nos enseñara en que url podemos ver nuestro backend, ejemplo http://localhost:4000/clientes http://localhost:4000/productos


# notas de json-server

de los creadores de json-server, nos llega <https://my-json-server.typicode.com/> esta nos permite acceder a nuestro backend 'db.json', sin usar localhost, esto se logra subiendo nuestro codigo a un repositorio, en este caso github.


para usar my-json-server.typicode.com, debemos:

1. usar https://my-json-server.typicode.com/ como base
2. pegarle al final, nuestro nombre de usuario de github, seguido del nombre del respositorio, y el nombre del array que hayamos definido en 
https://my-json-server.typicode.com/josueperezf/react_de-la-torre_crud-cliente_con-json-server/clientes

recordemos que el archivo db.json esta en la raiz del proyecto y tiene esta data inicialmente {"clientes": []}