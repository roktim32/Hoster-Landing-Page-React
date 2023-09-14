import Body from "./components/Body"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </>
  )
}

export default App
