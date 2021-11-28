import {ColorSchemeName, useColorScheme as _useColorScheme} from 'react-native';

// Значение useColorScheme всегда либо светлое, либо темное, но встроенное
// тип предполагает, что он может быть нулевым. На практике этого не произойдет, поэтому
// упрощает работу.
export default function useColorScheme(): NonNullable<ColorSchemeName> {
    return _useColorScheme() as NonNullable<ColorSchemeName>;
}
