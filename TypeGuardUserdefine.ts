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

function isSupplier(partner: any): partner is Supplier {
    return partner instanceof Supplier;
}

function isCustome(partner: any): partner is Customer {
  return partner instanceof Customer;
}

function signContract(partner: combine): string {
    
    let massege: string; 


    if (isSupplier(partner)) {
      massege = partner.status() ? 'Sign a new contract with the customer' : 'Credit issue';
    }
    if(isCustome(partner)){
        massege = partner.static() ? 'Sign a new contract with the customer' : 'Credit issue';
       
    }
    return massege;
}
