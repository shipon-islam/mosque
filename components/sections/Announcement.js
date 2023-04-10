import { firestoreDb } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../Button";
import HeadLine from "../HeadLine";
import Layout from "../Layout";

function Announcement() {
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
    <Layout className="mt-14">
      <div className="grid md:grid-cols-2 gap-x-4 px-4 md:px-12 bg-green-600/10 pb-8 pt-12 rounded-md">
        <div className="text-gray-700">
          <HeadLine tittle="announcements" />
          <p className="inline-block border-b-2 border-green-600 text-green-800 mb-2">
            {moment(announcement?.date?.toDate()).format("MMMM Do YYYY")}
          </p>
          <div
            className="text-[1.1rem] leading-relaxed mb-4 capitalize"
            dangerouslySetInnerHTML={{
              __html:
                announcement?.announce?.slice(0, 665) ||
                "<h3>there is no announcements from dHIC</h3>",
            }}
          />
          <Link href="/announcement">
            <Button name="read more" />
          </Link>
        </div>
        <div>
          <img src="/images/announcement.png" alt="" />
        </div>
      </div>
    </Layout>
  );
}

export default Announcement;
