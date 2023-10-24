import { DataTypes, Model } from "sequelize";
import { newSequelize } from "../config";



export class FeedbackModel extends Model{};


FeedbackModel.init(
    {
feedback_id:{
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey:true
},
time:{
    type:DataTypes.INTEGER,
},
category:{
    type:DataTypes.STRING
},
detail:{
    type:DataTypes.STRING
}
    },
    {
        sequelize:newSequelize,
        createdAt:true,
        deletedAt:true,
        updatedAt:true,
        modelName:"feedback"
    }
)