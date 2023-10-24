import { GraphQLError } from "graphql";
import { CategoryModel, FeedbackModel, UserModel } from "../../model";
import { log } from "console";


export const resolvers = {
    Query: {
        users: async () => {
            try {
                log('1')
                const users = await UserModel.findAll({include:[CategoryModel, FeedbackModel]});
                log('2')
                log(users)
                return users;
            } catch (error: any) {
                console.log(error.message);
                return new GraphQLError(error.message, {
                    extensions: {
                        code: "INTERNAL_SERVER_ERROR",
                        http: {
                            status: 500
                        }
                    }
                })

            }
        },
        user: async (root: undefined, { user_id }: { user_id: string }) => {
            try {

                const user = await UserModel.findOne({ where: { user_id } });

                
                return user;

            } catch (error: any) {
                log(error.message);
                new GraphQLError(error.message, {
                    extensions: {
                        code: "INTERNAL_SERVER_ERROR",
                        http: {
                            status: 500
                        }
                    }
                })
            }
        }
    },




    Mutation: {
        createuser: async (root: undefined, { firstname, lastname, username, email, password }: { firstname: string, lastname: string, username: string, email: string, password: string })=>{
            try {
                const check=await UserModel.findOne({where:{email}});
                if(check){
                    return {
                        msg: "email or username already exists",
                        data: null
                    };
                };




                const newUser=await UserModel.create({
                    firstname,
                    lastname,
                    username,
                    email,
                    password
                });


                return {
                    msg:"create user",
                    data:newUser
                };



            } catch (error:any) {
                log(error.message);
                new GraphQLError(error.message,{
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