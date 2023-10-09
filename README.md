# Examen Microservicios 

Alumno: Canesin Franco

## Paso 1: Crear la aplicación Node.js

Para esto utilice la biblioteca "nodemailer" que termite usar metodos para enviar correos,
si desea probar la aplicacion tiene que generar una "contraseña de aplicacion" y junto con su correo reemplazar en las secciones comentadas del codigo

´´´
npm install nodemailer
´´´

## Paso 2: Crear el Dockerfile


Se crea un Dockerfile para empaquetar esta aplicación en una imagen de Docker

## Paso 3: Crear el archivo docker-compose.yml

Se crea un archivo docker-compose.yml para desplegar cuatro contenedores a partir de la imagen que se generará con el Dockerfile.

## Paso 4: Crear y desplegar los contenedores

Primero se construye la imagen de la aplicación:

´´´

docker-compose build

´´´
Luego se despliega los contenedores:

´´´
docker stack deploy -c docker-compose.yml correo-app-stack
´´´


