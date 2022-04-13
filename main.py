stred_randomizer = [3, 2]
A1 = [0, 0]
B1 = [4, 0]
C1 = [4, 3]
D1 = [0, 3]
A2 = []
B2 = []
C2 = []
D2 = []

Plotting()

def Plotting():
    global A1, B1, C1, D1, A2, B2, C2, D2
    led.plot(A1[0], A1[1])
    led.plot(B1[0], B1[1])
    led.plot(C1[0], C1[1])
    led.plot(D1[0], D1[1])
    A2 = []
    B2 = []
    C2 = [C1[0] - stred_randomizer[0], C1[1] - stred_randomizer[1]] #4-3, 3-2
    D2 = []
    #led.plot(A2[0], A2[1])
    #led.plot(B2[0], B2[1])
    led.plot(C2[0], C2[1])
    #led.plot(D2[0], D2[1])

def stred():
    led.plot_brightness(stred_randomizer[0], stred_randomizer[1], 127)
basic.forever(stred)