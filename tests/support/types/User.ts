export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName?: string;
    age?: number;
    gender?: string;
    email: string;
    phone?: string;
    username: string;
    password?: string;
    birthDate?: string;
    image?: string;
    bloodGroup?: string;
    height?: number;
    weight?: number;
    eyeColor?: string;
    hair?: {
        color: string;
        type: string;
    };
    address?: {
        address: string;
        city: string;
        state: string;
        stateCode?: string;
        postalCode: string;
        country: string;
    };
    university?: string;
    company?: {
        department?: string;
        name?: string;
        title?: string;
    };
    role?: string;
}

export interface UsersListResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}

export interface DeleteUserResponse extends User {
    isDeleted: boolean;
    deletedOn: string;
}

