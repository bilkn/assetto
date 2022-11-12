import React from 'react';

interface ExtraOptions {
  [T]: React.CSSProperties['color']
}

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    lighter?: string
    darker?: string
  }

  interface PaletteColor {
    lighter?: string
    darker?: string
  }

  interface PaletteOptions {
    extra?: ExtraOptions
  }
}
