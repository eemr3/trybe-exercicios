valores = [4, 3, 2, 5, 7]


# def calc_media(arr):
#     total = 0
#     for number in numbers:
#         total += number
#     return total / len(numbers)


def calc_media(arr):
    return sum(arr) / len(arr)


result = calc_media(valores)
print(result)
