stred_randomizer = randint(1, 3)
A = [0, 0]
B = [4, 0]
C = [4, 3]
D = [0, 3]
A2 = []
B2 = []
C2 = []
D2 = []

Plotting()

def Plotting():
    led.plot(A[0], A[1])
    led.plot(B[0], B[1])
    led.plot(C[0], C[1])
    led.plot(D[0], D[1])

def stred():
    led.plot_brightness(stred_randomizer, stred_randomizer, 127)
basic.forever(stred)