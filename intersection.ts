// An intersection type combines two or more types
// to create a new type that has all properties of the existing types.
// The type order is not important when you combine types.

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}
type Employee = Identity & Contact;
// type Customer = BusinessPartner & Contact;
// type Employee = Identity & Contact;

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};
type Customer = BusinessPartner & Contact;

let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};
