
import { User } from "./interfaces"

export const formatAccountResponse = (user:User[])=>{

    return {
        accounts:user.map(data =>({
            _id:data._id,
            email:data.email,
            password:data.password,
            role:data.role
        }))
    }
    
}