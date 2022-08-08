import random


def descobrir_qual_palavra(file_path):
    file = open(file_path)
    words = []
    for f in file:
        words.append(f.replace("\n", ""))

    word_selected = ""
    correct = ""
    count = 0
    word_selected = random.choice(words)
    scrambled_word = "".join(random.sample(word_selected, len(word_selected)))

    while count < 3:
        palpite = input(f"Qual é esta palavre {scrambled_word}: ")

        if palpite == word_selected:
            correct = f"Acerto a palavra {word_selected}"
            break

        correct = f"Perdeu! A palavra correta é {word_selected}"
        count += 1

    return print(correct)


descobrir_qual_palavra("nomes.txt")
