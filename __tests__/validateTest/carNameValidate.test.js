import {
    validateEmptyCarNames,
    validateEnglishCarNames,
    validateCarNameLength,
    validateWhiteSpacesInNames,
    validateSingleCarInput,
    validateDuplicateCarNames,
} from "../../src/validate/carNameValidate.js";

describe("carNameValidate unit test", () => {
    test("이름 입력하지 않았을 때 에러", () => {
        expect(() => validateEmptyCarNames([''])).toThrow("[ERROR]");
    });

    test("영문만 허용 - 한글 포함 시 에러", () => {
        expect(() => validateEnglishCarNames(["포비", "woni"])).toThrow("[ERROR]");
    });

    test("이름 길이 5자 초과 시 에러", () => {
        expect(() => validateCarNameLength(["javaji"])).toThrow("[ERROR]");
    });

    test("이름 내부 공백 포함 시 에러", () => {
        expect(() => validateWhiteSpacesInNames(["po bi"])).toThrow("[ERROR]");
    });

    test("차가 한 대만 입력된 경우 에러", () => {
        expect(() => validateSingleCarInput(["pobi"])).toThrow("[ERROR]");
    });

    test("중복 이름 에러", () => {
        expect(() => validateDuplicateCarNames(["pobi", "pobi"])).toThrow("[ERROR]");
    });

    test("정상 케이스: ['dd','POBI']는 통과", () => {
        expect(() =>
            validateEnglishCarNames(["dd", "POBI"])
        ).not.toThrow();
        expect(() =>
            validateCarNameLength(["dd", "POBI"])
        ).not.toThrow();
    });
});
