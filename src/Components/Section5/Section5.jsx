import Button from "../Button/Button";
function Section5() {
  return (
    <div className="sec1">
      <div class="card border rounded p-3" style={{ width: "20rem" }}>
        <img
          src="https://gharyal.com/cdn/shop/products/828_srg_652-1_360x.webp?v=1686641049"
          width="300px"
          height="300px"
          class="card-img-top"
          alt="..."
        ></img>
        <div class="card-body bg-light">
          <h5 class="card-title">Titoni Cosmo</h5>
          <p class="card-text">
            This Titoni Cosmo watch has a 33.5mm stainsless steel
            case. This model also features an automatic movement, sapphire
            crystal, Mother Of Pearl dial and a Stainless steel bracelet.
          </p>
          <Button tittle={"Instant Buy"} />
        </div>
      </div>
    </div>
  );
}
export default Section5;
