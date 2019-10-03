const multer = require('multer');
const path = require('path');



module.exports = {
    //como o multer vai armazenar os arquivos da aplicação
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        /*file: recebe os dados relacionados ao arquivo
        cb é a callback que é chamada assim que o nome do arquivo estiver pronto */
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            //file.fieldname pega o nome do arquivo, path.extname pega a extensão do arquivo
            cb(null, `${name}-${Date.now()}${ext}`)
        },
    }),
};