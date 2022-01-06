import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      
        <title>Spotify 2.0</title>
        <link rel="icon" href="/favicon.ico" />
     

      <h1>This is a spotify clone</h1>
      <main className="bg-black h-screen overflow-hidden">
        <Sidebar />
        {/* Sidebar
        Center */}
      </main>
      {/* Player */}
    </div>
  )
}
