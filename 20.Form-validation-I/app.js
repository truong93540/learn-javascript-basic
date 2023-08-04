// 'Validator' object
// Principle of the rules:
// 1. When there is an error => Return error message
// 2. When valid => Returns nothing (undefined)
function Validator(options) {
    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    let selectorRules = {}
    var i=0;

    // function that does validate
    function validate(inputElement, rule) {
        let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        let errorMessage

        // get selector's rules
        let rules = selectorRules[rule.selector]// lấy ra hàm test
        // console.log(rules)

        // iterate through each rule and check
        // if there is an error then stop the check
        for (let i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break
                default:
                    errorMessage = rules[i](inputElement.value)        
            }
            // console.log(errorMessage)
            if(errorMessage) {
                // chỉ cần có lỗi là thoát khỏi vòng lặp ngay
                break;
            }
        }

        if(errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        }else{
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }
        return !errorMessage
    }

    // get the element of the form to validate
    let formElement = document.querySelector(options.form)
    if(formElement) {
        // When submit form
        formElement.onsubmit = (e) => {
            e.preventDefault();// xóa submit mặc định của trình duyệt

            let isFormValid = true;
            // lặp qua từng cái rule và validate
            // Loop through each rule and validate
            options.rules.forEach((rule) => {
                let inputElement = formElement.querySelector(rule.selector)
                let isValid = validate(inputElement, rule)// hàm này trả về có lỗi hay không có lỗi
                
                if(!isValid) {// nếu có lỗi thì sai, ko submit
                    isFormValid = false;
                }
            })
            
            if(isFormValid) {// trong trường hợp ko sai
                // submit case with javascript
                if(typeof options.onSubmit === 'function') {
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
                    // console.log(formValues)
                    options.onSubmit(formValues)
                }
                // submit case with default behavior
                else{
                    formElement.submit()
                }
            }
        }

        // Loop through each rule and process (listen for blur events, input,...)
        options.rules.forEach(function(rule) {

            // save the rules for each input
            
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)// chuyền hàm test vào trong object
            }else{
                selectorRules[rule.selector] = [rule.test]
            }

            // Only one element, but has two rules.
            let inputElements = formElement.querySelectorAll(rule.selector)

            Array.from(inputElements).forEach((inputElement) => {
                if(inputElement) {
                    // handle the case when blur from input
                    inputElement.onblur = function() {
                        // value: inputElement.value
                        // test func: rule.test
                    
                        validate(inputElement, rule)// trả về có lỗi hay không có lỗi
                    }
                    inputElement.oninput = function(e) {// khi bắt đầu nhập thì tạm thời xóa lỗi
                        let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
                        errorElement.innerText = '';
                        getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                    }
                }
            })
        })
    }
}



// define rules
Validator.isRequired = function(selector, message) {
    return {
        selector,
        test(value) {
            // return value.trim() ? undefined : message || 'Vui lòng nhập trường này'?
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector,
        test(value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    }
}

Validator.minLength = function(selector, min, message) {
    return {
        selector,
        test(value) {
            // console.log(value)
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmeValue, message) {
    return {
        selector,
        test(value) {
            return (value === getConfirmeValue()) ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}