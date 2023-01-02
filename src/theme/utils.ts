import { transparentize } from 'polished';

type TColorsWithOpacity<C> = { [I in keyof C]: (grade?: number) => I };

export function createPalette<C>(colors: C): TColorsWithOpacity<C> {
    const result: TColorsWithOpacity<C> = {} as TColorsWithOpacity<C>;

    Object.keys(colors).forEach((color) => {
        Object.defineProperty(result, color, {
            enumerable: true,
            get: () => (grade?: number) => {
                // @ts-ignore colors[color]
                if (!grade) return colors[color];

                // @ts-ignore colors[color]
                return transparentize(1 - grade, colors[color]);
            },
        });
    });

    return result;
}
