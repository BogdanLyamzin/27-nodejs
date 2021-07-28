/*
Высокосный - год, в котором 366 дней, или 29 в феврале.
Высокосный:
- год делится на 4 без остатка;
- но не делится на 100 без остатка;
- но на 400 без остатка может делится;
- не меньше 42;

Функция:
1. Получает целое положительное число не меньше 42.
2. Возвращает true, если год высокосный, и false - если невысокосный. 

2008 -> высокосный
2003 -> не высокосный
1900 -> не высокосный
2000 -> высокосный

41 -> проброс ошибки "Год не может быть меньше 42"
2008.4 -> проброс ошибки "Год должен быть целым числом"
() -> проброс ошибки "Аргумент не передан"
"2008" -> проброс ошибки "Аргумент должен быть number"
true -> проброс ошибки "Аргумент должен быть number"
false -> проброс ошибки "Аргумент должен быть number"
null -> проброс ошибки "Аргумент должен быть number"
{} -> проброс ошибки "Аргумент должен быть number"
[] -> проброс ошибки "Аргумент должен быть number"
()=> {} -> проброс ошибки "Аргумент должен быть number"
*/

const isLeapYear = require("./isLeapYear");

describe("tests isLeapYear function", ()=>{
    test("2008 - leap year", ()=>{
        expect(isLeapYear(2008)).toBe(true); // toBe => ====
    });

    test("2003 - not leap year", ()=>{
        expect(isLeapYear(2003)).toBe(false); 
    });

    test("1900 - leap year", ()=>{
        expect(isLeapYear(1900)).toBe(false);
    });

    test("2000 - leap year", ()=>{
        expect(isLeapYear(2000)).toBe(true); 
    });

    test("41 - error 'Год не может быть меньше 42'", ()=>{
        expect(()=>isLeapYear(41)).toThrow("Год не может быть меньше 42"); 
    });

    test("2008.4 - error 'Год должен быть целым числом'", ()=>{
        expect(()=>isLeapYear(2008.4)).toThrow("Год должен быть целым числом"); 
    });

    test("()- error 'Аргумент не передан'", ()=>{
        expect(()=>isLeapYear()).toThrow("Аргумент не передан");
    });

    test("'2008'- error 'Аргумент должен быть number'", ()=>{
        expect(()=>isLeapYear("2008")).toThrow("Аргумент должен быть number"); 
    });

    test("false - error 'Аргумент должен быть number'", ()=>{
        expect(()=>isLeapYear(false)).toThrow("Аргумент должен быть number"); 
    });

    test("true- error 'Аргумент должен быть number'", ()=>{
        expect(()=>isLeapYear(true)).toThrow("Аргумент должен быть number"); 
    });

    test("null- error 'Аргумент должен быть number'", ()=>{
        expect(()=>isLeapYear(null)).toThrow("Аргумент должен быть number"); 
    });

    test("{}- error 'Аргумент должен быть number'", ()=>{
        expect(()=>isLeapYear({})).toThrow("Аргумент должен быть number"); 
    });

    test("[]- error 'Аргумент должен быть number'", ()=>{
        expect(()=>isLeapYear([])).toThrow("Аргумент должен быть number"); 
    });

    test("()=> {}- error 'Аргумент должен быть number'", ()=>{
        expect(()=>isLeapYear(()=> {})).toThrow("Аргумент должен быть number"); 
    });
})