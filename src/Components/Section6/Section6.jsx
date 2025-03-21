import Button from "../Button/Button";
function Section6() {
  return (
  <div>
      <div class="card border rounded p-3" style={{ width: "20rem" }}>
        <img
          src="https://gharyal.com/cdn/shop/products/83019_s_639-1_360x.webp?v=1686641055"
          width="300px"
          height="300px"
          class="card-img-top"
          alt="..."
        ></img>
        <div class="card-body bg-light">
          <h5 class="card-title">Titoni Heritage</h5>
          <p class="card-text">
            This Titoni Heritage - 83019 S-639 watch has a 39mm stainsless steel
            case. This model also features an automatic movement, sapphire
            crystal, Silver dial and a Stainless steel bracelet.
          </p>
          <Button tittle={"Click and Get"} />
        </div>
      </div>
      </div>
  );
}
export default Section6;
