import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function TestPage() {
  const snapshot = await getDocs(collection(db, "venues"));
  const venues = snapshot.docs.map((d) => d.data());

  return (
    <pre className="text-white p-10">
      {JSON.stringify(venues, null, 2)}
    </pre>
  );
}
