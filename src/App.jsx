import Body from "./components/Body"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-[120px] lg:py-10">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </>
  )
}

export default App
