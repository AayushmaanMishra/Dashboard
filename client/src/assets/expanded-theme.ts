import { Palette , PaletteColor} from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    interface paletteColor{
        [key: number]: string;
    }
    interface Palette{
        tertiary: PaletteColor;
    }
}

