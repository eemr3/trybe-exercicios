def escada_nome(nome):
    str = ""

    for row in range(len(nome), 0, -1):
        str = nome[0:row]
        print(str)


if __name__ == "__main__":
    escada_nome("PEDRO")
