numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def minimum(numbers):
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller


def menor_numero(arr):
    return min(arr)


print(minimum(numeros))
print(menor_numero(numeros))
