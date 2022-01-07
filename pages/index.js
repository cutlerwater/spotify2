import { getSession, useSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";

export default function Home() {
  const { data: session, status } = useSession();

  console.log("CLIENT SESSION IS >>> ", session);

  return (
    <div className="bg-black h-screen overflow-hidden">
        <title>Spotify 2.0</title>
        <link rel="icon" href="/favicon.ico" />
     

        <main className="flex">
        <Sidebar />
        <Center />
        
      </main>
      {/* Player */}
    </div>
  )
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
