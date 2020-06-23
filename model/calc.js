const calculateGraph = require("./calculateGraph")

/**
 * INPUT: height, coeff. of restitution
 * OUTPUT: No. Of Bounces, Graph Data
 */
class Calc {
    constructor(height, coeff) {
        this.height = height
        this.coeff = coeff
    }

    output() {
        return calculateGraph(this.height, this.coeff)
    }
}

module.exports = Calc