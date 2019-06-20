function House(bedrooms, bathrooms, numSqft) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}

var firstHouse = new House(2,2,100);


console.log(firstHouse.bedrooms);
console.log(firstHouse.bathrooms);
console.log(firstHouse.numSqft);