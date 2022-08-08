nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


# def maior_nome(arr):
#     maior = arr[0]
#     for nome in arr:
#         if len(nome) > len(maior):
#             maior = nome
#     return maior


def big_name(arr):
    return sorted(arr, key=len)[-1]


# print(maior_nome(nomes))

print(big_name(nomes))
