const TeamSection = () => {
  return (
    <div className="">
      <h1 className="nunito my-12 text-4xl text-center text-primary font-extrabold ">
        OUR TEAM
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/front-view-young-man-with-measure-tape-white-background-health-muscle-weight-torso-slimming-body-human-measuring-waist-losing_140725-155358.jpg?w=740&t=st=1722490531~exp=1722491131~hmac=3b15b63e7db3ff2c2c716da6e47f5cb9f9bf1550da051126cb9ab18b45b242cd"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Alex Telles</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/image-smiling-handsome-man-glasses-pointing-fingers-sideways-showing-advertisements-variants-standing-cheerful-white-background_1258-65538.jpg?w=740&t=st=1722490549~exp=1722491149~hmac=d47707e1dd521430ae064a51866297faa84e6d00e2e5b872ece53fb2a92cdfda"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fran Garcia</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-xl">
          <figure>
            <img
              src="https://img.freepik.com/free-psd/smiling-worker-with-open-hands_1154-318.jpg?t=st=1722490598~exp=1722494198~hmac=0d94e77e4107e67a9d3f67861ebc1189cc214fdf74a7f6d93adfbd85202f581f&w=740"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Rahim Sterling</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
