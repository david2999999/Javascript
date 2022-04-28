var then = new Date(2010, 0, 1); // The 1st day of the 1st month of 2010
var later = new Date(2010, 0, 1, // Same day, at 5:10:30pm, local time
                    17, 10, 30);

var now = new Date(); // The current date and time
var elapsed = now - then; // Date subtraction: interval in milliseconds

later.getFullYear() // => 2010
later.getMonth() // => 0: zero-based months
later.getDate() // => 1: one-based days
later.getDay() // => 5: day of week. 0 is Sunday 5 is Friday.
later.getHours() // => 17: 5pm, local time
later.getUTCHours() // hours in UTC time; depends on timezone
later.toString() // => "Fri Jan 01 2010 17:10:30 GMT-0800 (PST)"
later.toUTCString() // => "Sat, 02 Jan 2010 01:10:30 GMT"
later.toLocaleDateString() // => "01/01/2010"
later.toLocaleTimeString() // => "05:10:30 PM"
later.toISOString() // => "2010-01-02T01:10:30.000Z"; ES5 only
