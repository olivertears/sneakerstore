export interface IRegistration {
    id: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    country: string,

    city?: string,
    address?: string,
}