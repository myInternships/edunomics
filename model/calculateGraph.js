/**
 * height, coeff => { bounces, { height, time } }
 * @param {height} h0 
 * @param {coefficient of restitution} rho 
 */
function calculateGraph(h0, rho) {
    // var h0 = 5         // m / s
    var v = 0          // m / s, current velocity
    var g = 10         // m / s / s
    var t = 0          // starting time
    var dt = 0.001     // time step
    // var rho = 0.75     // coefficient of restitution
    var tau = 0.10     // contact time for bounce
    var hmax = h0      // keep track of the maximum height
    var h = h0
    var hstop = 0.01   // stop when bounce is less than 1 cm
    var freefall = true // state: freefall or in contact
    var t_last = -Math.sqrt(2 * h0 / g) // time we would have launched to get to h0 at t = 0
    var vmax = Math.sqrt(2 * hmax * g)

    var bounces = 0
    var H = []
    var T = []

    while (hmax > hstop) {
        if (freefall) {
            var hnew = h + v * dt - 0.5 * g * dt * dt
            if (hnew < 0) {
                t = t_last + 2 * Math.sqrt(2 * hmax / g)
                freefall = false
                t_last = t + tau
                h = 0
            }
            else {
                t = t + dt
                v = v - g * dt
                h = hnew
            }
        }
        else {
            t = t + tau
            bounces += 1
            vmax = vmax * rho
            v = vmax
            freefall = true
            h = 0
        }

        hmax = 0.5 * vmax * vmax / g
        H.push(h)
        T.push(t)
    }

    return {
        "bounces": bounces,
        "graph": {
            "height": H,
            "time": T
        }
    }
}

module.exports = calculateGraph