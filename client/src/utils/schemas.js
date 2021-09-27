import * as yup from "yup";

const loginSchema = yup.object().shape({
    email: yup
        .string("Value must be a string")
        .email("It should be a valid email")
        .required("This value is required"),

    password: yup
        .string("Value must be a string")
        .min(6, "Minimal length is 3 characters")
        .required("This value is required"),
});

const registerSchema = yup.object().shape({
    email: yup
        .string("Value must be a string")
        .email("It should be a valid email")
        .required("This value is required"),

    password: yup
        .string("Value must be a string")
        .min(6, "Minimal length is 3 characters")
        .required("This value is required"),
});

const createSituation = yup.object().shape({
    situationName: yup
        .string("Should be a valid string")
        .min(10, "Minimal length is 10 characters")
        .required("this value is required"),

    day: yup
        .date("Should be a valid date")
        .min(10, "Minimal length is 10 characters")
        .required("This value is required"),

    reasons: yup
        .string("Should be a valid string")
        .min(10, "Minimal length is 10 characters")
        .required("this value is required"),

    positives: yup
        .string("Should be a valid string")
        .min(10, "Minimal length is 10 characters")
        .required("this value is required"),

    rationals: yup
        .string("Should be a valid string")
        .min(10, "Minimal length is 10 characters")
        .required("this value is required"),

    subconscious: yup
        .string("Should be a valid string")
        .min(10, "Minimal length is 10 characters"),
});

const editPleasure = yup.object().shape({
    title: yup
        .string("Should be a valid string"),
    description: yup
        .string("Should be a valid string")
})


const createPleasure = yup.object().shape({
    title: yup
        .string("Value must be a string")
        .min(10, "Minimal length is 10 characters")
        .required("This value is required"),

    description: yup
        .string("Value must be a string")
});

const schemas = {
    login: loginSchema,
    register: registerSchema,
    createSituation,
    createPleasure,
    editPleasure
};

export default schemas;
