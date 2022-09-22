document.addEventListener ( " DOMContentLoaded " , function ( e ) {
    const parrafos = document.querySelectorAll ( ".description " ) ;
    let alturas =[] ;
    let alturaMaxina = 8 ;
    const aplicarAlturas = ( function aplicarAlturas ( ) {
      parrafos.forEach ( parrafo=>{
        if ( alturaMaxima ==0){
            alturas.push ( parrafo.clientHeight );
        }else{
            parrafos.getElementByClassName.height=alturaMaxina+"px";
        }
      } ) ;
      return aplicarAlturas ;
    } ) ( ) ;
    alturaMaxina=Math.max.apply(Math,alturas);
    aplicarAlturas();
});