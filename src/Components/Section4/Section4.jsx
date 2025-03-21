import Button from "../Button/Button";
function Section4() {
  return (
    <div className="sec1">
      <div class="card border rounded p-3" style={{ width: "20rem"}}>
        <img
          src="https://gharyal.com/cdn/shop/products/xs.3251.cb_1_360x.webp?v=1686640222"
          width="300px"
          height="300px"
          class="card-img-top"
          alt="..."
        ></img>
        <div class="card-body bg-light">
          <h5 class="card-title">Luminox Navy Seal Steel</h5>
          <p class="card-text">
            This Luminox Navy Seal Steel - XS.3251.CB watch has a 45mm stainless
            steel case. This model also features a quartz movement, Rubber
            strap, sapphire crystal and a Black dial.
          </p>
          <Button tittle={"Get it fast"} />
        </div>
      </div>
    </div>
  );
}
export default Section4;
