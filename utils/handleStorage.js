const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null,pathStorage);
    },
    filename: function (req,file,cb) {
        //const ext = file.originalname.split(".").pop(); conseguir la extension
        const regex = /\s/g;
        const nameFile = file.originalname.replace(regex,"-");
        const filename = `${nameFile}`;
        cb(null,filename);
    }
});

const uploadMidleware = multer({storage});

module.exports = uploadMidleware;