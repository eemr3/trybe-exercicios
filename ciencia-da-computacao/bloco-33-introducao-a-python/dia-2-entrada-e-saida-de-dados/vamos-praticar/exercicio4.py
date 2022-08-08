import json


def read_json_file(file_path):
    categ = set()
    with open(file_path) as file:

        # content = file.read()
        livros = json.load(file)

        for livro in livros:

            if len(livro["categories"]) > 0 and livro["categories"] != "":
                for cat in livro["categories"]:
                    categ.add(cat)
            # categ.add(livro["categories"])
    return categ


print(read_json_file("livros.json"))
