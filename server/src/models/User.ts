import {Schema, model} from "mongoose"

export interface Iuser {
    first_name:string
    last_name:string
    age:number
    city:string
}

const userSchema = new Schema<Iuser>({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    age:{type:Number , required:true},
    city:{type:String , required:true}

},{timestamps:true})

export const User = model<Iuser>("User" , userSchema)




// export const User = model<IUser>('User', userSchema);