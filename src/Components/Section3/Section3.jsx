import Button from "../Button/Button";
function Section3() {
  return (
    <div className="sec1">
      <div class="card border rounded p-3" style={{ width: "20rem" }}>
        <img
          src="https://gharyal.com/cdn/shop/products/83188_s_660-1_360x.webp?v=1686641066"
          width="300px"
          height="300px"
          class="card-img-top"
          alt="..."
        ></img>
        <div class="card-body bg-light">
          <h5 class="card-title">Titoni Master Series</h5>
          <p class="card-text">
            This Titoni Master Series - 83188 S-660 watch has a 41mm stainsless
            steel case. This model also features an automatic movement, sapphire
            crystal, Green dial and a Stainless steel bracelet . It has a water
            resistance of 100(ft/cm)
          </p>
          <Button tittle={"Add to Cart"} />
        </div>
      </div>
    </div>
  );
}
export default Section3;
