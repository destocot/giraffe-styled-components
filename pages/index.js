import { StyleSheetManager, ThemeProvider } from 'styled-components';
import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

const theme = {
  colors: {
    header: '#EDCF8F',
    footer: '#6F4A38'
  },
  mobile: '768px'
}

export default function Home() {
  return (
    <StyleSheetManager
      shouldForwardProp={() => true}>
      <ThemeProvider theme={theme}>
        <Header />
        <Content />
        <Footer />
      </ThemeProvider>
    </StyleSheetManager>
  )
}
