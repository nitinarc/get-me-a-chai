

export default function Home() {
  return (
    <>
      <div className=" flex justify-center h-[44vh] text-white flex-col items-center gap-2">
        <div className="text-[40px] font-bold flex gap-2">
          Buy me Chai
          <span>
            <img src="/tea.gif" width={60} alt="tea" />
          </span>
        </div>
        <p>
          A crowdfunding pletform for creators. Get funded by your fans and
          followers. Start Now!
        </p>
        <div>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white mx-auto container h-[40vh]">
        <h2 className="text-3xl text-center my-14 font-bold">
          Your Fan buy you a Chai
        </h2>
        <div className="flex justify-around gap-5">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              className="rounded-full bg-slate-400 p-2"
              width={88}
              src="/man.gif"
              alt="man"
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              className="rounded-full bg-slate-400 p-2"
              width={88}
              src="/coin.gif"
              alt="man"
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item space-y- flex flex-col justify-center items-center">
            <img
              className="rounded-full bg-slate-400 p-2"
              width={88}
              src="/group.gif"
              alt="man"
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white mx-auto container ">
        <h2 className="text-3xl text-center my-10 font-bold">
          Learn more about us
        </h2>
        <div className="flex justify-around gap-5 pb-28">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HAJuO1t7tg8?si=gMU6cJHsrRqOGmug"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
