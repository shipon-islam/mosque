import HeadLine from "@/components/HeadLine";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/sections/Footer";
import { firestoreDb } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import moment from "moment";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function Announcement() {
  const [announcement, setAnnouncement] = useState({});
  const collectionRef = collection(firestoreDb, "announcements");

  //fetch announcement function
  const fetchData = async () => {
    const q = query(collectionRef, orderBy("date", "desc"));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      setAnnouncement({ ...snapshot.docs[0].data(), id: snapshot.docs[0].id });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Announcement</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <TopNavbar />
      <Navbar />

      <main className={`${poppins.className} md:mx-16 mx-4`}>
        {announcement.announce ? (
          <Layout className="my-14 md:mx-10 overflow-hidden">
            <HeadLine tittle="announcement" />
            <p className="inline-block border-b-2 border-green-600 text-green-800 mb-2">
              {moment(announcement?.date?.toDate()).format("MMMM Do YYYY")}
            </p>
            <div
              className="text-lg md:text-xl mb-4 capitalize "
              dangerouslySetInnerHTML={{
                __html:
                  announcement.announce ||
                  "<h3>there is no announcements from DHIC</h3>",
              }}
            />
          </Layout>
        ) : (
          <Loading />
        )}
      </main>
      <Footer />
    </>
  );
}
