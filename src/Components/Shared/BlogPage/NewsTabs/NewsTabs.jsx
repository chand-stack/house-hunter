const NewsTabs = () => {
  return (
    <div className="text-black ">
      <h1 className="text-3xl text-center my-7 md:text-5xl font-semibold">
        House Hunter <br />
        Insights
      </h1>
      <div
        role="tablist"
        className="tabs font-semibold text-2xl tabs-bordered my-7"
      >
        <a role="tab" className="tab">
          View all
        </a>
        <a role="tab" className="tab tab-active">
          Destination guide
        </a>
        <a role="tab" className="tab">
          Remote working
        </a>
        <a role="tab" className="tab">
          Property investing
        </a>
        <a role="tab" className="tab">
          Property insights
        </a>
      </div>
    </div>
  );
};

export default NewsTabs;
