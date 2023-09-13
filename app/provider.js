import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return( 
    <ThemeProvider 
        nableSystem={false}
        attribute="class"
    >
    {children}
    </ThemeProvider>
  )
}