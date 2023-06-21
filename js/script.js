// const ticket=[
// {
//     id: 1,
//     vehicle: 'plane',
//     origin: 'Mashhad',
//     destination: 'Tehran',
//     date: '2023-06-11',
//     time: '16:30',
//     title: 'Iran Air',
//     capacity: 200,
//     price: 1200000
// },
// {
//     id: 1,
//     vehicle: 'plane',
//     origin: 'Yazd',
//     destination: 'Isfahan',
//     date: '2023-06-11',
//     time: '11:30',
//     title: 'Aseman Airlines',
//     price: 900000
// },
// {
//     id: 1,
//     vehicle: 'plane',
//     origin: 'Tehran',
//     destination: 'Shiraz',
//     date: '2023-06-11',
//     time: '20:00',
//     title: 'Caspian Airlines',
//     price: 1400000
// }
// ]
// const tickets = [...new Set(ticket.map((item)=> {return item}))]
// var myButton = document.getElementById("searchbut");
// myButton.addEventListener("click", function() {
//     e.preventDefault(); 
//     const origin = document.getElementById('origin').value;
//     const destination = document.getElementById('destination').value;
//     const departDate = document.getElementById('depart').value;
//     const returnDate = document.getElementById('return').value;
//     const adults = document.getElementById('adults').value;
//     const children = document.getElementById('children').value;
//     myButton.style.color = "red";
//     // Filter the tickets array based on the user's inputs
    

//     const outboundFlights = ticket.filter((item) => {
//         return (
//           item.origin.toLowerCase() === origin.toLowerCase() &&
//           item.destination.toLowerCase() === destination.toLowerCase() &&
//           item.date === departDate &&
//           item.capacity >=(adults+children)) ;
//       });
//       displayItem(outboundFlights)

//       if(returnDate != ''){
//         const inboundFlights = ticket.filter((item) => {
//             return (
//               item.origin.toLowerCase() === destination.toLowerCase() && // Swap origin and destination
//               item.destination.toLowerCase() === origin.toLowerCase() && // Swap origin and destination
//               item.date === returnDate &&
//               item.capacity >= (adults+children)) ;
//           });
//           displayItem(outboundFlights)
//       }

// });
//   const displayItem = (items)=>{
//     document.getElementById('results').innerHTML=items.map((item)=>{
//         var{title,origin,destination,price,hour}=item;
//         return(
//             `<div class='box'>
//                 <h2>${title}</h2>
//                 <p>${origin}</p>
//                 <p>${destination}</p>
//                 <p>${price} Toman</p>
//                 <p>${hour}</p>`
//         )

//     }).join('')
//   };
// displayItem(tickets);

var myButton = document.getElementById("searchbut");
myButton.addEventListener("click", function(e) {
    e.preventDefault(); 
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const departDate = document.getElementById('depart').value;
    const returnDate = document.getElementById('return').value;
    const adults = parseInt(document.getElementById('adults').value);
    const children = parseInt(document.getElementById('children').value);
    myButton.style.backgroundColor = "red";
    
    // Filter the tickets array based on the user's inputs
    const outboundFlights = ticket.filter((item) => {
        return (
          item.origin.toLowerCase() === origin.toLowerCase() &&
          item.destination.toLowerCase() === destination.toLowerCase() &&
          item.date === departDate &&
          item.capacity >= (adults + children)
        );
    });
    displayItem(outboundFlights);

    if (returnDate !== '') {
        const inboundFlights = ticket.filter((item) => {
            return (
                item.origin.toLowerCase() === destination.toLowerCase() && // Swap origin and destination
                item.destination.toLowerCase() === origin.toLowerCase() && // Swap origin and destination
                item.date === returnDate &&
                item.capacity >= (adults + children)
            );
        });
        displayItem(inboundFlights);
    } else {
        document.getElementById('results').innerHTML = '<p>No results found.</p>';
    }
});

const displayItem = (items)=>{
    document.getElementById('results').innerHTML=items.map((item)=>{
        var{title,origin,destination,price}=item;
        return(
            `<div class='box'>
                <h2>${title}</h2>
                <p>${origin}</p>
                <p>${destination}</p>
                <p>${price} Toman</p>
            </div>`
        )
    }).join('')
};


