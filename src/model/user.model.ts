import { DataTypes, Model, UUIDV4 } from "sequelize";
import { newSequelize } from "../config";



export class UserModel extends Model { };


UserModel.init(
    {
        user_id:{
            type:DataTypes.UUID,
            defaultValue:UUIDV4,
            primaryKey:true
        },
        firstname: {
            type: DataTypes.TEXT
        },
        lastname: {
            type: DataTypes.TEXT
        },
        username: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }


    },
    {
        sequelize: newSequelize,
        createdAt: true,
        deletedAt: true,
        updatedAt: true,
        modelName:"user"
    }
)