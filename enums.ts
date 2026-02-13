/** @format */

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}
console.log(isItSummer(1)); // true
console.log(isItSummer(Month.Jun)); // true
// enum ApprovalStatus {
//     draft,
//     submitted,
//     approved,
//     rejected
// };

// const request =  {
//     id: 1,
//     status: ApprovalStatus.approved,
//     description: 'Please approve this request'
// };

// if(request.status === ApprovalStatus.approved) {
//     // send an email
//     console.log('Send email to the Applicant...');
// }

//  enum Suit {
//      nshuti,
//      maurice,
//      regis,
//      eli
//  };

// function printSuit(name: Suit){
//     switch(name){
//         case Suit.nshuti:
//             console.log(Suit.nshuti);
//         break;
//         //  case 1:
//         //     console.log("maurice");
//         // break;
//         //  case 2:
//         //     console.log("regis");
//         // break;
//         //  case 3:
//         //     console.log("eli");
//         // break;

//     }
// }
// printSuit(Suit.nshuti);/** @format */
