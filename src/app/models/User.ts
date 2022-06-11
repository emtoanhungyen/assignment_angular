export interface IUser{
    id? : number,
    name?: string,
    email: string,
    phone?: string|number,
    address?: string,
    password: string,
    role? : number
}