# def summation(limit):
#     total = 0
#     for number in range(1, limit + 1):
#         total += number
#     return total


def summation(limit):
    return sum(range(1, limit + 1))


print(summation(5))
