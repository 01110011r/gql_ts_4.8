import { newSequelize } from "../config";
import { CategoryModel } from "./category.model";
import { FeedbackModel } from "./feedback.model";
import { UserModel } from "./user.model";


UserModel.hasMany(FeedbackModel,{
    foreignKey:"user_id"
});


CategoryModel.hasMany(FeedbackModel,{
    foreignKey:"category_id"
});


UserModel.hasMany(CategoryModel, {
    foreignKey:"user_id"
});

newSequelize.sync({alter:true});

export {UserModel, CategoryModel, FeedbackModel};