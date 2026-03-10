/** @format */
type User = { 
    id: number;
    name: string;
}
type Mappings<T> = {
    [P in keyof T]: T[P];
}
type Persons = Mappings<User>