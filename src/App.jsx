import Hero from "./sections/Hero.jsx";
import NavBar from "./components/NavBar.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import LogoSection from "./components/LogoSection.jsx";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
        </>
    )
}
export default App
