import DownloadButton from "@/components/DownloadButton";
import Navbar from "@/components/layout/Navbar";


export default function Home() {
  return (
    <>
    <Navbar/>
      <h1 className="font-serif text-5xl">We make good taste
        easy to find.</h1>
      <p className="font-sans">Body text (Inter)</p>
      <div>

        <DownloadButton />
      </div>
    </>
  );
}