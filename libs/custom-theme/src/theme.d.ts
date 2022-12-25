import React from 'react';

interface IExtraOptions {
  [T]: React.CSSProperties['color'];
}

interface INeutralOptions {
  [T]: React.CSSProperties['color'];
}

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }

  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }

  interface PaletteOptions {
    extra?: IExtraOptions;
    neutral?: INeutralOptions;
    external?: INeutralOptions;
  }
}

declare module '@emotion/react' {
  interface Theme {
    color: string;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    external: true;
  }
}

export * from '.';
