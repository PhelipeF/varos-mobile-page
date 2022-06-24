import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: string
    accent: string
    lightText: string
    lighterText: string
    background: string
  }
}