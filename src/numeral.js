export class Numeral {
    ignore = [undefined, null, true, false, Infinity];

    constructor(input) {
        this.set(input);
    }

    set(input) {
        this.valueRaw = input;

        // @todo remove +/- from keyword checks
        if (this.ignore.includes(input)) {
            this.valueProcessed = null;
            return;
        }

        const converted = Number(input);
        if (!isNaN(converted)) {
            this.valueProcessed = converted;
            return;
        }

        // @todo percentages
        // remove punctuation
        // divide by 100

        // @todo Handle other strings e.g. 2,500

        this.valueProcessed = null;
    }

    raw() {
        return this.valueRaw;
    }

    value() {
        return this.valueProcessed;
    }

    isPositive() {
        return this.valueProcessed > 0;
    }

    isNegative() {
        return this.valueProcessed < 0;
    }

    // format(string) {
    //     return (new Formatter()).format(this, string);
    // }
}
