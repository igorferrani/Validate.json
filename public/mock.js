var base = {
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
}

var validate = {
    "carteirinha": null,
    "contrato": [
        {
        "CODIGO": "10032214",
        "NOME": "10032214"
        }
    ]
}