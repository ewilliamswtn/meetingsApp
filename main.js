// ****************************
// *** Clarifying Pseudcode ***
// ****************************


let meetings = [];
let roomsBeingUsed = [];

meetings.push({start: 0, end: 2});
meetings.push({start: 2, end: 4});
meetings.push({start: 4, end: 6});
meetings.push({start: 6, end: 8});

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
let meetings = [];

// Array to hold active meetings. Each new meeting{} from meetings[] will attempt to replace
// each meeting being held in this array. If a meeting{} from meetings[] cannot replace an existing
// item in roomsBeingUsed[], only then will the meeting{} be pushed into roomsBeingUsed[], representing
// a new room being allocted.
let roomsBeingUsed = [];


// Hard coded list of meeting objects.
meetings.push({start: 0, end: 2});
meetings.push({start: 2, end: 4});
meetings.push({start: 4, end: 6});
meetings.push({start: 6, end: 8});



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

				// If the logic on line 82 is not passed, then we know the meeting represented by roomsBeingUsed[j]
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


// I did not implement a way to escape the inner loop (line 77) if the first condition it contains (line 82)
// is successful. In short, every single item in meetings[] will attempt to replace every single item in 
// roomsBeingUsed[], even if a successful replacement has already been made. Eventually, each item being
// considered from meetings[] will either make a replacement in roomsBeingUsed[], or add a new item to 
// roomsBeingUsed[]. Because the inner loop (line 77) is based on the length of roomsBeingUsed[], and 
// because roomsBeingUsed[] is constantly growing due to poor structure/implementation, this creates an 
// infite loop.

// Looking back:
// I should have tried to find a solution without using a loop within a loop, as this is always bad practice, 
// if it could be avoided. Because no other solution was apparent at the time, I thought I could make this
// work, which was preferable to having nothing. Because this was the approach I chose, I should have 
// seen that the loop would continue, regardless of the outcome.