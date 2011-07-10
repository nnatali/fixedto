/*
 * jQuery fixedTo
 *
 * Revision: 2
 * Date: 10/06/2011
 *
 * Author: Nelly Natali (@nnatali)
 * Plugin URL: https://github.com/nnatali/jquery.fixedTo
 * License: http://creativecommons.org/licenses/by-sa/3.0/
 *
*/
(function(jQuery){
	
  jQuery.fn.fixedTo = function(options_user){
	  
    return this.each(function(){
	
			options_default = {
				position: "top",
				align: "center",
				hide: true,
				height_hide: 15
			}
			options = jQuery.extend(options_default,options_user);
			position = options.position;
			align = options.align;
			hide = options.hide;
			height_hide = options.height_hide;
			
			var element = jQuery(this),
					height_element = element.outerHeight(),
					width_element = element.outerWidth();

			isIE = jQuery.browser.msie ? true : false;

			element.css({"position":"fixed"});
			
			position_calculate = function(){
				
				thewindow = jQuery(window),
				height_thewindow = thewindow.height(),
				width_thewindow = thewindow.width();
				
				if(position=="top" || position=="bottom"){
					
					var vertical = position == "top" ? "top" : "bottom",
							horizontal = align == "right" ? "right" : "left",
							margin_horizontal = align == "center" ? (width_thewindow - width_element) / 2 : 0;
							
					var new_style = {};
							new_style[vertical] = 0,
							new_style[horizontal] = margin_horizontal+"px";
					
				}
				
				if (position=="right"){
					
					if(align=="left"){
						y = 0;
					}else if(align=="center"){
						y = (height_thewindow - width_element) / 2;
					}else if(align=="right"){
						y = height_thewindow - width_element;
					}
						
					x = (width_thewindow - width_element) + width_element;
					
					var new_style = {};
							new_style["-moz-transform-origin"] = "0 0",
							new_style["-moz-transform"] = "rotate(90deg) translate("+Number(y)+""+"px,-"+Number(x)+"px)",
							new_style["-webkit-transform-origin"] = "0 0",
							new_style["-webkit-transform"] = "rotate(90deg) translate("+Number(y)+""+"px,-"+Number(x)+"px)",
							new_style["ms-transform-origin"] = "0 0",
							new_style["ms-transform"] = "rotate(90deg) translate("+Number(y)+""+"px,-"+Number(x)+"px)",
							new_style["transform-origin"] = "0 0",
							new_style["transform"] = "rotate(90deg) translate("+Number(y)+""+"px,-"+Number(x)+"px)",
							new_style["top"] = "0";
							
					if(isIE && jQuery.browser.version!="9.0"){
							new_style["-ms-filter"] = "progid:DXImageTransform.Microsoft.Matrix(M11=-0, M12=-1, M21=1, M22=-0,sizingMethod='auto expand')";
							new_style["filter"] = "progid:DXImageTransform.Microsoft.Matrix(M11=0, M12=-1, M21=1, M22=0,sizingMethod='auto expand')";
							x = width_thewindow - height_element;
							new_style["marginTop"] = Number(y)+"px";
							new_style["marginLeft"] = Number(x)+"px";
							if(jQuery.browser.version=="7.0"){ new_style["right"] = 0; }
					}
				}
				
				if(position=="left"){
					
					if(align=="right"){
						y = width_element;
					}else if(align=="center"){
						y = width_element + ((height_thewindow - width_element) / 2);
					}else if(align=="left"){
						y = width_element + (height_thewindow - width_element);
					}
					
					x = 0;
					
					var new_style = {};
							new_style["-moz-transform-origin"] = "0 0",
							new_style["-moz-transform"] = "rotate(270deg) translate(-"+Number(y)+""+"px,-"+Number(x)+"px)",
							new_style["-webkit-transform-origin"] = "0 0",
							new_style["-webkit-transform"] = "rotate(270deg) translate(-"+Number(y)+""+"px,-"+Number(x)+"px)",
							new_style["ms-transform-origin"] = "0 0",
							new_style["ms-transform"] = "rotate(270deg) translate(-"+Number(y)+""+"px,-"+Number(x)+"px)",
							new_style["transform-origin"] = "0 0",
							new_style["transform"] = "rotate(270deg) translate(-"+Number(y)+""+"px,-"+Number(x)+"px)",
							new_style["top"] = "0";
							
					if(isIE && jQuery.browser.version!="9.0"){
							new_style["-ms-filter"] = "progid:DXImageTransform.Microsoft.Matrix(M11=-0, M12=1, M21=-1, M22=-0,sizingMethod='auto expand')";
							new_style["filter"] = "progid:DXImageTransform.Microsoft.Matrix(M11=-0, M12=1, M21=-1, M22=-0,sizingMethod='auto expand')";
							if(align == "left"){ y = height_thewindow - width_element; }
							if(align == "center"){ y = (height_thewindow - width_element) / 2; }
							if(align == "right"){ y = "0"; }
							new_style["marginTop"] = Number(y)+"px";
							new_style["marginLeft"] = 0;
							if(jQuery.browser.version=="7.0"){ new_style["left"] = 0; }
					}
				}
				
				element.css(new_style);

			}
			
			show_hide = function(){
				
				link_close = jQuery(".close", element);
				
				if(hide.toString()=="false" && link_close!=undefined){
					
					link_close.remove();
					
				} else {
					
					if(link_close.val()==undefined){
						element.prepend('<a href="#" class="close">X</a>');
					}
				
					jQuery(".close", element).toggle(function(){
						if (isIE) element.css({"overflow":"hidden","height":height_hide+"px"});
						else element.css({"overflow":"hidden"}).animate({"height":height_hide+"px"});
				  }, function(){
					  if (isIE) element.css({"overflow":"auto","height":"auto"});
						else element.css({"overflow":"auto"}).animate({"height":height_element+"px"});
					});
					
				}
				
			}
			
			position_calculate();

			jQuery(window).resize(function(){
				position_calculate();
			});

			show_hide();

    });
	  
  }

})(jQuery);