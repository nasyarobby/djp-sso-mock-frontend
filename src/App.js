import React from "react";
import "./assets/style.css";

function App() {
  return (
    <div className="container mx-auto">
      <div
        className="box rounded shadow-md py-4 px-10 mt-10 mx-auto bg-red-500 text-white invisible"
        style={{ width: "360px" }}
      >
        Login gagal.
      </div>
      <div
        className="box rounded shadow-md py-4 px-10 mt-10 mx-auto bg-green-500 text-white invisible"
        style={{ width: "360px" }}
      >
        Login berhasil.
      </div>
      <div
        className="box rounded-lg shadow-md py-4 px-10 mt-10 mx-auto bg-white"
        style={{ width: "360px" }}
      >
        <h1 className="text-center text-2xl font-semibold">Login</h1>
        <input
          placeholder="NPWP"
          type="text"
          className="rounded border-gray-400 border p-2 w-full my-2"
        />
        <input
          placeholder="password"
          type="password"
          className="rounded border-gray-400 border p-2 w-full my-2"
        />
        <button className="bg-orange-400 rounded-full w-full p-2 my-4">
          Login
        </button>
        <div className="text-center">
          <div>Lupa Kata Sandi ?</div>
          <div>Belum Registrasi ?</div>
          <div>Belum Menerima Email Aktivasi ?</div>
          <div>Atau Belum Punya NPWP ?</div>
        </div>
      </div>
    </div>
  );
}

export default App;
