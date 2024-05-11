const express = require('express');
const { Client } = require('appwrite');

const app = express();
const port = 3000;

const appwrite = Client({
    endpoint: '*.vercel.app', // Cambia esta URL según tu configuración de Appwrite
    projectId: '663d3a5c00062ac11fb2', // Cambia por tu ID de proyecto
    apiKey:'71988689f6180c1bf830644e9b4aa9621700454968782687eff18866fb9a242594475f9d450070bc3337594519be1bcf293c9ae7a6f0c710aea592ca24d84ea44afbfcb314967686b0a6e7312a343b3508ba3eddf4c51f7a996981e744cf462ad9ab388dace3fc3e07e606d98e57e511012e13e754a62aab53466d208d6b71bd' // Cambia por tu clave de API
});

// Ruta para obtener datos de una colección específica
app.get('/Usuarios', async (req, res) => {
    try {
        const { id } = req.params;

        // Obtener los documentos de la colección con el ID especificado
        const collectionDocs = await appwrite.database.listDocuments(
            'Usuarios', // Cambia por el ID de tu colección
            [], // Array de campos para devolver, vacío para devolver todos
            [], // Array de ordenamiento de resultados
            0,   // Número de documentos para omitir
            10   // Número de documentos para devolver (en este caso, 10)
        );

        res.json(collectionDocs); // Devolver los documentos como JSON
    } catch (error) {
        console.error('Error al obtener documentos de la colección:', error);
        res.status(500).json({ error: 'Error al obtener documentos de la colección' });
    }
});

app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
