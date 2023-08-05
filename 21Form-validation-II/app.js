function Validator(formSelector, options) {
    // Gán giá trị mặc định cho tham số (ES5) 
    if (!options) {
        options = {};
    }

    // lặp lấy ra phần tử cha
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement
        }
    }


    let formRules = {}
    console.log(formRules)
    console.log(Object.keys(formRules))

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
    // console.log(formElement)

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
                    rule = ruleInfo[0]
                }

                let ruleFunc = validatorRules[rule]
                // console.log(ruleFunc)

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1])
                }
                // console.log(formRules)
                // Đoạn này để thêm các hàm vào object có key là tên input, value là mảng chứa các hàm thực thi
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)
                }else{
                    formRules[input.name] = [ruleFunc]
                }
                console.log(Object.keys(formRules))
            }
            
            // Lắng nghe sự kiển để validate (blur, change, ...)
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }
        
        // Làm thực hiện validate
        function handleValidate(event) {

            let rules = formRules[event.target.name]
            console.log(rules)
            let errorMessage;

            rules.find(function(rule) {
                errorMessage = rule(event.target.value);
                return errorMessage;
            })

            // Nếu có lỗi thì hiển thị message lỗi ra UI
            if(errorMessage) {
                let formGroup = getParent(event.target, '.form-group');
                if(formGroup) {
                    let formMessage = formGroup.querySelector('.form-message');
                    formGroup.classList.add('invalid');

                    if(formMessage) {
                        formMessage.innerText = errorMessage
                    }
                }
            }
            return !errorMessage
        }

        // Hàm clear message lỗi
        function handleClearError(event) {
            let formGroup = getParent(event.target, '.form-group');
            if(formGroup) {
                formGroup.classList.remove('invalid');
                let formMessage = formGroup.querySelector('.form-message');

                if(formMessage) {
                    formMessage.innerText = ''
                }
            }
        }
    }

    // Xử lý hành vi submit form
    formElement.onsubmit = function (event) {
        event.preventDefault();

        let inputs = formElement.querySelectorAll('[name][rules]');
        let isValid = true;

        for (let input of inputs) {
            if (!handleValidate({ target: input })) {
                isValid = false;
            }
        }

        // Khi không có lỗi thì submit form
        if (isValid) {
            if (typeof options.onSubmit === 'function') {

                let enableInputs = formElement.querySelectorAll('[name]:not([disabled])') // lấy ra những thằng có thuộc tính name không có disable
                let formValues = Array.from(enableInputs).reduce((values, input) => {
                    switch(input.type) {
                        case 'radio':
                            if(formElement.querySelector('input[name="' + input.name + '"]:checked')) {
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                            }
                            break;
                        case 'checkbox':
                            // nếu không có checked thì trả về luôn
                            if(!input.matches(':checked')) {
                                // values[input.name] = '';
                                return values;
                            }
                            // lần đầu tiên chưa là array thì tạo cho nó là array, các lần thứ 2 ko tạo array
                            if(!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            }
                            // console.log(input.value)
                            values[input.name].push(input.value)
                            break;
                        case 'file':
                            values[input.name] = input.files
                            break;
                        default:
                            values[input.name] = input.value
                    }
                    // console.log(values[input.name])
                    return values
                }, {})

                // Gọi lại hàm onSubmit và trả về kèm giá trị của form
                options.onSubmit(formValues);
            } else {
                formElement.submit();
            }
        }
    }
}