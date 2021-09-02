function solve(array, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let storedTickets = [];
    array.forEach(line => {
       let [destination, price, status] = line.split('|');
       price = Number(price);
       let ticket = new Ticket(destination, price, status);
       storedTickets.push(ticket);
    });

    if(sortingCriterion === 'destination') {
        storedTickets.sort((a, b) => (a.destination).localeCompare(b.destination));
    } else if(sortingCriterion === 'price') {
        storedTickets.sort((a,b) => a.price - b.price);
    } else if(sortingCriterion === 'status') {
        storedTickets.sort((a,b) => (a.status).localeCompare(b.status));
    }

    console.log(storedTickets);
}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status')