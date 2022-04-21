import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import { Normalize } from 'styled-normalize'

// We want to use it in all our pages.

const theme = {}

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Normalize />
            <main>
                {children}
            </main>
        </ThemeProvider>
    )
}

export default Layout