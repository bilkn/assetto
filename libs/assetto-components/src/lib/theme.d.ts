import { PaletteColor } from "@mui/material";

declare module '@mui/material/styles' {

  interface Palette {
    ternary?:string;
  }

  interface PaletteColor {
    lighter?: string
    darker?: string
  }
}

