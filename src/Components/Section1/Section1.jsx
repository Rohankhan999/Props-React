import Button from "../Button/Button";
function Section1() {
  return (
    <div>
      <div class="card border rounded p-3" style={{ width: "20rem" }}>
        <img
          src="https://gharyal.com/cdn/shop/files/A17326211B1A1_720x.webp?v=1686641642"
          width="300px"
          height="300px"
          class="card-img-top"
          alt="..."
        ></img>
        <div class="card-body bg-light">
          <h5 class="card-title">Breitling Navitimer</h5>
          <p class="card-text">
            This Breitling Navitimer - A17326211B1A1 watch has a 41mm stainless
            steel case. This model also features an self winding movement, steel
            bracelet, sapphire crystal and a Black dial. It has a water
            resistance of 3 bars 30 m (100 ft)
          </p>
          <Button tittle={"Shop Now"}  />
        </div>
      </div>
    </div>
  );
}
export default Section1;
