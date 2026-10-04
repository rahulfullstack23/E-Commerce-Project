const Home = () => {

  const tours = [
    {
      date: "JUL 16",
      city: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 19",
      city: "TORONTO, ON",
      venue: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      city: "BRISTOW, VA",
      venue: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      city: "PHOENIX, AZ",
      venue: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      city: "LAS VEGAS, NV",
      venue: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      city: "CONCORD, CA",
      venue: "CONCORD PAVILION",
    },
  ];

  return (
    <main>

      <section className="hero">

        <h1>
          The Generics
        </h1>

        <button className="latest-button">
          Get our Latest Album
        </button>

        <button className="play-button">
          ▶
        </button>

      </section>


      <section className="tours">

        <h2>
          TOURS
        </h2>

        <div className="tour-list">

          {tours.map((tour) => (

            <div
              className="tour-row"
              key={tour.date}
            >

              <span>
                {tour.date}
              </span>

              <span>
                {tour.city}
              </span>

              <span>
                {tour.venue}
              </span>

              <button>
                BUY TICKETS
              </button>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
};

export default Home;