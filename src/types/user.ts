export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
}

export type UserData = Omit<User, 'id' | 'createdAt'>
