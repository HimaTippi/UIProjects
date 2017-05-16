/**
 * @author Bindu
 */

/**
 * CLICK DOWN ICON
 */
$("#scrollIcon").click(function() {
	$('html,body').animate({
		scrollTop: $("#pageTwo").offset().top
	},
	'slow');
});

/**
 * ACTIVE MENU URL
 */
$(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("#navbarCollapse ul li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
     });
});

/**
 * MAP
 */
dojo.require("dijit.layout.BorderContainer");
      dojo.require("dijit.layout.ContentPane");
      dojo.require("esri.map");
      
      var map;

      function init() {
        map = new esri.Map("map", {
          basemap: "topo",
          center: [-122.31, 37.74],
          zoom: 11
        });
      }
      dojo.ready(init);