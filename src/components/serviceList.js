// contains a list of all the services for the services pages. 

let index = 0;

const indexList = () => {
    index += 1;
    return index;
};

export const services = [
    {id: indexList(), name:"Catering"},
    {id: indexList(), name:"Home Care"},
    {id: indexList(), name:"Elderly Care"},
    {id: indexList(), name:"Animal Care"},
    {id: indexList(), name:"Shuttle Services"},
];

export const classes = [

    {id: indexList(), name:"Spanish"},
    {id: indexList(), name:"English"},
    {id: indexList(), name:"German"},
    {id: indexList(), name:"French"},
    {id: indexList(), name:"Painting"},
    {id: indexList(), name:"Sculpting"},
    {id: indexList(), name:"Design"},
    {id: indexList(), name:"IT Services"},
    {id: indexList(), name:"Networking"},
];

export const equipment = [
    {id: indexList(), name:"Tables"},
    {id: indexList(), name:"Seating"},
    {id: indexList(), name:"Catering Equipment"},
    {id: indexList(), name:"Stage Equipment"},
];

export const spaces = [
    {id: indexList(), name:"Indoor Dining"},
    {id: indexList(), name:"Indoor Recreation Hall"},
    {id: indexList(), name:"Outdoor Dining"},
    {id: indexList(), name:"Outdoor Reacreation Hall"},
    {id: indexList(), name:"Wedding Venue"},
    {id: indexList(), name:"Party Venue"},
];
