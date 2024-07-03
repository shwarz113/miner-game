type NFormatter = { num: number; precision?: number };

export const toFixed = (n: number, fixed: number) => {
    return `${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))?.[0] || '0'
};
export const nFormatter = ({ num, precision = 1 }: NFormatter) => {
    const lookup = [
        { value: 1, symbol: '' },
        // { value: 1e3, symbol: '' },
        { value: 1e6, symbol: 'млн' },
        { value: 1e9, symbol: 'млрд' },
        { value: 1e12, symbol: 'трлн' },
        { value: 1e15, symbol: 'квдрлн' },
        { value: 1e18, symbol: 'квнтлн' },
    ];
    const item = lookup
        .slice()
        .reverse()
        .find((item) => num >= item.value) || lookup[0];

    if (precision === 0) {
        return num.toFixed(0);
    }

    if (num < 1000000) {
        return numberWithSeparationThousands(num)
    }

    return toFixed(num / item.value, precision).concat(item.symbol)
};

export function numberWithSeparationThousands(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}