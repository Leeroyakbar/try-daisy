import React from "react"

const Home = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full h-64 flex justify-center">
          <img
            src="https://3.bp.blogspot.com/-jxITG7BRYX4/VTaf5DL-SoI/AAAAAAAAAIE/atMYGBRSbww/s1600/Indonesia-beautiful-islands-scenery-water-ship-blue-sky-clouds-sea_2560x1600%2B(1).jpg"
            alt="indonesia"
            className="rounded-lg w-3/4 object-cover" // Mengatur lebar menjadi 3/4 dan tinggi otomatis
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center mt-4">Indonesian Election Day</h1>
      <p className="text-center mt-2">Indonesia is on election day. Find out the latest election results here.</p>
    </div>
  )
}

export default Home
