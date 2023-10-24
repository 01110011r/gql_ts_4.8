import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {schema} from "./modules";
import "dotenv/config";
import { newSequelize } from "./config";



const running=async():Promise<void>=>{

newSequelize.authenticate().then(()=>{
    console.log('db connection established');
    
}).catch((err:any)=>console.log(err.message));

const server =new ApolloServer({
    schema
});

const port:number | undefined=Number(process.env.PORT) || 7000

const {url}=await startStandaloneServer(server,{
    context:async({req})=>({token:req.headers.token}),
    listen:{port}
});



console.log(`🚀 Server ready at ${url}`);
};



running();