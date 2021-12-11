## crud cliente con router

proyecto general para crud, posee react router dom 6 y tailwind css
para correr el proyecto, en localhost se debe tener dos terminales

1. npm run dev
2. json-server --watch mi-db.json --port 4000

a este proyecto se le deberia de colocar las variables de entorno con la terminacion '.local' no se coloca por que este es academico y deseo tener las variables de entorno tanto locales como de produccion en el repositorio
# vite

es quien nos permite crear el proyecto, el puede crear proyecto para diferentes herramientas como vue, vanilla, react, etc
comandos basicos

1. npm run dev      => para correr el proyecto modo desarrollo
2. npm run build    => crear el build de produccion
3. npm run serve    => manda a correr el proyecto localmente, pero simulando que es produccion, esto llama las variables entorno de produccion y demas, nota, es necesitaro antes de correr este comando, ejecutar npm run build 

estos comandos los podemos ver en el package.json

## variables de entorno en vite

Vite usa dotenv para cargar variables de entorno adicionales de los siguientes archivos en su

Las variables env cargadas también se exponen al código fuente de su cliente a través de .import.meta.env

Para evitar la filtración accidental de variables env al cliente, solo las variables con el prefijo VITE_ están expuestas a su código procesado por Vite. por ejemplo, el siguiente archivo:

    DB_PASSWORD=foobar
    VITE_SOME_KEY=123

NOTA: Si creamos un archivo .env, que su nombre termine con la palabra '.local', git lo va a ignorar y no subira al repositorio, ejemplo
.env.production.local

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


# json-server

Obtenga una API REST falsa completa con codificación cero en menos de 30 segundos (en serio)
Creado con <3 para desarrolladores front-end que necesitan un back-end rápido para prototipos y simulaciones.
# notas de json-server

de los creadores de json-server, nos llega <https://my-json-server.typicode.com/> esta nos permite acceder a nuestro backend 'db.json', sin usar localhost, esto se logra subiendo nuestro codigo a un repositorio, en este caso github.


para usar my-json-server.typicode.com, debemos:

1. usar https://my-json-server.typicode.com/ como base
2. pegarle al final, nuestro nombre de usuario de github, seguido del nombre del respositorio, y el nombre del array que hayamos definido en 
https://my-json-server.typicode.com/josueperezf/react_de-la-torre_crud-cliente_con-json-server/clientes

recordemos que el archivo db.json esta en la raiz del proyecto y tiene esta data inicialmente {"clientes": []}

!IMPORTANTE! si se usa my-json-server este emulara el crud en el json, pero realmente no eliminara la data del json, ya que esta esta en el repositorio y el mismo no le da permisos para hacer cambios en archivos alli, igual se podria investigar