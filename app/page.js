import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 bg-[rgb(37,79,26)] min-h-[120vh]">
        <div className="flex flex-col gap-4 justify-center ml-[10vw]">
          <p className="text-[rgb(210,232,35)] font-bold text-7xl">Everything you are. In one, simple link in bio.</p>
          <p className="text-white font-semibold text-2xl">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="flex gap-2 pt-10">
            <input className ="bg-white px-2 py-2 focus:outline-green-500 rounded-lg" placeholder="linktr.ee/your-url" type="text"></input>
            <button className="bg-pink-200 rounded-full p-4">Claim your Linktree</button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mr-[10vw]">hello</div>
      </section>
      <section className="bg-[rgb(233,192,233)] min-h-[100vh]">
        hi
      </section>
    </main>
  );
}
