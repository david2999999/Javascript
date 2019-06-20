const data = {
    locations: [],

    get location() {
        return this._location;
    },

    set location(value) {
        this._location = value.trim();
        this.location.push(this._location);
    }
};

console.log(data.location);