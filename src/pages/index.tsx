import * as React from "react"
import type { PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  return (


    <main className="z-20 grid h-full snap-y snap-mandatory auto-rows-[100%] grid-rows-[100%_auto] overflow-y-auto">
      <section className="flex snap-start items-center justify-center bg-amber-200 text-8xl">Welcome....</section>
      <nav className="sticky top-0 bottom-0 z-30 flex w-full flex-row items-center justify-between gap-4 border-b-2 border-gray-50 bg-gray-50 py-4 px-4 shadow-md">
        <h1 className="flex-1 font-semibold">Nada Svendborg</h1>
        <ul className="flex flex-row gap-4">
          <li className="cursor-pointer font-medium">Home</li>
          <li className="cursor-pointer font-medium">About</li>
          <li className="cursor-pointer font-medium">Contact Us</li>
        </ul>
      </nav>
      <section className="flex snap-start items-center justify-center  bg-slate-500">
        <div className="container mx-auto overflow-hidden rounded shadow-lg bg-gray-50 mb-6">
          <div className="flex flex-col px-8 py-4 gap-6">
            <div className="mb-2 text-xl font-bold"> Velkommen til NADA Svendborg </div>
            <p className="text-base text-gray-700">Certificerede NADA-udøvere – et tilbud om NADA-behandling i Svendborg.</p>
            <p className="text-base text-gray-700">NADA Svendborg er en frivillig forening, hvis formål er at give unge og voksne i Svendborg Kommune mulighed for at få kendskab til, afprøve og modtage NADA-behandling. Vi tilbyder Nada til unge over 15 år. Er man 15-18 år, tilbyder vi Nada ifølge med en forælder. Vi ønsker at NADA bliver tilgængeligt for flest mulige, så man får mulighed for at bruge NADA som en hjælp til selvhjælp med henblik på at få ro i kroppen, sove bedre og reducere stress og angst.</p>
            <p className="text-base text-gray-700">Har du brug for NADA udover vores åbningstider, har NADA-Danmark en hjemmeside med oversigt over NADA-udøvere i vores område (kig under Svendborg).</p>
            <ul>
              <li className=" font-medium">Åbningstider:</li>
              <li>Mandag og torsdag fra 16 til 18</li>
              <li>En behandling tager cirka 45 minutter.</li>
              <li>OBS! Sidste nåle isættes kl. 17.15!</li>
              <br/>
                <li>Klippekort til 10 gange 200kr.
                </li>
            </ul>
          </div>

        </div>
      </section>
      <section className="flex snap-start items-center justify-center bg-cyan-200 text-8xl">3</section>
      <section className="flex snap-start items-center justify-center bg-fuchsia-200 text-8xl">4</section>
    </main>


  )
}

export default IndexPage

