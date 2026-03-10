/** @format */
// The following function is meant to log the city for a customer’s shipping

// address.However, the code is unsafe and may throw runtime errors due to missing or undefined properties.




// Without changing the logic of the function, ** fix the typing issues ** and ** make the
// function safe** using proper TypeScript types.

// ```tsx
interface Order {
  customer?: {
    name?: string
    address?: {
      city?: string
    };
  };
}
const logOrder = (order: Order) => {
  console.log(`Shipping to: ${order?.customer?.address?.city ?? "Unknow"}`);
};

logOrder({
  customer: {
    name: 'Jane',
    // address is missing
  }
});
