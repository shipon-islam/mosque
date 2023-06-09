import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
import Navbar from "@/components/dashboard/Navbar";
import SideNavbar from "@/components/dashboard/SideNavbar";
import { useAuth } from "@/firebase/AuthContext";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

function Dashboard() {
  const router = useRouter();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      router.push("/admin/login");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main
        className={`${poppins.className} bg-gray-800 font-sans leading-normal tracking-normal mt-12`}
      >
        <div className="flex flex-col md:flex-row">
          <SideNavbar />
          <section>
            <div
              id="main"
              className="main-content flex-1 bg-gray-100 h-screen mt-12 md:mt-2 pb-24 md:pb-5"
            >
              <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                  <h1 className="font-bold pl-2">Analytics</h1>
                </div>
              </div>
              <AnalyticsCard />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
