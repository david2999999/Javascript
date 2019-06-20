const getPuzzle = () => {
    // Making a HTTP request
    const request = new XMLHttpRequest();
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3', false);
    request.send();

    if (request['readyState'] === 4 && request['status'] === 200) {
        const data = JSON.parse(request['responseText']);
        return data.puzzle;
    } else if (request['readyState'] === 4) {
        throw new Error('Things did not go well');
    }
};