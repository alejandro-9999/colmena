import { BrandVariants, createDarkTheme, createLightTheme } from "@fluentui/react-components";



const colmena =  {
    10: "#020404",
    20: "#101B1C",
    30: "#142D2F",
    40: "#173B3D",
    50: "#18484C",
    60: "#18575B",
    70: "#17656B",
    80: "#15747B",
    90: "#0F848B",
    100: "#03939C",
    110: "#37A1A9",
    120: "#5BAEB5",
    130: "#78BBC0",
    140: "#93C8CC",
    150: "#ADD5D8",
    160: "#C7E2E4"
};

export const lightTheme = {
    ...createLightTheme(colmena),
};

export const darkTheme = {
    ...createDarkTheme(colmena),
};


darkTheme.colorBrandForeground1 = colmena[110];
darkTheme.colorBrandForeground2 = colmena[120];

