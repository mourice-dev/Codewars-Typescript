/** @format */

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
    
    if ('static' in partner) {
        massege = partner.static() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else 
    {
        massege = partner.status() ? 'Sign a new contract with the customer' : 'Credit issue';

    }
    return massege
}
