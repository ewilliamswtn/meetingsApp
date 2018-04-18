// ****************************
// *** Clarifying Pseudcode ***
// ****************************


let meetings = [];
let roomsBeingUsed = [];

for (i = 0; i < meetings.length; i++) {
	if (roomsBeingUsed.length == 0) {
		roomsBeingUsed.push(meetings[i]);
	} else {
		for (j = 0; j < roomsBeingUsed.length; j++) {
			if (meetings[i].start >= roomsBeingUsed[j].end) {
				roomsBeingUsed[j] = meetings[i];
			} else {
				roomsBeingUsed.push(meetings[i]);
			}
		}
	}
}

console.log(roomsBeingUsed.length);










// ***************************************
// *** Clarifying Pseudcode, Commented ***
// ***************************************


// List of total meetings for today, stored as objects with 'start' and 'end' properties.
// e.g. meeting[0] = {start:0, end: 2}
let meetings = [];

// Array to hold active meetings. Each new meeting{} from meetings[] will attempt to replace
// each meeting being held in this array. If a meeting{} from meetings[] cannot replace an existing
// item in roomsBeingUsed[], only then will the meeting{} be pushed into roomsBeingUsed[], representing
// a new room being allocted.
let roomsBeingUsed = [];

// Iterate over each meeting for today.
for (i = 0; i < meetings.length; i++) {

	// This is to avoid attempting to iterate over roomsBeingUsed[] if it is empty. 
	// If there are no items in roomsBeingUsed[], we simply push the first item from meetings[]
	// into roomsBeingUsed[].
	if (roomsBeingUsed.length == 0) {
		roomsBeingUsed.push(meetings[i]);
	} 

	// This segment of the conditional will trigger once there is at least one meeting{} in roomsBeingUsed[].
	else {

		// Iterate over every item in RoomsBeingUsed[].
		for (j = 0; j < roomsBeingUsed.length; j++) {

			// Compare the start time property of meeting[i] to the end time property of roomsBeingUsed[j].
			// If meeting[i].start is greater than roomsBeingUsed[j].end, then we know the two will
			// not conflict...
			if (meetings[i].start >= roomsBeingUsed[j].end) {

				// ...so we can put them in the same room. This is accomplished by replacing
				// the item from roomsBeingUsed[] with the item from meetings[].
				roomsBeingUsed[j] = meetings[i];

				// If the condition on line 68 is not passed, then we know the meeting represented by roomsBeingUsed[j]
				// has not ended, so we must find a new room for the meeting represented by meeting[i].
			} else {
				roomsBeingUsed.push(meetings[i]);
			}
		}
	}
}

// This array's length represents the maximum number of rooms having been allocated.
console.log(roomsBeingUsed.length);










// **********************
// *** Errors Summary ***
// **********************


// In the algorithm above, every item in meetings[] attempts to replace every item in roomsBeingUsed[]. 
// This process should stop once a successful replacement has been made. This does not happen in my
// implementation. A new meeting{} from meetings[] will continue to compare itself to meeting{} objects
// in roomsBeingUsed[] even after it has made a successful replacement. In addition, every single time an
// item from meetings[] does not replace an item from roomsBeingUsed[] will result in adding a new meeting{}
// item to roomsBeingUsed[]. This should only occur once no replacement could be found in the entire array, as 
// opposed to each individual time a replacement fails. This results in roomsBeingUsed[] infinitely growing. 
// Because the loop on line 63 is based on the size of roomsBeingUsed[], this creates an infinite loop.

// While I'm addressing errors, I would be remiss if I didn't mention that a loop within a loop is never 
// optimal, and a more elegant solotution should have been established.