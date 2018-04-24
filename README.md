# Validate.json
Validador de estruturas json

Site: [https://validate-json.firebaseapp.com/](https://validate-json.firebaseapp.com/)

## Estrutura base
Estrutura padrão utilizada para validação do json de entrada

``` bash
{
    ...
    "carteirinha": {
        "type": "object",
        "required": false
    },
    "contrato": {
        "type": "array",
        "required": true,
        "node": {
            "CODIGO": {
                "type": "number",
                "required": true
            },
            "NOME": {
                "type": "string",
                "required": true
            }
        }
    }
    ...
}
```

## Estrutura de entrada

``` bash
{
    ...
    "carteirinha": null,
    "contrato": [
        {
        "CODIGO": "10032214",
        "NOME": "10032214"
        }
    ]
    ...
}
```

A saida da validação acima será:

![alt text](public/retorno_validate.png)