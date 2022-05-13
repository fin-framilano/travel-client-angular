import { RoleEnum } from "../enum/role-enum";

export interface User {
    id: number,
    password: string,
    mail: string,
    role: RoleEnum
}