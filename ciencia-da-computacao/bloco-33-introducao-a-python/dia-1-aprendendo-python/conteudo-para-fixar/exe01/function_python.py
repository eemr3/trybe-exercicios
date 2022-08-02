from typing import Final


def concat(*strings):
    # Equivalente a um ", ".join(strings), que concatena os elementos de um iterável em uma string utilizando um separador
    # Nesse caso a string resultante estaria separada por vírgula
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ', '
    return final_string


nome: Final = concat('Emerson', 'Rafael', 'Cris', 'Camila')
print(nome)

print(dict(name='Emerson', age=46, email='tests@email.com'))

obj = {'name': 'Rafael', 'age': 46, 'email': 'tests@email.com'}

print(obj)
info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}


def teste():
    info['age'] = 25


del info['nota']
teste()

print(info)
