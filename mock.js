var base = {
    "acesso": {
        "type": "object",
        "required": true,
        "node": {
            "0": {
                "type": "number",
                "required": true
            },
            "1": {
                "type": "number",
                "required": true
            },
            "2": {
                "type": "number",
                "required": true
            },
            "3": {
                "type": "number",
                "required": true
            },
            "4": {
                "type": "number",
                "required": true
            },
            "5": {
                "type": "number",
                "required": true
            },
            "6": {
                "type": "number",
                "required": true
            },
            "7": {
                "type": "number",
                "required": true
            },
            "8": {
                "type": "number",
                "required": true
            },
            "9": {
                "type": "number",
                "required": true
            },
            "10": {
                "type": "number",
                "required": true
            },
            "11": {
                "type": "number",
                "required": true
            },
            "12": {
                "type": "number",
                "required": true
            },
            "13": {
                "type": "number",
                "required": true
            },
            "14": {
                "type": "number",
                "required": true
            },
            "15": {
                "type": "number",
                "required": true
            },
            "16": {
                "type": "number",
                "required": true
            },
            "17": {
                "type": "number",
                "required": true
            },
            "18": {
                "type": "number",
                "required": true
            },
            "20": {
                "type": "number",
                "required": true
            },
            "21": {
                "type": "number",
                "required": true
            },
            "29": {
                "type": "number",
                "required": true
            },
            "30": {
                "type": "number",
                "required": true
            },
            "31": {
                "type": "number",
                "required": true
            },
            "32": {
                "type": "number",
                "required": true
            },
            "33": {
                "type": "number",
                "required": true
            },
            "34": {
                "type": "number",
                "required": true
            },
            "38": {
                "type": "number",
                "required": true
            },
            "39": {
                "type": "number",
                "required": true
            },
            "42": {
                "type": "number",
                "required": true
            },
            "89": {
                "type": "number",
                "required": true
            }
        }
    },
    "beneficiarios": {
        "type": "array",
        "required": true,
        "node": {
            "AREA_ATUACAO": {
                "type": "string",
                "required": true
            },
            "ATENDIMENTO": {
                "type": "string",
                "required": true
            },
            "BAIRRO": {
                "type": "string",
                "required": true
            },
            "CARENCIAS": {
                "type": "array",
                "required": true,
                "node": {
                    "CARENCIA": {
                        "type": "string",
                        "required": true
                    },
                    "TIPO_SERVICO": {
                        "type": "string",
                        "required": true
                    }
                }
            },
            "CARTAO_CONTATO1": {
                "type": "string",
                "required": true
            },
            "CARTAO_CONTATO2": {
                "type": "string",
                "required": true
            },
            "CARTAO_CONTATO3": {
                "type": "string",
                "required": true
            },
            "CARTAO_CONTATO4": {
                "type": "string",
                "required": true
            },
            "CARTAO_CONTATO5": {
                "type": "string",
                "required": true
            },
            "CART_CORTEXTO": {
                "type": "string",
                "required": true
            },
            "CART_DATA_EMISSAO": {
                "type": "string",
                "required": true
            },
            "CART_DESABILITADO": {
                "type": "boolean",
                "required": true
            },
            "CART_IMG": {
                "type": "string",
                "required": true
            },
            "CART_IMG_VER": {
                "type": "string",
                "required": true
            },
            "CART_OBS": {
                "type": "string",
                "required": true
            },
            "CART_VALID": {
                "type": "string",
                "required": true
            },
            "CART_VIA": {
                "type": "string",
                "required": true
            },
            "CEP": {
                "type": "string",
                "required": true
            },
            "CIDADE": {
                "type": "string",
                "required": true
            },
            "COBERTURA": {
                "type": "string",
                "required": true
            },
            "COBERTURA_PARCIAL": {
                "type": "string",
                "required": true
            },
            "CODIGO_FUNCIONARIO": {
                "type": "string",
                "required": true
            },
            "COMPLEMENTO": {
                "type": "string",
                "required": true
            },
            "CONTRATANTE": {
                "type": "string",
                "required": true
            },
            "CONTRATANTE_COMPLETO": {
                "type": "string",
                "required": true
            },
            "CONTRATO_EMPRESA_CONTRATANTE": {
                "type": "string",
                "required": true
            },
            "CONVENIO_ANS": {
                "type": "string",
                "required": true
            },
            "CONVENIO_DESCRICAO_ANS": {
                "type": "string",
                "required": true
            },
            "CONV_ABRAN": {
                "type": "string",
                "required": true
            },
            "CONV_ABRAN_VERSO": {
                "type": "string",
                "required": true
            },
            "CONV_ACOMO": {
                "type": "string",
                "required": true
            },
            "CONV_CONFORT": {
                "type": "string",
                "required": true
            },
            "CONV_COPART": {
                "type": "string",
                "required": true
            },
            "CONV_DESC": {
                "type": "string",
                "required": true
            },
            "CONV_ID": {
                "type": "string",
                "required": true
            },
            "CONV_MODCOB": {
                "type": "string",
                "required": true
            },
            "CONV_OPCIONAL": {
                "type": "string",
                "required": true
            },
            "CONV_PADRAO_CONFORTO": {
                "type": "string",
                "required": true
            },
            "CONV_PATICIPATIVO": {
                "type": "string",
                "required": true
            },
            "CONV_REGULAMENTACAO": {
                "type": "string",
                "required": true
            },
            "CONV_SEGME": {
                "type": "string",
                "required": true
            },
            "CONV_TIPO": {
                "type": "string",
                "required": true
            },
            "CONV_TIPO_CONTRATO": {
                "type": "string",
                "required": true
            },
            "CONV_TIPO_PESSOA": {
                "type": "string",
                "required": true
            },
            "CONV_TIPO_REDE_DESC": {
                "type": "string",
                "required": true
            },
            "CONV_TIPO_REDE_ID": {
                "type": "string",
                "required": true
            },
            "CONV_VER": {
                "type": "string",
                "required": true
            },
            "CPF": {
                "type": "string",
                "required": true
            },
            "DATA_FINAL_CPT": {
                "type": "string",
                "required": true
            },
            "DAT_INC": {
                "type": "string",
                "required": true
            },
            "DAT_INC_CONTRATO": {
                "type": "string",
                "required": true
            },
            "DEP_ID": {
                "type": "string",
                "required": true
            },
            "EMAIL": {
                "type": "string",
                "required": true
            },
            "EMP_ID": {
                "type": "string",
                "required": true
            },
            "EMP_NOME": {
                "type": "string",
                "required": true
            },
            "ENDERECO": {
                "type": "string",
                "required": true
            },
            "EXPIROU_SENHA": {
                "type": "string",
                "required": true
            },
            "FORMA_PAGAMENTO": {
                "type": "string",
                "required": true
            },
            "ID_SISTEMA_INTERNO": {
                "type": "string",
                "required": true
            },
            "LOCALIZADOR": {
                "type": "string",
                "required": true
            },
            "LOGIN": {
                "type": "string",
                "required": true
            },
            "LOGIN_CHAVE": {
                "type": "string",
                "required": true
            },
            "MATRI": {
                "type": "string",
                "required": true
            },
            "MATRICULA_SIS_ANTIGO": {
                "type": "string",
                "required": true
            },
            "MAT_FUNC": {
                "type": "string",
                "required": true
            },
            "META_LOGIN": {
                "type": "string",
                "required": true
            },
            "MOT_BLOQ": {
                "type": "string",
                "required": true
            },
            "NASC": {
                "type": "string",
                "required": true
            },
            "NICKNAME": {
                "type": "string",
                "required": true
            },
            "NOME": {
                "type": "string",
                "required": true
            },
            "NOME_OPERADORA": {
                "type": "string",
                "required": true
            },
            "NUMERO": {
                "type": "string",
                "required": true
            },
            "NUMERO_CNS": {
                "type": "string",
                "required": true
            },
            "NUMERO_CONTRATO": {
                "type": "string",
                "required": true
            },
            "PLANO_REGULAMENTADO": {
                "type": "string",
                "required": true
            },
            "POSSUI_ODONTO": {
                "type": "string",
                "required": true
            },
            "PRIMEIRO_ACESSO": {
                "type": "string",
                "required": true
            },
            "PRONT_ID": {
                "type": "string",
                "required": true
            },
            "REGISTRO_ANS": {
                "type": "string",
                "required": true
            },
            "RG": {
                "type": "string",
                "required": true
            },
            "SESSAO_DE_ACESSO": {
                "type": "string",
                "required": true
            },
            "SEXO": {
                "type": "string",
                "required": true
            },
            "TEL": {
                "type": "string",
                "required": true
            },
            "TEL_CELULAR": {
                "type": "string",
                "required": true
            },
            "TEM_CPT": {
                "type": "string",
                "required": true
            },
            "TIPO_BEM_DESC": {
                "type": "string",
                "required": true
            },
            "TIPO_BEN_ID": {
                "type": "string",
                "required": true
            },
            "TIPO_CONTRATACAO": {
                "type": "string",
                "required": true
            },
            "TIPO_GRAU_PARENT_DESC": {
                "type": "string",
                "required": true
            },
            "TIPO_GRAU_PARENT_ID": {
                "type": "string",
                "required": true
            },
            "TIPO_PESSOA_CONTRATANTE": {
                "type": "string",
                "required": true
            },
            "TITULAR": {
                "type": "string",
                "required": true
            },
            "TITULAR_NOME": {
                "type": "string",
                "required": true
            },
            "TIT_MAT": {
                "type": "string",
                "required": true
            },
            "UF": {
                "type": "string",
                "required": true
            },
            "USR_BLOQ": {
                "type": "string",
                "required": true
            },
        }
    },
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
                "type": "number",
                "required": true
            },
            "acesso": {
                "0": {
                    "type": "number",
                    "required": true
                },
                "1": {
                    "type": "number",
                    "required": true
                },
                "2": {
                    "type": "number",
                    "required": true
                },
                "3": {
                    "type": "number",
                    "required": true
                },
                "4": {
                    "type": "number",
                    "required": true
                },
                "5": {
                    "type": "number",
                    "required": true
                },
                "6": {
                    "type": "number",
                    "required": true
                },
                "7": {
                    "type": "number",
                    "required": true
                },
                "8": {
                    "type": "number",
                    "required": true
                },
                "9": {
                    "type": "number",
                    "required": true
                },
                "10": {
                    "type": "number",
                    "required": true
                },
                "11": {
                    "type": "number",
                    "required": true
                },
                "12": {
                    "type": "number",
                    "required": true
                },
                "13": {
                    "type": "number",
                    "required": true
                },
                "14": {
                    "type": "number",
                    "required": true
                },
                "15": {
                    "type": "number",
                    "required": true
                },
                "16": {
                    "type": "number",
                    "required": true
                },
                "17": {
                    "type": "number",
                    "required": true
                },
                "18": {
                    "type": "number",
                    "required": true
                },
                "20": {
                    "type": "number",
                    "required": true
                },
                "21": {
                    "type": "number",
                    "required": true
                },
                "29": {
                    "type": "number",
                    "required": true
                },
                "30": {
                    "type": "number",
                    "required": true
                },
                "31": {
                    "type": "number",
                    "required": true
                },
                "32": {
                    "type": "number",
                    "required": true
                },
                "33": {
                    "type": "number",
                    "required": true
                },
                "34": {
                    "type": "number",
                    "required": true
                },
                "38": {
                    "type": "number",
                    "required": true
                },
                "39": {
                    "type": "number",
                    "required": true
                },
                "42": {
                    "type": "number",
                    "required": true
                },
                "89": {
                    "type": "number",
                    "required": true
                }
            },
            "carteirinha": {
                "type": "array",
                "required": true,
                "node": {
                    "NICKNAME": {
                        "type": "string",
                        "required": true
                    }
                }
            }
        }
    },
    "agente": {
        "type": "object",
        "required": false
    }
}

var validate = {
    "acesso": {
        "0": "1",
        "1": 1,
        "2": 1,
        "3": 1,
        "4": 1,
        "5": 1,
        "6": 1,
        "7": 1,
        "8": 1,
        "9": 1,
        "10": 1,
        "11": 1,
        "12": 1,
        "13": 1,
        "14": 1,
        "15": 1,
        "16": 1,
        "17": 1,
        "18": 1,
        "20": 1,
        "21": 1,
        "29": 1,
        "30": 1,
        "31": 1,
        "32": 1,
        "33": 1,
        "34": 1,
        "38": 1,
        "39": 1,
        "42": 1,
        "89": 1
    },
    "beneficiarios": [
        {
            "AREA_ATUACAO": null,
            "ATENDIMENTO": null,
            "BAIRRO": "FERNAO VELHO",
            "CARENCIAS": [
                {
                    "CARENCIA": "24/07/12",
                    "TIPO_SERVICO": "EMERGENCIA E URGENCIAS"
                },
                {
                    "CARENCIA": "07/08/12",
                    "TIPO_SERVICO": "SERVICOS DE APOIO A DIAGNOSTICOS SIMPLES"
                },
                {
                    "CARENCIA": "07/08/12",
                    "TIPO_SERVICO": "CONSULTAS"
                },
                {
                    "CARENCIA": "21/10/12",
                    "TIPO_SERVICO": "ATENDIMENTO PSIQUIATRICO"
                },
                {
                    "CARENCIA": "21/10/12",
                    "TIPO_SERVICO": "INTERNACOES CIRURGICAS"
                },
                {
                    "CARENCIA": "21/10/12",
                    "TIPO_SERVICO": "INTERNACOES CLINICAS"
                },
                {
                    "CARENCIA": "21/10/12",
                    "TIPO_SERVICO": "PROCEDIMENTOS ESPECIAIS"
                },
                {
                    "CARENCIA": "21/10/12",
                    "TIPO_SERVICO": "SERVICOS DE APOIO A DIAGNOSTICOS COMPLEXOS"
                },
                {
                    "CARENCIA": "19/05/13",
                    "TIPO_SERVICO": "CIRURGIAS OBSTETRICAS"
                }
            ],
            "CARTAO_CONTATO1": "SOLTEIRO(A)",
            "CARTAO_CONTATO2": "ROSIMERE DE FREITAS REULIN",
            "CARTAO_CONTATO3": null,
            "CARTAO_CONTATO4": null,
            "CARTAO_CONTATO5": null,
            "CART_CORTEXTO": null,
            "CART_DATA_EMISSAO": null,
            "CART_DESABILITADO": false,
            "CART_IMG": "smile_azul_frente.png",
            "CART_IMG_VER": "smile_azul_verso.png",
            "CART_OBS": null,
            "CART_VALID": "",
            "CART_VIA": "",
            "CEP": "57070010",
            "CIDADE": "MACEIO",
            "COBERTURA": "05/04/2011",
            "COBERTURA_PARCIAL": "NÃO HÁ",
            "CODIGO_FUNCIONARIO": null,
            "COMPLEMENTO": "10 CONDOMINIO",
            "CONTRATANTE": null,
            "CONTRATANTE_COMPLETO": "ESMALE ASSISTENCIA INTERNACIONAL DE SAUDE - MATRIZ",
            "CONTRATO_EMPRESA_CONTRATANTE": null,
            "CONVENIO_ANS": "462400109",
            "CONVENIO_DESCRICAO_ANS": "PREMIUM PROMO",
            "CONV_ABRAN": "GRUPO DE MUNICÍPIOS",
            "CONV_ABRAN_VERSO": null,
            "CONV_ACOMO": "ENFERMARIA",
            "CONV_CONFORT": "",
            "CONV_COPART": null,
            "CONV_DESC": "PREMIUM PROMO",
            "CONV_ID": "11",
            "CONV_MODCOB": "PRE-PAGAMENTO",
            "CONV_OPCIONAL": null,
            "CONV_PADRAO_CONFORTO": null,
            "CONV_PATICIPATIVO": "N",
            "CONV_REGULAMENTACAO": "PLANOS OPERADOS APOS A EDICAO DA LEI 9656/98",
            "CONV_SEGME": "AMBULATORIAL + HOSPITALAR COM OBSTETRICIA",
            "CONV_TIPO": null,
            "CONV_TIPO_CONTRATO": "COLETIVO EMPRESARIAL",
            "CONV_TIPO_PESSOA": "J",
            "CONV_TIPO_REDE_DESC": null,
            "CONV_TIPO_REDE_ID": null,
            "CONV_VER": null,
            "CPF": "09938789463",
            "DATA_FINAL_CPT": "NÃO HÁ",
            "DAT_INC": "2012-07-23",
            "DAT_INC_CONTRATO": null,
            "DEP_ID": null,
            "EMAIL": "francisalves@smilesaude.com.br",
            "EMP_ID": null,
            "EMP_NOME": "ESMALE ASSISTENCIA INTERNACIONAL DE SAUDE - MATRIZ",
            "ENDERECO": "BELA VISTA N 151",
            "EXPIROU_SENHA": null,
            "FORMA_PAGAMENTO": null,
            "ID_SISTEMA_INTERNO": "3125217",
            "LOCALIZADOR": null,
            "LOGIN": "09938789463",
            "LOGIN_CHAVE": "t/GstPAUAWhzC8fCZgfpRNUPxD9C6vn3BIQSkY7FQH0=",
            "MATRI": "0573844.00",
            "MATRICULA_SIS_ANTIGO": "",
            "MAT_FUNC": null,
            "META_LOGIN": "eyJEQVRfSU5DIjoiMjAxMi0wNy0yMyJ9",
            "MOT_BLOQ": null,
            "NASC": "1993-10-14",
            "NICKNAME": "smile_azul",
            "NOME": "FRANCIS DE FREITAS ALVES",
            "NOME_OPERADORA": null,
            "NUMERO": null,
            "NUMERO_CNS": "705202456502179",
            "NUMERO_CONTRATO": "10032214",
            "PLANO_REGULAMENTADO": "PLANOS OPERADOS APOS A EDICAO DA LEI 9656/98",
            "POSSUI_ODONTO": null,
            "PRIMEIRO_ACESSO": null,
            "PRONT_ID": null,
            "REGISTRO_ANS": "39548-0",
            "RG": null,
            "SESSAO_DE_ACESSO": null,
            "SEXO": "M",
            "TEL": null,
            "TEL_CELULAR": "82996711824",
            "TEM_CPT": null,
            "TIPO_BEM_DESC": "T",
            "TIPO_BEN_ID": null,
            "TIPO_CONTRATACAO": "COLETIVO EMPRESARIAL",
            "TIPO_GRAU_PARENT_DESC": "TITULAR",
            "TIPO_GRAU_PARENT_ID": "X",
            "TIPO_PESSOA_CONTRATANTE": "PESSOA JURÍDICA",
            "TITULAR": "S",
            "TITULAR_NOME": null,
            "TIT_MAT": "0573844.00",
            "UF": "AL",
            "USR_BLOQ": null
        },
        {
            "AREA_ATUACAO": null,
            "ATENDIMENTO": null,
            "BAIRRO": "FERNAO VELHO",
            "CARENCIAS": [],
            "CARTAO_CONTATO1": "OUTROS",
            "CARTAO_CONTATO2": "ROSIMERE DE FREITAS REULIN",
            "CARTAO_CONTATO3": null,
            "CARTAO_CONTATO4": null,
            "CARTAO_CONTATO5": null,
            "CART_CORTEXTO": null,
            "CART_DATA_EMISSAO": null,
            "CART_DESABILITADO": true,
            "CART_IMG": "smile_azul_frente.png",
            "CART_IMG_VER": "smile_azul_verso.png",
            "CART_OBS": null,
            "CART_VALID": "",
            "CART_VIA": "",
            "CEP": "57070090",
            "CIDADE": "MACEIO",
            "COBERTURA": "09/09/2016",
            "COBERTURA_PARCIAL": "NÃO HÁ",
            "CODIGO_FUNCIONARIO": null,
            "COMPLEMENTO": "10,",
            "CONTRATANTE": null,
            "CONTRATANTE_COMPLETO": "NAO SE APLICA",
            "CONTRATO_EMPRESA_CONTRATANTE": null,
            "CONVENIO_ANS": "476663166",
            "CONVENIO_DESCRICAO_ANS": "PREMIUM PROMO - ENF. IND.",
            "CONV_ABRAN": "GRUPO DE MUNICÍPIOS",
            "CONV_ABRAN_VERSO": null,
            "CONV_ACOMO": "ENFERMARIA",
            "CONV_CONFORT": "",
            "CONV_COPART": null,
            "CONV_DESC": "PREMIUM PROMO - ENF. IND.",
            "CONV_ID": "9",
            "CONV_MODCOB": "PRE-PAGAMENTO",
            "CONV_OPCIONAL": null,
            "CONV_PADRAO_CONFORTO": null,
            "CONV_PATICIPATIVO": "N",
            "CONV_REGULAMENTACAO": "PLANOS OPERADOS APOS A EDICAO DA LEI 9656/98",
            "CONV_SEGME": "AMBULATORIAL + HOSPITALAR SEM OBSTETRICIA",
            "CONV_TIPO": null,
            "CONV_TIPO_CONTRATO": "INDIVIDUAL OU FAMILIAR",
            "CONV_TIPO_PESSOA": "F",
            "CONV_TIPO_REDE_DESC": null,
            "CONV_TIPO_REDE_ID": null,
            "CONV_VER": null,
            "CPF": "09938789463",
            "DATA_FINAL_CPT": "NÃO HÁ",
            "DAT_INC": "2016-09-09",
            "DAT_INC_CONTRATO": null,
            "DEP_ID": null,
            "EMAIL": "leonardosilva@gmail.com",
            "EMP_ID": null,
            "EMP_NOME": "NAO SE APLICA",
            "ENDERECO": "DA PRAIA",
            "EXPIROU_SENHA": null,
            "FORMA_PAGAMENTO": null,
            "ID_SISTEMA_INTERNO": "3301641",
            "LOCALIZADOR": null,
            "LOGIN": "09938789463",
            "LOGIN_CHAVE": "syuqbuUI6qrkDycG01mHgVz+fQ48gowdsIFYTnqcYto=",
            "MATRI": "0655713.00",
            "MATRICULA_SIS_ANTIGO": "",
            "MAT_FUNC": null,
            "META_LOGIN": "eyJEQVRfSU5DIjoiMjAxNi0wOS0wOSJ9",
            "MOT_BLOQ": null,
            "NASC": "1993-10-14",
            "NICKNAME": "smile_azul",
            "NOME": "FRANCIS DE FREITAS ALVES",
            "NOME_OPERADORA": null,
            "NUMERO": null,
            "NUMERO_CNS": null,
            "NUMERO_CONTRATO": "10151142",
            "PLANO_REGULAMENTADO": "PLANOS OPERADOS APOS A EDICAO DA LEI 9656/98",
            "POSSUI_ODONTO": null,
            "PRIMEIRO_ACESSO": null,
            "PRONT_ID": null,
            "REGISTRO_ANS": "39548-0",
            "RG": null,
            "SESSAO_DE_ACESSO": null,
            "SEXO": "M",
            "TEL": null,
            "TEL_CELULAR": "82996711824",
            "TEM_CPT": null,
            "TIPO_BEM_DESC": "T",
            "TIPO_BEN_ID": null,
            "TIPO_CONTRATACAO": "INDIVIDUAL OU FAMILIAR",
            "TIPO_GRAU_PARENT_DESC": "TITULAR",
            "TIPO_GRAU_PARENT_ID": "X",
            "TIPO_PESSOA_CONTRATANTE": "PESSOA FÍSICA",
            "TITULAR": "S",
            "TITULAR_NOME": null,
            "TIT_MAT": "0655713.00",
            "UF": "AL",
            "USR_BLOQ": null
        },
        {
            "AREA_ATUACAO": null,
            "ATENDIMENTO": null,
            "BAIRRO": "FERNAO VELHO",
            "CARENCIAS": [
                {
                    "CARENCIA": "10/09/16",
                    "TIPO_SERVICO": "EMERGENCIA E URGENCIAS"
                },
                {
                    "CARENCIA": "09/10/16",
                    "TIPO_SERVICO": "SERVICOS DE APOIO A DIAGNOSTICO SIMPLES"
                },
                {
                    "CARENCIA": "09/10/16",
                    "TIPO_SERVICO": "CONSULTAS MEDICAS ELETIVAS"
                },
                {
                    "CARENCIA": "08/03/17",
                    "TIPO_SERVICO": "PROCEDIMENTOS ESPECIAIS"
                },
                {
                    "CARENCIA": "08/03/17",
                    "TIPO_SERVICO": "SERVICOS DE APOIO A DIAGNOSTICO COMPLEXOS (PAC'S)"
                },
                {
                    "CARENCIA": "08/03/17",
                    "TIPO_SERVICO": "INTERNACOES"
                }
            ],
            "CARTAO_CONTATO1": "OUTROS",
            "CARTAO_CONTATO2": "MARIA MARCIA DOS SANTOS",
            "CARTAO_CONTATO3": null,
            "CARTAO_CONTATO4": null,
            "CARTAO_CONTATO5": null,
            "CART_CORTEXTO": null,
            "CART_DATA_EMISSAO": null,
            "CART_DESABILITADO": false,
            "CART_IMG": "smile_azul_frente.png",
            "CART_IMG_VER": "smile_azul_verso.png",
            "CART_OBS": null,
            "CART_VALID": "",
            "CART_VIA": "",
            "CEP": "57070090",
            "CIDADE": "MACEIO",
            "COBERTURA": "09/09/2016",
            "COBERTURA_PARCIAL": "NÃO HÁ",
            "CODIGO_FUNCIONARIO": null,
            "COMPLEMENTO": "10,",
            "CONTRATANTE": null,
            "CONTRATANTE_COMPLETO": "NAO SE APLICA",
            "CONTRATO_EMPRESA_CONTRATANTE": null,
            "CONVENIO_ANS": "476663166",
            "CONVENIO_DESCRICAO_ANS": "PREMIUM PROMO - ENF. IND.",
            "CONV_ABRAN": "GRUPO DE MUNICÍPIOS",
            "CONV_ABRAN_VERSO": null,
            "CONV_ACOMO": "ENFERMARIA",
            "CONV_CONFORT": "",
            "CONV_COPART": null,
            "CONV_DESC": "PREMIUM PROMO - ENF. IND.",
            "CONV_ID": "9",
            "CONV_MODCOB": "PRE-PAGAMENTO",
            "CONV_OPCIONAL": null,
            "CONV_PADRAO_CONFORTO": null,
            "CONV_PATICIPATIVO": "N",
            "CONV_REGULAMENTACAO": "PLANOS OPERADOS APOS A EDICAO DA LEI 9656/98",
            "CONV_SEGME": "AMBULATORIAL + HOSPITALAR SEM OBSTETRICIA",
            "CONV_TIPO": null,
            "CONV_TIPO_CONTRATO": "INDIVIDUAL OU FAMILIAR",
            "CONV_TIPO_PESSOA": "F",
            "CONV_TIPO_REDE_DESC": null,
            "CONV_TIPO_REDE_ID": null,
            "CONV_VER": null,
            "CPF": "12740096429",
            "DATA_FINAL_CPT": "NÃO HÁ",
            "DAT_INC": "2016-09-09",
            "DAT_INC_CONTRATO": null,
            "DEP_ID": null,
            "EMAIL": "francisalves@smilesaude.com.br",
            "EMP_ID": null,
            "EMP_NOME": "NAO SE APLICA",
            "ENDERECO": "DA PRAIA",
            "EXPIROU_SENHA": null,
            "FORMA_PAGAMENTO": null,
            "ID_SISTEMA_INTERNO": "3301642",
            "LOCALIZADOR": null,
            "LOGIN": null,
            "LOGIN_CHAVE": null,
            "MATRI": "0655713.01",
            "MATRICULA_SIS_ANTIGO": "",
            "MAT_FUNC": null,
            "META_LOGIN": "eyJEQVRfSU5DIjoiMjAxNi0wOS0wOSJ9",
            "MOT_BLOQ": null,
            "NASC": "2009-04-23",
            "NICKNAME": "smile_azul",
            "NOME": "PEDRO ISAQUE DE MELO SANTOS",
            "NOME_OPERADORA": null,
            "NUMERO": null,
            "NUMERO_CNS": "704108196950671",
            "NUMERO_CONTRATO": "10151142",
            "PLANO_REGULAMENTADO": "PLANOS OPERADOS APOS A EDICAO DA LEI 9656/98",
            "POSSUI_ODONTO": null,
            "PRIMEIRO_ACESSO": null,
            "PRONT_ID": null,
            "REGISTRO_ANS": "39548-0",
            "RG": null,
            "SESSAO_DE_ACESSO": null,
            "SEXO": "M",
            "TEL": null,
            "TEL_CELULAR": "82996711824",
            "TEM_CPT": null,
            "TIPO_BEM_DESC": "D",
            "TIPO_BEN_ID": null,
            "TIPO_CONTRATACAO": "INDIVIDUAL OU FAMILIAR",
            "TIPO_GRAU_PARENT_DESC": "OUTRO",
            "TIPO_GRAU_PARENT_ID": "O",
            "TIPO_PESSOA_CONTRATANTE": "PESSOA FÍSICA",
            "TITULAR": "N",
            "TITULAR_NOME": null,
            "TIT_MAT": "0655713.00",
            "UF": "AL",
            "USR_BLOQ": null
        }
    ],
    "carteirinha": null,
    "contrato": [
        {
            "CODIGO": "10032214",
            "NOME": "10032214",
            "acesso": {
                "0": 1,
                "1": 1,
                "2": 1,
                "3": 1,
                "4": 1,
                "5": 1,
                "6": 1,
                "7": 1,
                "8": 1,
                "9": 1,
                "10": 1,
                "11": 1,
                "12": 1,
                "13": 1,
                "14": 1,
                "15": 1,
                "16": 1,
                "17": 1,
                "18": 1,
                "20": 1,
                "21": 1,
                "29": 1,
                "30": 1,
                "31": 1,
                "32": 1,
                "33": 1,
                "34": 1,
                "38": 1,
                "39": 1,
                "42": 1,
                "89": 1
            },
            "carteirinha": [
                {
                    "NICKNAME": "smile_azul"
                }
            ]
        },
        {
            "CODIGO": "10151142",
            "NOME": "10151142",
            "acesso": {
                "0": 1,
                "1": 1,
                "2": 1,
                "3": 1,
                "4": 1,
                "5": 1,
                "6": 1,
                "7": 1,
                "8": 1,
                "9": 1,
                "10": 1,
                "11": 1,
                "12": 1,
                "13": 1,
                "14": 1,
                "15": 1,
                "16": 1,
                "17": 1,
                "18": 1,
                "20": 1,
                "21": 1,
                "29": 1,
                "30": 1,
                "31": 1,
                "32": 1,
                "33": 1,
                "34": 1,
                "38": 1,
                "39": 1,
                "42": 1,
                "89": 1
            },
            "carteirinha": [
                {
                    "NICKNAME": "smile_azul"
                }
            ]
        }
    ],
    "agente": null
}