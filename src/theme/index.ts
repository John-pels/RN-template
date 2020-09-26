import {DefaultTheme} from '@react-navigation/native';

export const colors = {
  primary: '#89BE51',
  background: '#E5E5E5',
  text: '#2B2C34',
  success: '#53BD00',
  error: '#E45858',
  green: '#0BCE83',
  backdrop: '#D1D1E9',
  border: '1px solid #ccc',
};

export const font = {
  normal: 'SFProText-Regular',
  bold: 'SFProText-Bold',
  light: 'SFProText-Light',
};

export const input = {
  border: '1px solid #ced4da',
  // color: '#495057',
  color: '#000',
  background: '#fff',
  borderRadius: '5px',
  focusedBorder: `1px solid ${colors.primary}`,
};

export const theme = {
  ...DefaultTheme,
  ...colors,
  input,
  font,
};
