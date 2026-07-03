export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-900 p-10 rounded-2xl shadow-xl w-[500px] text-center">

        <h1 className="text-4xl font-bold text-yellow-400">
          GRK PYROTECHNICS
        </h1>

        <p className="text-white mt-3 text-lg">
          Permit Application System
        </p>

        <div className="mt-8 text-left">

          <label className="text-white font-semibold">
            Select State
          </label>

          <select className="w-full mt-2 p-3 rounded-lg text-black">
            <option>Johor</option>
            <option>Kedah</option>
            <option>Kelantan</option>
            <option>Melaka</option>
            <option>Negeri Sembilan</option>
            <option>Pahang</option>
            <option>Penang</option>
            <option>Perak</option>
            <option>Perlis</option>
            <option>Sabah</option>
            <option>Sarawak</option>
            <option>Selangor</option>
            <option>Terengganu</option>
          </select>

        </div>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-xl mt-8">
          Continue
        </button>

      </div>
    </main>
  );
}