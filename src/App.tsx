import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import Glide from "./components/Glide";
import AboutUsSection from "./components/AboutUs";
import { ContentWrapper } from "./components/ContentRegion";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Glide />
      <ContentWrapper>
        <AboutUsSection />
      </ContentWrapper>
    </div>
  );
}

export default App;
