interface IPluralize {
    (number: number, nouns: [one: string, few: string, many: string], locale: string): string
}


export const pluralize: IPluralize = (number, [one, few, many], locale = 'ru-RU') => {
    const pluralRules = new Intl.PluralRules(locale);
    const category = pluralRules.select(number);

    switch (category) {
        case 'one':
            return `${one}`;
        case 'few':
            return `${few}`;
        default:
            return `${many}`;
    }
}