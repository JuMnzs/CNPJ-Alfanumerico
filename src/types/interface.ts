export const CNPJType = {
    NUMERIC: "NUMERIC",
    ALPHANUMERIC: "ALPHANUMERIC"
} as const;

export type CNPJType = typeof CNPJType[keyof typeof CNPJType];

export const FormatOption = {
    FORMATTED: "FORMATTED",
    UNFORMATTED: "UNFORMATTED"
} as const;

export type FormatOption = typeof FormatOption[keyof typeof FormatOption];

export interface CNPJValidatorResult {
    isValid: boolean;
    message: string;
    cnpj: string;
    type?: CNPJType;
}

export interface CNPJGeneratorOptions {
    type: CNPJType;
    format: FormatOption;
}

export interface CNPJGeneratorResult {
    cnpj: string;
    type: CNPJType;
    formatted: boolean;
}

export interface DiscoverDVInput {
    randomString: string;
    type: CNPJType;
    format: FormatOption;
}

export interface DiscoverDVResult {
    cnpj: string;
    dv: string;
    type: CNPJType;
    isValid: boolean;
}