import { StatusRole } from "../domain";

interface User{
    id: number;
    name_user: string;
    email: string;
    password: string;
    role: StatusRole;
}

export const userData:User[] = [
    {
        id: 1,
        name_user: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
        role: StatusRole.admin
    },
    {
        id: 2,
        name_user: 'Jane Smith',
        email: 'janesmith@example.com',
        password: '654321',
        role: StatusRole.user
    },
    {
        id: 3,
        name_user: 'Alice Johnson',
        email: 'alicejohnson@example.com',
        password: '789012',
        role: StatusRole.user
    }
];