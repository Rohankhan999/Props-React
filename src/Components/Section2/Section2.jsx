import Button from "../Button/Button";
function Section2() {
  return (
    <div className="sec1">
      <div class="card border rounded p-3" style={{ width: "20rem" }}>
        <img
          src="https://gharyal.com/cdn/shop/files/Superocean_360x.png?v=1698232708"
          width="300px"
          height="300px"
          class="card-img-top"
          alt="..."
        ></img>
        <div class="card-body bg-light">
          <h5 class="card-title">Breitling Superocean</h5>
          <p class="card-text">
            This Breitling Superocean - A17367D81C1A1 watch has a 44mm stainless
            steel case. This model also features an automatic movement, steel
            bracelet, sapphire crystal and a Blue dial. It has a water
            resistance of 1000 m (3300 ft)
          </p>
          <Button tittle={"Buy Now"} />
        </div>
      </div>
    </div>
  );
}
export default Section2;
