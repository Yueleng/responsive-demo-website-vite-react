function GlideControl() {
  return (
    <>
      <div
        className="glide__arrows"
        data-glide-el="controls"
        style={{ zIndex: 70 }}
      >
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          {"<"}
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          {">"}
        </button>
      </div>
      <div
        className="glide__bullets"
        data-glide-el="controls[nav]"
        style={{ zIndex: 70 }}
      >
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
      </div>
    </>
  );
}

export default GlideControl;
