import Link from "next/link";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";
import Form from "./components/Form";

const Reservation = () => {
  return (
    <main className="w-screen min-h-screen bg-gray-100">
      <main className="m-auto bg-white max-w-screen-2xl">
        <NavBar />
        <div className="h-screen border-t">
          <div className="w-3/5 m-auto py-9">
            <Header />
            <Form />
          </div>
        </div>
      </main>
    </main>
  );
};
export default Reservation;
