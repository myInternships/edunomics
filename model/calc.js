

/**
 * INPUT: height, coeff. of restitution
 * OUTPUT: No. Of Bounces, Graph Data
 */
class Calc {
    constructor(height, coeff) {
        this.height = height
        this.coeff = coeff
        this.bounces = null
    }

    output() {
        return {
            "bounces": 0,
            "graph": []
        }
    }
}

module.exports = Calc