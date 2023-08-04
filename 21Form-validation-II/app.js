function Validator(formSelector) {
    let formRules = {}

    // Quy ước tao rules
    // - Nếu có lỗi thì return `error message`
    // - Nếu không có lỗi thì return `undefined`

    let validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này'
        },
        email: function (value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Vui lòng nhập email'
        },
        min: function (min) {
            return function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`
            }
        },
        max: function (max) {
            return function(value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${min} kí tự`
            }
        }
    }

    // Lấy ra form element trong DOM theo formSelector
    let formElement = document.querySelector(formSelector);

    // Chỉ sử lý khi có element trong Dom
    if(formElement) {
        let inputs = formElement.querySelectorAll('[name][rules]')
        for(let input of inputs) {
            let rules = input.getAttribute('rules').split('|')

            for (let rule of rules) {
                let ruleInfo;
                let isRuleHasValue = rule.includes(':')

                if(isRuleHasValue) {
                    ruleInfo = rule.split(':')
                    // console.log(ruleInfo)

                    rule = ruleInfo[0]
                    // console.log(validatorRules[rule](ruleInfo[1]))
                }

                let ruleFunc = validatorRules[rule]

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1])
                }

                // console.log(rule)

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)
                }else{
                    formRules[input.name] = [ruleFunc]
                }
            }
        }
        console.log(formRules)
    }
}