function compile(templateText) {
    const reg = /{{\S.*?}}/g;

    function getKey(expression) {
        return expression.replace('{{', '').replace('}}', '');
    }

    return function (data) {
        return templateText.replace(reg, exp => {
            return data[getKey(exp)];
        });
    }
}

export default compile;