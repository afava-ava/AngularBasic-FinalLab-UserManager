export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address:{
        street: string,
        suite: string,
        city: string,
        zipCode: string,
    };
    company: string;
    avatar?: string;
}