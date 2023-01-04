import { transparentize } from 'polished';

type TColorsWithOpacity = { [key: string]: (grade?: number) => string };

export function createPalette(colors: { [key: string]: string }): TColorsWithOpacity {
    const result = {} as TColorsWithOpacity;

    Object.keys(colors).forEach((color) => {
        Object.defineProperty(result, color, {
            enumerable: true,
            get: () => (grade?: number) => {
                if (!grade) return colors[color];

                return transparentize(1 - grade, colors[color]);
            },
        });
    });

    return result;
}
