MARTIN SANTOS

En la consola de tu IDE coloca los siguientes pasos, para poder levantar el proyecto correctamente:

1. **Clonar el repositorio de Git Hub en tu PC:**

    ```
    git clone https://github.com/etec-integration-project/etec-pi-2024-frontend-Martin-Santos.git
    ```
2. **Navega al directorio del mismo proyecto:**
    ```
    cd .\frontend\ o cd ./fontend/
    ```
3. **Levanta el contenedor de docker del proyecto:**
    ```
    docker-compose up -d --build
    ```
4. **Coloca lo siguiente en tu navegador para poder ver la pag web del FrontEnd:**
    ```
    http://localhost:3000/
    ```
## **Parar el proyecto y los contenedores de Docker**

Para detenerlo simplemente coloca lo siguiente en tu consola de tu IDE donde se encuentra el proyecto:
    ```
    docker compose stop
    ```
Y por ultimo si deseas eliminar la imagen del proyecto para que no ocupe espacio en tu PC coloca el siguiente comando a continuacion del anterior:
    ```
    docker image prune
    ```
