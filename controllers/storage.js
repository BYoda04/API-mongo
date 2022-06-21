const fs = require("fs");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { storagesModel } = require("./../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req,res)=>{
    try {
        const data = await storagesModel.find({});
        res.send({data});
    } catch (error) {
        handleHttpError(res,"ERROR_GET_ITEMS")
    }
};

const getItem = async (req,res)=>{
    try {
        const { id } = matchedData(req);
        const data = await storagesModel.findById(id);
        res.send({data});
    } catch (error) {
        handleHttpError(res,"ERROR_GET_ITEMS")
    }
};

const createItems = async (req,res)=>{
    try {
        const { body, file } = req;
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data = await storagesModel.create(fileData)
        res.send({data})
    } catch (error) {
        handleHttpError(res,"ERROR_CREATE_ITEM")
    }
};

const deleteItems = async (req,res)=>{
    try {
        const { id } = matchedData(req);
        const dataFile = await storagesModel.findById(id);
        await storagesModel.delete({_id:id});
        //await storagesModel.findByIdAndDelete(id);
        const { filename } = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;
        //fs.unlinkSync(filePath); eliminar de manera permanente un archivo
        const data = {
            filePath,
            deleted:1
        }
        res.send({data});
    } catch (error) {
        handleHttpError(res,"ERROR_DELETE_ITEM")
    }
};

module.exports={ 
    getItems,
    getItem,
    createItems,
    deleteItems
};