# API compatible con Vercel

## 📦 Estructura

- `/api` contiene las funciones serverless
- `lib/db.js` configura la conexión a MySQL vía Sequelize
- `.env` (no incluido) define las variables de entorno

## 🛠️ Variables necesarias

Agrega esto en Vercel > Project Settings > Environment Variables:

- `DB_HOST`
- `DB_USER`
- `DB_PASS`
- `DB_NAME`

## 🚀 Despliegue

1. Subir el proyecto a GitHub
2. Importarlo en Vercel
3. Agregar las variables
4. Probar en: `https://tu-proyecto.vercel.app/api/test-env`