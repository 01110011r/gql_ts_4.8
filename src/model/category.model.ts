import { DataTypes, Model, UUIDV4 } from "sequelize";
import { newSequelize } from "../config";



export class CategoryModel extends Model{};


CategoryModel.init(
{
    category_id:{
        type:DataTypes.UUID,
        defaultValue:UUIDV4,
        primaryKey:true
    },
title:{
    type:DataTypes.STRING
}
},
{
    sequelize:newSequelize,
createdAt:true,
deletedAt:true,
    updatedAt:true,
    modelName:"category"
}
);