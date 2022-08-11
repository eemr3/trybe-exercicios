from mimetypes import init


class Mixador:
    def __init__(self, nome):
        self.nome = nome

        def __add__(self, Mixador):
            return (
                self.nome[0 : (len(self.nome) // 2)]
                + Mixador.nome[(len(Mixador.nome) // 2) : :]
            )

        def __str__(self):
            pass
