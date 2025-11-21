// Declare and initialize the attendee object
let attendee = {
  attendeeId: 'T001',
  name: 'Alice Smith',
  event: 'JavaScript Conference',
  ticketType: 'VIP',
  ticketPrice: 150.0
};

// Log the attendee's name
function logAttendeeName(att) {
  console.log(att.name);
}

// Log the attendee's ticket price
function logTicketPrice(att) {
  console.log(att.ticketPrice);
}

// Update the ticket type on the attendee object
function updateTicketType(att, newType) {
  att.ticketType = newType;
}

// Update the ticket price on the attendee object
function updateTicketPrice(att, newPrice) {
  att.ticketPrice = newPrice;
}

// Remove the event property from the attendee
function removeEventProperty(att) {
  delete att.event;
}

// Add a checkedIn property set to true
function addCheckedInProperty(att) {
  att.checkedIn = true;
}

// Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};