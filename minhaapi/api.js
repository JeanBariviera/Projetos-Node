        const express = require("express")
        const app = express();
        app.get('/', (req,res) => {
            res.json(
                {
                    nome: "Jean Bariviera",
                    cpf: "999.888.777-66",
                    data_nascimento: "25-05-1996",
                    nome_mae: "Neli Bariviera"
                }
                )
            });
            const porta = 5000;
            app.listen(porta, () => {
                console.log(`a API está rodando em http://localhost:${porta}`);
            });
