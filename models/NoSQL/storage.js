const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")

const StoragesScheme = new mongoose.Schema(
    {
        url:{
            type:String,
        },
        filename:{
            type:String,
        },
    },
    {
        timestamps:true, //TODO createdAt, updateAt
        versionKey: false,
    }
);

StoragesScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("storages", StoragesScheme)