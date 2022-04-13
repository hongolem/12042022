let stred_randomizer = [randint(1, 3), randint(1, 3)]
let A1 = [0, 0]
let B1 = [4, 0]
let C1 = [4, 3]
let D1 = [0, 3]
let A2 = []
let B2 = []
let C2 = []
let D2 = []
Plotting()
function Plotting() {
    
    led.plot(A1[0], A1[1])
    led.plot(B1[0], B1[1])
    led.plot(C1[0], C1[1])
    led.plot(D1[0], D1[1])
    A2 = [0, 4]
    B2 = [1, 4]
    C2 = [C1[0] - stred_randomizer[0], C1[1] - stred_randomizer[1]]
    D2 = [3, 4]
    led.plot(A2[0], A2[1])
    led.plot(B2[0], B2[1])
    led.plot(C2[0], C2[1])
    led.plot(D2[0], D2[1])
}

basic.forever(function stred() {
    led.plotBrightness(stred_randomizer[0], stred_randomizer[1], 127)
})
