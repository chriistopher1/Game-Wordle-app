function Home() {
  return (
    <div className="">
      <div className="text-2xl text-center mt-5">Game Wordle</div>
      <div className="home-page-button  mt-44 flex justify-center">
        <div className="flex flex-col gap-5 w-48 text-center p-5">
          <a
            href="/play"
            className="bg-teal-500 p-3 w-auto transition hover:text-black  rounded-lg"
          >
            Play Now
          </a>
          <a
            href="/about"
            className="bg-teal-500 p-3 w-auto transition hover:text-black  rounded-lg"
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
