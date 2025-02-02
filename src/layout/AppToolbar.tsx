import { LoadingIndicator, LocalesMenuButton } from 'react-admin';

import { ThemeSwapper } from '../themes/themeSwapper';

export const AppBarToolbar = () => (
    <>
        <LocalesMenuButton />
        <ThemeSwapper />
        <LoadingIndicator />
    </>
);