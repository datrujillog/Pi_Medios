## Requerimientos de la Prueba

# 1. Administrar Ventas

    * Crear venta = `Listo`
    * Actualizar venta = `Listo`
    * Eliminar venta   = `Listo`
    * Listar ventas = `Listo`
        * Filtrar ventas por fecha  y usuario que la realizó = `Falta`
 
 # 2. Administrar Productos

    * Crear productos = `Listo`
    * Listar productos = `Listo`


 # 3. Administrar Usuarios

    * Crear usuarios  = `Listo`
    * Listar usuarios = `Listo`
    * Borrar usuarios = `Listo`
    * Asignar rol a un usuario = `Listo`
    * Crear roles    = `Listo`
 
 # 4. Cierres Diarios

    * Entregar el valor total de ventas en un día específico = `Listo`

# 5. Balance Mensual

    * Entregar el valor total de ventas en un mes específico = `Listo`



## Implementar UI básica

 * Administrador productos: Crear producto, Listar productos = `Listo`
 * Administrar usuarios:  Crear usuarios, Listar usuarios, Asignar un rol a un usuario
 * Administrar Ventas: Crear venta, Listar ventas


## Uso local

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/datrujillog/Pi_Medios.git
   cd Pi_Medios
   ```
2. Instalar las dependencias del proyecto:

   ```bash
   npm install
   ```

   3. Ejecutar migraciones prisma para crear la base de datos
    ```bash
    npx prisma migrate dev
    ```
    4. Ejecutar wl comando para prisma de migraciones para inicializar la base de datos
    ```bash
    npx prisma migrate dev
    ```
    5. Ejecutar el comando para iniciar el servidor
    ```bash
    npm run dev
    ```
    6. Abrir el navegador y acceder a la url `http://localhost:5000


    ## Ejecutar frontend en React

    1. Ingresar a la carpeta cliet
    ```bash
    cd client
    ```
    2. Instalar las dependencias del proyecto:
    ```bash
    npm install
    ```
    3. Ejecutar el comando para iniciar el servidor
    ```bash
    npm start
    ```
    4. Abrir el navegador y acceder a la url `http://localhost:3000
    ``
    

    - Para Ejecutar el proyecto En docker hay que agregar estos comandos en el packajson para que se cren las migraciones 
    ```bash 
         "dev": "npx prisma migrate dev --name initial && node ./src/server/server.js",
         "start": " prisma migrate dev --create-only && npx prisma migrate deploy && npx prisma generate && node ./src/server/server.js",
    ```
    
   

   