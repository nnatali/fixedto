/*
 * jQuery fixedTo
 *
 * Revision: 1.1
 * Date: 06/06/2011
 *
 * Author: Nelly Natali (@nnatali)
 * Plugin URL: http://experimentos.nnatali.com/jquery/plugin-fixedto/
 * License: http://creativecommons.org/licenses/by-sa/3.0/
 *
*/
(function(jQuery) {
	
  jQuery.fn.fixedTo = function(opciones_user){
	  
    return this.each(function(){
	
	  var elemento = jQuery(this);
	  	
		/* ------------------------------
      	  Opciones por defecto 
	    ------------------------------ */
		opciones_default = {
			posicion: "top",
			ancho: 990,
			alto: 40,
			ocultar: true,
			animar: true
		};

		/* ------------------------------
      	  Recojo las opciones 
	    ------------------------------ */
		opciones = jQuery.extend(opciones_default,opciones_user);
		posicion = opciones.posicion;
		ancho = opciones.ancho;
		alto = opciones.alto;
		ocultar = opciones.ocultar;
		animar = opciones.animar;

		/* ------------------------------
      	  calculo los margenes laterales 
	    ------------------------------ */
		var wvisible = jQuery(window).width();
	    var hvisible = jQuery(window).height();
    	var wrestante = wvisible - ancho;
    	var hrestante = hvisible - alto;
    	var wleft = wrestante / 2;
    	var htop = hrestante / 2;
	
	    /* ------------------------------
  	      posiciono el elemento 
	    ------------------------------ */
 		elemento.css({
	      "position":"fixed",
    	  "overflow":"hidden",
		  "width":ancho+"px",
		  "height":alto+"px"
	    });
     	if(opciones_user.posicion=="top"){
    	  elemento.css({
	        "top":"0",
	        "left":wleft+"px"
	      });
    	}
    	if(opciones_user.posicion=="bottom"){
  	      elemento.css({
    	    "bottom":"0",
    	    "left":wleft+"px"
	      });
	    }
    	if(opciones_user.posicion=="left"){
		  var margentopleft = hvisible - ancho;
		  var margentopleftsin = margentopleft / 2;
		  var margentopleft = ancho + margentopleftsin;
  	      if(jQuery.browser.msie){
		    elemento.css({
			  "left":"0",
	          "top":margentopleftsin+"px",
		      "-ms-filter":"progid:DXImageTransform.Microsoft.Matrix(M11=-0, M12=1, M21=-1, M22=-0,sizingMethod='auto expand')",
              "filter":"progid:DXImageTransform.Microsoft.Matrix(M11=-0, M12=1, M21=-1, M22=-0,sizingMethod='auto expand')"
            });
  			if(jQuery.browser.version.substr(0,3)=="6.0"){
			  elemento.css({"marginLeft":"-"+(wvisible-alto)+"px","marginTop":margentopleftsin+"px"});
			}
		  }else{
		    elemento.css({
	          "left":"0",
	          "top":margentopleft+"px",
	    	  "-moz-transform":"rotate(270deg)",
              "-webkit-transform":"rotate(270deg)",
              "-moz-transform-origin":"0 0",
              "-webkit-transform-origin":"0 0"
            });	  
		  }
	    }
    	if(opciones_user.posicion=="right"){
          var margentopright = hvisible - ancho;
		  var margentopright = margentopright / 2;
  	      if(jQuery.browser.msie){
			var diferencia =  wvisible - alto;
		    elemento.css({
	          "left":""+diferencia+"px",
		      "top":margentopright+"px",
			  "-ms-filter":"progid:DXImageTransform.Microsoft.Matrix(M11=-0, M12=-1, M21=1, M22=-0,sizingMethod='auto expand')",
              "filter":"progid:DXImageTransform.Microsoft.Matrix(M11=0, M12=-1, M21=1, M22=0,sizingMethod='auto expand')"
            });
			if(jQuery.browser.version.substr(0,3)=="6.0"){
			  elemento.css({"marginLeft":""+(wvisible-alto-10)+"px","marginTop":margentopright+"px"});
			}
			if(jQuery.browser.version.substr(0,3)=="7.0"){ elemento.css({"right":"0"}); }
		  }else{
			elemento.css({
	          "right":"-"+ancho+"px",
	          "top":margentopright+"px",
	  	      "-moz-transform":"rotate(90deg)",
              "-webkit-transform":"rotate(90deg)",
              "-moz-transform-origin":"0 0",
              "-webkit-transform-origin":"0 0"
            });  
		  }
    	}
	    
    	/* --------------------------------------------
    	  animar al inicio 
	    --------------------------------------------- */
		if(animar==1){
		  if(opciones_user.posicion=="right"){
			elemento.animate({opacity: 0,right:'-='+alto+'px'},0,function(){
			  elemento.animate({opacity: 1,right:"-"+ancho+"px"},800);
			});
		  }else if(opciones_user.posicion=="left"){
			 elemento.animate({opacity: 0,left:'-='+alto+'px'},0,function(){
			  elemento.animate({opacity: 1,left:0},500);
			}); 
		  }else{
			elemento.hide();
		    elemento.slideDown();
		  }
		}
		
		/* ------------------------------------
      	  vuelvo a posicionar al redimensionar 
	    ------------------------------------ */
		
	    jQuery(window).resize(function(){
		
		  ancho = elemento.width();
		  alto = elemento.height();
		  wvisible = jQuery(window).width();
		  hvisible = jQuery(window).height();
    									  
    	  if(opciones_user.posicion=="top"){
			wrestante = wvisible - ancho;
        	wleft = wrestante / 2;
        	elemento.css({"left":wleft+"px"});
          }
    	  if(opciones_user.posicion=="bottom"){
	        wrestante = wvisible - ancho;
        	wleft = wrestante / 2;
	        elemento.css({"left":wleft+"px"});
          }
    	  if(opciones_user.posicion=="left"){
			margentopleft = hvisible - ancho;
		    margentopleftsin = margentopleft / 2;
		    margentopleft = ancho + margentopleftsin;
	        elemento.css({"top":margentopleft+"px"});
			if(jQuery.browser.msie){
				margentopleft = hvisible - alto;
		    	margentopleftsin = margentopleft / 2;
		    	margentopleft = alto + margentopleftsin;			
				elemento.css({"top":margentopleftsin+"px"});
				if(jQuery.browser.version.substr(0,3)=="6.0"){ 
				  elemento.css({"marginLeft":"-"+(wvisible-alto)+"px","marginTop":margentopleftsin+"px"});
				}
			}
		  }
    	  if(opciones_user.posicion=="right"){
			margentopright = hvisible - ancho;
		    margentopright = margentopright / 2;
	        elemento.css({"top":margentopright+"px"});
			if(jQuery.browser.version.substr(0,3)=="6.0"){
			  elemento.css({"marginLeft":""+(wvisible-alto-10)+"px","marginTop":margentopright+"px"});
			}
          }

	  		  	
	    });
		
	    /* ------------------------------
      	  Mostrar / Ocultar 
	    ------------------------------ */
		
		function fnmostrar(eselector){
			if(opciones_user.posicion=="top"){
	  			eselector.show().animate({opacity:1,top:0},500);
			}
			if(opciones_user.posicion=="bottom"){
	  			eselector.show().animate({opacity:1,bottom:0},500);
			}
			if(opciones_user.posicion=="left"){
  				eselector.show().animate({opacity:1,left:0},500);
			}
			if(opciones_user.posicion=="right"){
  				eselector.show().animate({opacity: 1,right:"-"+ancho+"px"},500);
			}
		}
		
		function fnocultar(eselector){
			if(opciones_user.posicion=="top"){
	  			eselector.animate({opacity: 0,top:'-='+alto+'px'},500,function(){
					jQuery(this).hide();														   
				});
			}
			if(opciones_user.posicion=="bottom"){
	  			eselector.animate({opacity: 0,bottom:'-='+alto+'px'},500,function(){
					jQuery(this).hide();														   
				});
			}
			if(opciones_user.posicion=="left"){
  				eselector.animate({opacity: 0,left:'-='+alto+'px'},500,function(){
					jQuery(this).hide();														   
				});
			}
			if(opciones_user.posicion=="right"){
  				eselector.animate({opacity: 0,right:'-='+alto+'px'},500,function(){
					jQuery(this).hide();														   
				});
			}
		}


	    /* ------------------------------
      	  Si se muestra / oculta 
	    ------------------------------ */
	    if(ocultar==1){
			//incluyo el boton
			var acerrar = '<a href="#" title="Ocultar" class="close">Ocultar</a>';
			elemento.prepend(acerrar);
			
			//al hacer click
			jQuery(".close",this).live("click",function(event){
			  event.preventDefault();
    		  var padre = jQuery(this).parent();
    		  if(padre.hasClass("move")){
        		jQuery(this).html("Ocultar").attr("title","Ocultar").removeClass("on");
        		padre.removeClass("move")
	    	  }else{
				fnocultar(padre);
				jQuery(this).html("Mostrar").attr("title","Mostrar").addClass("on");
		      }
	    	});
	    	
	    	//al mover el raton
    	  	if(opciones_user.posicion=="top"){
	    		jQuery(document).mousemove(function(e){
	    	    	if(elemento.is(":hidden") && e.pageY<=5){
						fnmostrar(elemento); 
						elemento.addClass("move");         
	    	    	}
	    	    	if(elemento.is(":visible") && elemento.hasClass("move") && e.pageY>=alto){
	        			fnocultar(elemento);
	        			elemento.removeClass("move");
	       			}
	      		});
          	}
          	if(opciones_user.posicion=="bottom"){
	    		jQuery(document).mousemove(function(e){
	    	    	if(elemento.is(":hidden") && e.pageY>=(hvisible-20)){
						fnmostrar(elemento); 
						elemento.addClass("move");         
	    	    	}
	    	    	if(elemento.is(":visible") && elemento.hasClass("move") && e.pageY<=(hvisible-alto)){
	        			fnocultar(elemento);
	        			elemento.removeClass("move");
	       			}
	      		});
          	}
          	if(opciones_user.posicion=="left"){
	    		jQuery(document).mousemove(function(e){
	    	    	if(elemento.is(":hidden") && e.pageX<=5){
						fnmostrar(elemento); 
						elemento.addClass("move");         
	    	    	}
	    	    	if(elemento.is(":visible") && elemento.hasClass("move") && e.pageX>=alto){
	        			fnocultar(elemento);
	        			elemento.removeClass("move");
	       			}
	      		});
          	}
          	if(opciones_user.posicion=="right"){
	    		jQuery(document).mousemove(function(e){
	    	    	if(elemento.is(":hidden") && e.pageX>=(wvisible-alto)){
						fnmostrar(elemento); 
						elemento.addClass("move");         
	    	    	}
	    	    	if(elemento.is(":visible") && elemento.hasClass("move") && e.pageX<=(wvisible-alto)){
	        			fnocultar(elemento);
	        			elemento.removeClass("move");
	       			}
	      		});
          	}
		}// ocultar
	  
    });// this.each
	  
  }//function fixedTo

})(jQuery);