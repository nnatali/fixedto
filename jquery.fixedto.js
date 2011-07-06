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
	
  jQuery.fn.fixedTo = function(options_user){
	  
    return this.each(function(){
	
			options_default = {
				position: "top",
				align: "center",
				hide: true
			};
			options = jQuery.extend(options_default,options_user);
			position = options.position;
			align = options.align;
			hide = options.hide;
			
			var element = jQuery(this),
					height_element = element.height(),
					width_element = element.width();
			
			position_calculate = function(){
				
				var thewindow = jQuery(window),
						height_thewindow = thewindow.height(),
						width_thewindow = thewindow.width();
				
				vertical = position == "top" || position == "left" ? "top" : "bottom",
				horizontal = align == "right" ? "right" : "left",
				margin_horizontal = align == "center" ? (width_thewindow - width_element) / 2 : 0;
				
				var new_style = {};
						new_style[vertical] = 0,
						new_style[horizontal] = margin_horizontal+"px";
				
				element.addClass("fixedTo").css(new_style);

			}
			
			position_calculate();
			
			jQuery(window).resize(function(){
				position_calculate();
			});
			
			
			position_rotate = function(){
				
				var new_style_left = {};
						new_style_left["-ms-filter"] = "progid:DXImageTransform.Microsoft.Matrix(M11=-0, M12=1, M21=-1, M22=-0,sizingMethod='auto expand')",
						new_style_left["filter"] = "progid:DXImageTransform.Microsoft.Matrix(M11=-0, M12=1, M21=-1, M22=-0,sizingMethod='auto expand')",
						new_style_left["-moz-transform-origin"] = "0 0",
						new_style_left["-moz-transform"] = "rotate(270deg)",
						new_style_left["-webkit-transform-origin"] = "0 0",
						new_style_left["-webkit-transform"] = "rotate(270deg)",
						new_style_left["transform-origin"] = "0 0",
						new_style_left["transform"] = "rotate(270deg)";

				var new_style_right = {};
						new_style_right["-ms-filter"] = "progid:DXImageTransform.Microsoft.Matrix(M11=-0, M12=-1, M21=1, M22=-0,sizingMethod='auto expand')",
						new_style_right["filter"] = "progid:DXImageTransform.Microsoft.Matrix(M11=0, M12=-1, M21=1, M22=0,sizingMethod='auto expand')",
						new_style_right["-moz-transform-origin"] = "0 0",
						new_style_right["-moz-transform"] = "rotate(90deg)",
						new_style_right["-webkit-transform-origin"] = "0 0",
						new_style_right["-webkit-transform"] = "rotate(90deg)",
						new_style_right["transform-origin"] = "0 0",
						new_style_right["transform"] = "rotate(90deg)";

				if (position == "left") 
					element.css(new_style_left);
				else if (position == "right")
					element.css(new_style_right);		
					
			}
			
			position_rotate();
			
			
    });// this.each
	  
  }//function fixedTo

})(jQuery);