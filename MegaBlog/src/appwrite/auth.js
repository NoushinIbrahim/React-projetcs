import conf from "../confg.js";
import {Client, Account, ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(confappwriteurl).setProject(
          conf.appwriteprojectid
        );
        this.account = new Account(this.client);
    }

    async  createAcount ({email, password, name}){
        try {
            const userAcount = await this.account.create(ID.unique(),email, password, name);
            if (userAcount) {
                return this.loginUser({email, password});
                // call another method
            }else{
                return userAcount; 
            }
        } catch (error) {
            throw error;
        }
    }

    async loginUser({email, password}){
        try {
           return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            
        }
    }

    async getCurrentUser(){
        try {
           return await this.account.get();
        } catch (error) {
            throw error;
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authservice = new AuthService();

export default authservice;

