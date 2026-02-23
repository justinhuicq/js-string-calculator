const add = require("../stringCalculator.js");

test("chaîne vide retourne 0", () => {
    expect(add("")).toBe(0);
});

test("un nombre retourne ce nombre", () => {
    expect(add("5")).toBe(5);
});

test("plusieurs nombres séparés par virgule", () => {
    expect(add("1,2,3")).toBe(6);
});

test("plusieurs nombres séparés par retour à la ligne", () => {
    expect(add("1\n2\n3")).toBe(6);
});

test("virgule et retour à la ligne mélangés", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("séparateur personnalisé ;", () => {
    expect(add("//;\n1;2;3")).toBe(6);
});

test("séparateur personnalisé |", () => {
    expect(add("//|\n2|3|4")).toBe(9);
});

test("nombre négatif lance une exception", () => {
    expect(() => add("1,-2,3")).toThrow("Negatives not allowed. [-2]");
});

test("plusieurs nombres négatifs lancent une exception", () => {
    expect(() => add("-1,-5,3")).toThrow("Negatives not allowed. [-1,-5]");
});