/**
 * Created by nbasiri on 24/04/2017.
 */
const types = {
    FETCH_WEATHER: 'FETCH_WEATHER'
}

const typeValidator = {
    get(obj, prop) {
        if (obj[prop]) {
            return prop;
        } else {
            throw new TypeError(`${prop} is not a valid action type`);
        }
    }
}

module.exports = new Proxy(types, typeValidator);