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
        obj.message = "Propriedade válida !"

        typeNodeBase = typeof objectBase[keysB[i]] === "object" && Array.isArray(objectBase[keysB[i]]) ? "array" : (typeof objectBase[keysB[i]] === "object" && !objectBase[keysB[i]] ? "null" : typeof objectBase[keysB[i]])
        typeNodeCurrent = typeof objectValidate[keysB[i]] === "object" && Array.isArray(objectValidate[keysB[i]]) ? "array" : (typeof objectValidate[keysB[i]] === "object" && !objectValidate[keysB[i]] ? "null" : typeof objectValidate[keysB[i]])

        // Propriedades usadas no Vue
        obj.visible = true

        // Verifica a existência da propriedade na estrutura
        if (keysV.indexOf(keysB[i]) < 0) {
            obj.message = "É obrigatório a existência da propriedade [" + keysB[i] + "]"
            obj.typeError = Enum.Err.NotExists
        }

        else if (keysV.indexOf(keysB[i]) >= 0) {
            if (typeNodeCurrent !== typeNodeBase) {
                obj.message = "O " + (typeNodeBase === "null" ? "valor" : "tipo") + " do campo [" + keysB[i] + "] deve ser [" + typeNodeBase + "]"
                obj.typeError = Enum.Err.IsNotObject
            }
        }

        _self.arrErrors.push(obj)

        // Verifica a existência da propriedade 'node' que indica que deve validar os niveis à dentro
        if (!obj.typeError) {
            // Checa o tipo do nó [object/array]
            if (typeNodeBase === "object" && objectBase[keysB[i]]) {
                level++
                fieldOrigin = keysB[i]
                _self.struct(objectBase[keysB[i]], objectValidate[keysB[i]], level, fieldOrigin)
                level--
            }

            // Array
            else if (typeNodeBase === "array") {
                level++
                fieldOrigin = keysB[i]
                var fieldNode = objectValidate[keysB[i]]

                for (n in fieldNode) {
                    var itemNode = fieldNode[n]
                    var itemValidate = objectBase[fieldOrigin][0] // Utiliza apenas o primeiro item do array para validação
                    _self.struct(itemValidate, itemNode, level, fieldOrigin)
                }

                level--
            }
        }
    }
}