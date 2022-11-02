function GoogleMap(props) {
  return (
    <div className="googleMap">
      <h1 className="caption">Вы можете найти нас здесь</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4656.541646419688!2d26.815612901135506!3d54.29916166453995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc747cc51dad97%3A0x9793769c1b7f5b5f!2z0JzQvtC70L7QtNC10YfQvdC10L3RgdC60LjQtSDRjdC70LXQutGC0YDQuNGH0LXRgdC60LjQtSDRgdC10YLQuCDQpNC40LvQuNCw0Lsg0KDQo9CfINCc0LjQvdGB0LrRjdC90LXRgNCz0L4!5e0!3m2!1sru!2sby!4v1667382253910!5m2!1sru!2sby"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
