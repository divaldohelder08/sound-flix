import Aside from "./Pages/Aside";
import Footer from "./Pages/Footer";
import Main from "./Pages/Main";

export default function App (){
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  )
}