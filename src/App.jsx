import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import New from "./components/New";
import Header from "./components/header";
import Overview from "./components/Overview";
import Protect from "./components/Protect";
import Footer from "./components/footer";
import Statistic from "./components/Statistic";

function App() {
  const [covid, setCovid] = useState();

  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await axios.get(
          "https://static.pipezero.com/covid/data.json"
        );
        setCovid(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTodo();
  }, []);
  return (
    <div>
      <Header></Header>
      <Statistic data={covid}></Statistic>
      <Protect></Protect>
      <Overview data={covid}></Overview>
      <New></New>
      <Footer></Footer>

      {/* <New data={todo}></New> */}
    </div>
  );
}

export default App;
