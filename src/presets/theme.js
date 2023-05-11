const theme = {
  breakpoint: { mob: '350px', tab: '798px', desk: '1310px' },
  space: [0, 2, 4, 8, 16, 32, 64],
  fonts: {
    main: {
      regular: 'Manrope-Regular',
      medium: 'Manrope-Medium',
      semiBold: 'Manrope-SemiBold',
      bold: 'Manrope-Bold',
      extraBold: 'Manrope-ExtraBold',
    },
    secondary: { regular: 'Inter-Regular', medium: 'Inter-Medium' },
  },
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '28px', '48px', '68px'],
  fontWeight: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  color: {
    accent: '#FF8356',
    background: '#FEF9F9',
    black: '#111111',
    yellow: '#FFC107',
    bluelinks: '#54ADFF',
    grblue: '#419EF1',
    red: '#F43F5E',
    green: '#00C3AD',
    grey: '#888888',
    white: '#FFFFFF',
    grorange: '#FF634E',

    // gradientBlue: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
  },
  boxShadows: {
    default: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    hover: '7px 13px 14px rgba(116, 177, 232, 0.24)',
  },
  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export default theme;