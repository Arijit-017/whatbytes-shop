import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-black flex flex-col">
      <Header/>
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
          <div>
            <Sidebar/>
            <ProductCard/>
          </div>
        </main>
      <Footer/>
    </div>
  );
}
