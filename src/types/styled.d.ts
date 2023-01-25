import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;

        colors: {
            main: string;
            secondary: string;
        };
    }
}

//Do we need this file? If not, remove it.
