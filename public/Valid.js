var Valid = function (objectBase, objectValidate) {
    this.objectBase = objectBase
    this.objectValidate = objectValidate
    this.arrErrors = []
}

Valid.prototype.go = function () {
    var _self = this
    _self.struct(this.objectBase, this.objectValidate);
    return _self.arrErrors
}

Valid.prototype.struct = function (objectBase, objectValidate, level, fieldOrigin) {
    var _self = this
    var keysB = Object.getOwnPropertyNames(objectBase)
    var keysV = Object.getOwnPropertyNames(objectValidate)

    // Define o nível dos objetos
    level = level || 0
    fieldOrigin = fieldOrigin || null

    for (i in keysB) {

        var obj = {}
        obj.fieldOrigin = fieldOrigin
        obj.level = level
        obj.field = keysB[i]
        obj.typeNode = objectBase[keysB[i]].type
        obj.message = "Propriedade válida !"

        // Propriedades usadas no Vue
        obj.visible = true

        // Verifica a existência da propriedade na estrutura
        if (keysV.indexOf(keysB[i]) < 0) {
            obj.message = "É obrigatório a existência da propriedade [" + keysB[i] + "]"
            obj.typeError = Enum.Err.NotExists
        } 
        
        // Verifica se é obrigatório o preenchimento do campo
        else if (objectBase[keysB[i]].required && (objectValidate[keysB[i]] === undefined || objectValidate[keysB[i]] === null || objectValidate[keysB[i]] === "")) {
            obj.message = "O valor da propriedade [" + keysB[i] + "] não pode ser [null, undefined ou vazio]"
            obj.typeError = Enum.Err.IsRequired
        }

        // Valida o tipo de dado da propriedade
        else if (keysV.indexOf(keysB[i]) >= 0) {
            switch (objectBase[keysB[i]].type) {
                case "object":
                    if (typeof objectValidate[keysB[i]] !== objectBase[keysB[i]].type || Array.isArray(objectValidate[keysB[i]])) {
                        obj.message = "O tipo do campo [" + keysB[i] + "] deve ser [" + objectBase[keysB[i]].type + "]"
                        obj.typeError = Enum.Err.IsNotObject
                    }
                    break;
                case "array":
                    if (typeof objectValidate[keysB[i]] !== "object" && !Array.isArray(objectValidate[keysB[i]])) {
                        obj.message = "O tipo do campo [" + keysB[i] + "] deve ser [" + objectBase[keysB[i]].type + "]"
                        obj.typeError = Enum.Err.IsNotArray
                    }
                    break;
                case "string":
                    if (typeof objectValidate[keysB[i]] !== objectBase[keysB[i]].type) {
                        obj.message = "O tipo do campo [" + keysB[i] + "] deve ser [" + objectBase[keysB[i]].type + "]"
                        obj.typeError = Enum.Err.IsNotString
                    }
                    break;
                case "boolean":
                    if (typeof objectValidate[keysB[i]] !== objectBase[keysB[i]].type) {
                        obj.message = "O tipo do campo [" + keysB[i] + "] deve ser [" + objectBase[keysB[i]].type + "]"
                        obj.typeError = Enum.Err.IsNotBoolean
                    }
                    break;
                case "number":
                    if (typeof objectValidate[keysB[i]] !== objectBase[keysB[i]].type) {
                        obj.message = "O tipo do campo [" + keysB[i] + "] deve ser [" + objectBase[keysB[i]].type + "]"
                        obj.typeError = Enum.Err.IsNotNumber
                    }
                    break;
            }
        }

        _self.arrErrors.push(obj)

        // Verifica a existência da propriedade 'node' que indica que deve validar os niveis à dentro
        if (objectBase[keysB[i]].hasOwnProperty('node')) {
            // Checa o tipo do nó [object/array]
            if (objectBase[keysB[i]].type === "object") {
                level++
                fieldOrigin = keysB[i]
                _self.struct(objectBase[keysB[i]].node, objectValidate[keysB[i]], level, fieldOrigin)
                level--
            }

            // Array
            else if (objectBase[keysB[i]].type === "array") {
                level++
                fieldOrigin = keysB[i]
                var fieldNode = objectValidate[keysB[i]]
debugger
                for (n in fieldNode) {
                    var itemNode = fieldNode[n]
                    _self.struct(objectBase[fieldOrigin].node, itemNode, level, fieldOrigin)
                }

                level--
            }
        }
    }
}