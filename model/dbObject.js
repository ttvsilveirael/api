class dbObject {
    key;
    value;
    autoIncrement;
    pk;
    constructor(key, value, autoIncrement = false, pk = null) {
        this.key = key;
        this.value = value;
        this.autoIncrement = autoIncrement;
        this.pk = pk;
    }
}

module.exports = dbObject;