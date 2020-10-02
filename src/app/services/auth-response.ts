import { IUser } from '../User/user';


export interface AuthResponse {
    id: number,
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    token: string,
    user: IUser

}