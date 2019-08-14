// Range.START_TO_START (0) — Compares the starting point of the fi rst range to the
// starting point of the second.

// Range.START_TO_END (1) — Compares the starting point of the fi rst range to the end point
// of the second.

// Range.END_TO_END (2) — Compares the end point of the fi rst range to the end point of
// the second.

// Range.END_TO_START (3) — Compares the end point of the fi rst range to the starting point
// of the second.

// The compareBoundaryPoints() method returns –1 if the point from the fi rst range comes before
// the point from the second range, 0 if the points are equal, or 1 if the point from the fi rst range
// comes after the point from the second range.
var range1 = document.createRange();
var range2 = document.createRange();
var p1 = document.getElementById('p1');
range1.selectNodeContents(p1);
range2.selectNodeContents(p1);
range2.setEndBefore(p1.lastChild);
alert(range1.compareBoundaryPoints(Range.START_TO_START, range2)); //0
alert(range1.compareBoundaryPoints(Range.END_TO_END, range2)); //1