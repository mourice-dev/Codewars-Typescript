/** @format */

class Customer {
    static() : boolean{
       return true
    }
}


class Supplier {
  status(): boolean {
    return true;
  }
}

type combine = Supplier | Customer;

function signContract(partner: combine): string {
    let massege: string;
    
    if (partner instanceof Customer) {
        massege = partner.static() ?'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        massege = partner.status() ? 'Sign a new contract the supplier' : 'Need to evaluate further';

    }
    
    return massege
}