Librerías básicas que deberías instalar en el backend

npm install express mysql2 cors dotenv  
npm install --save-dev nodemon

express → framework del servidor

mysql2 → cliente para conectar MySQL

cors → para permitir peticiones desde el frontend

dotenv → para manejar variables de entorno (usuario/contraseña de DB, puerto, etc.)

nodemon → reinicia el servidor en desarrollo automáticamente

En package.json agregás:
"scripts": {
"dev": "nodemon src/index.js"
}

🔹 4. Flujo

Frontend llama → http://localhost:3000/api/ingresos

El request pasa a → routes/ingresos.routes.js

Llama al controlador → controllers/ingresos.controller.js

Este usa el modelo → models/ingreso.model.js

Que ejecuta la query en → config/db.js
