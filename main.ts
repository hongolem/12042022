let stred_randomizer = randint(1, 3)
let A = [0, 0]
let B = [4, 0]
let C = [4, 3]
let D = [0, 3]
let A2 = []
let B2 = []
let C2 = []
let D2 = []
Plotting()
function Plotting() {
    led.plot(A[0], A[1])
    led.plot(B[0], B[1])
    led.plot(C[0], C[1])
    led.plot(D[0], D[1])
}

basic.forever(function stred() {
    led.plotBrightness(stred_randomizer, stred_randomizer, 127)
})
