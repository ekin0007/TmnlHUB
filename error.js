/**
 * name
 * type
 * message
 * stack:
 *      Error
 *      EvalError 当在其他名称下调用全局函数eval()时
 *      RangeError 当数字超出合法范围时
 *      ReferenceError 在读取一个不存在的变量的值时
 *      SyntaxError SyntaxError类的一个实例会被抛出以通知JavaScript代码中的语法错误。eval()方法、Function()构造函数和RegExp()构造函数都可能抛出这种类型的异常。
 *      TypeError 当一个值的类型与要求不符时
 *      URIError 如果指定的字符串含有不合法的十六进制转义序列，则decodeURI()或decodeURIComponent()方法就会抛出URIError类的实例。如果指定的字符串含有不合法的Unicode替代对，encodeURI()或encodeURIComponent()方法也会抛出该异常
 *
 */
var getPosition = function (stack) {
        var arr = stack.split('\n    at ')[1].split(' ')[1].replace('(', '').replace(/\\/g, '/').replace(')', '').split(':'),
            path = arr[0] + ':' + arr[1], row = arr[2], column = arr[3];
        return {path: path, row: row, column: column};
    },

    cError = function (err, name) {
        var error = {error: true};
        if (err instanceof Error) {
            error.name = err.name;
            error.message = err.message;
            error.type = err.type;
            error.stack = err.stack;
            error.position = getPosition(err.stack);
        } else {
            error.name = name || 'Error';
            error.message = err;
        }
        //TODO 是否记录错误日志？
        return error;
    };

exports.Error = cError;