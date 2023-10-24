import { log } from "console"
import { GraphQLError } from "graphql";
import { CategoryModel } from "../../model";

export const resolvers={
  Query:{
    categoryes:async()=>{
        try {
            return await CategoryModel.findAll();
        } catch (error:any) {
            log(error.message);
            return new GraphQLError(error.message,{
                extensions:{
                    code:"INTERNAL_SERVER_ERROR",
                    http:{
                        status:500
                    }
                }
            })
        }
    }
  },



  Mutation:{
    addcategory:async(root:undefined, {title}:{title:string})=>{

        try {
            const inspect=await CategoryModel.findOne({where:{title}});


            if(inspect || !title.trim())
            return {msg:`${title} category already exists!`};

            const newCategory=await CategoryModel.create({title});

            return {msg:"ok", data:newCategory}

        } catch (error:any) {
            log(error.message);
            return new GraphQLError(error.message,{
                extensions:{
                    code:"INTERNAL_SERVER_ERROR",
                    http:{
                        status:500
                    }
                }
            })
        }
    }





  }
}