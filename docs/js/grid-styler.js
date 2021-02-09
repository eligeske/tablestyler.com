/*  
Grid Styler
Version: 1.2.2
Author: eli geske
Author URL: http://www.eligeske.com/
*/


$(document).ready(function(){
	set.getVals();
	set.makeCss();
	$('.color, select').change(function(){ set.updatePageCss(); });
	$('.bold-box input').click(function(){ set.checkTheBoxes($(this).attr('id')); set.updatePageCss(); });			   
	$('.theme-box').click(function(){ set.loadTheme($(this).attr('id')); set.updatePageCss(); set.reColor(); });
						   					   
	set.checkTheBoxes('thead');
	set.checkTheBoxes('tfoot');
	set.classBoxShow('tbodyAltRows');
	set.classBoxShow('tbodyColLines');
	set.classBoxShow('theadColLines');
	set.classBoxShow('tfootPaging');
	set.positionBox();
		
	$('#sidebar1 h2 input').click(function(){		
		set.checkTheBoxes($(this).attr('id'));
		set.updatePageCss();
	});	
	
	$('.cboxTr').click(function(){		
		set.classBoxShow($(this).attr('id'));
		set.updatePageCss();
	});	
	
	$(window).scroll(function () {
		set.positionBox();
	});
	$('.bold-box input').click(function(){
		if($(this).is(':checked')){
			$(this).next('span').css('font-weight','bold');	
		}else{
			$(this).next('span').css('font-weight','normal');
		}
	});
	// slidedown menu
	$('#html_btn').click(function(){
		var vis = $('#menu_cont').is(':visible');
		var vis2 = $('#css').is(':visible');
		$('#html textarea').val(set.makeOutputHtml());
		if(!vis){
			$('#html').show();	
			$('#html textarea').show();	
			$('#menu_cont').slideDown();	
		}else if(vis && vis2){
			$('#html').show();
			$('#css').hide();
		}else{
			$('#html').hide();
			$('#menu_cont').slideUp();
		}				  
	});
	
	$('#css_btn').click(function(){
		var vis = $('#menu_cont').is(':visible');
		var vis2 = $('#html').is(':visible');
		$('#css textarea').val(set.makeCss());
		if(!vis){
			$('#css').show();
			$('#menu_cont').slideDown();	
		}else if(vis && vis2){
			$('#css').show();
			$('#html').hide();
		}else{
			$('#css').hide();
			$('#menu_cont').slideUp();
		}				  
	});
	
	// sliders
	$(".slider").slider({ 
			range: "min",
			slide: function(event, ui) {
				$id = $(this).attr('id');
				$id = $id.replace('slider_','');
				$("#" + $id).val(ui.value + 'px');
				set.updatePageCss();
			}
	});	
	$(".fontsize").slider({
			value: 12,
			min: 10,
			max: 24
	});
	$(".border").slider({
			value: 1,
			min: 0,
			max: 10
	});	
	$(".radius").slider({
			value: 3,
			min: 0,
			max: 20
	});
	$(".padding").slider({
			value: 3,
			min: 0,
			max: 20
	});
	
	$('#tCols').unbind('blur').bind('blur',function(){
		checkInpVal($(this),50,1);
	});
	$('#tRows').unbind('blur').bind('blur',function(){
		checkInpVal($(this),1500,1);
	});
});


function checkInpVal(obj,max,min){
	var v = obj.val();
	if(v<min){ obj.val(min); return; }
	if(v>max){ obj.val(max); }
}

 var set = {
	 		loadTheme:function($id){
			$id = $id.replace('theme','');
			var theme = Array();	
			// MAKE CSS
						/* btmgrad,topgrad/border,thline,tbline,altcolor, activePaging */
			theme[1] = Array('006699','00557F','0070A8','E1EEF4','E1EEf4','FFFFFF');
			theme[2] = Array('991821','80141C','B01C26','F7CDCD','F7CDCD','FFFFFF');
			theme[3] = Array('36752D','275420','36752D','C6FFC2','DFFFDE','FFFFFF');
			theme[4] = Array('652299','4D1A75','714399','E7BDFF','F4E3FF','FFFFFF');
			theme[5] = Array('A65B1A','7F4614','BF691E','D9CFB8','F0E5CC','FFFFFF');			
			theme[6] = Array('8C8C8C','7D7D7D','A3A3A3','DBDBDB','EBEBEB','F5F5F5');
			var sel = theme[$id];
			
			
			// SET VALS
				$('#theadBottomGradientColor,#borderColor,#tfootPagingTopGradientColor,#tfootPagingBorderColor, #tfootPagingActiveBackgroundColor').val(sel[0]);
				$('#tbodyFontColor, #tbodyAltFontColor,#tfootFontColor,#theadTopGradientColor, #tfootPagingActiveBorderColor,#tfootPagingBottomGradientColor').val(sel[1]);
				
				$('#tfootBackgroundColor').val(sel[4]);
				$('#tbodyAltBackgroundColor').val(sel[4]);
				$('#theadColLineColor').val(sel[2]);
				$('#tbodyColLineColor').val(sel[3]);
				
				$('#tfootPagingActiveFontColor').val(sel[5]);
				$('#tfootPagingFontColor').val(sel[5]);
			
		},
		reColor : function (){
			$('.color').each(function(){				
				$(this).css('background-color','#' + $(this).val());				
			});
		},
		getVals : function(){
			this.font 					= $('#font').val();
			this.borderWidth  			= $('#borderWidth').val();
			this.borderColor  			= $('#borderColor').val();
			this.borderRadius 			= $('#borderRadius').val();
			this.tbodyCellPadding_tb  	= $('#tbodyCellPadding_tb').val();
			this.tbodyCellPadding_lr  	= $('#tbodyCellPadding_lr').val();
			this.thead 					= ($('#thead').is(':checked'))?1:0;
			this.theadFontSize 			= $('#theadFontSize').val();
			this.theadBold 				= ($('#theadBold').is(':checked'))?1:0;
			this.theadFontColor 		= $('#theadFontColor').val();
			this.theadTopGradientColor 	  = $('#theadTopGradientColor').val();
			this.theadBottomGradientColor = $('#theadBottomGradientColor').val();
			this.theadColLines			= ($('#theadColLines').is(':checked'))?1:0;
			this.theadColLineWidth  	= $('#theadColLineWidth').val();
			this.theadColLineColor 		= $('#theadColLineColor').val();
			this.tbodyFontSize 			= $('#tbodyFontSize').val();
			this.tbodyBold 				= ($('#tbodyBold').is(':checked'))?1:0;
			this.tbodyFontColor 		= $('#tbodyFontColor').val();			
			this.tbodyAltRows			= ($('#tbodyAltRows').is(':checked'))?1:0;
			this.tbodyAltFontColor 		= $('#tbodyAltFontColor').val();
			this.tbodyAltBackgroundColor = $('#tbodyAltBackgroundColor').val();	
			
			this.tbodyColLines			= ($('#tbodyColLines').is(':checked'))?1:0;
			this.tbodyColLineWidth  	= $('#tbodyColLineWidth').val();
			this.tbodyColLineColor 		= $('#tbodyColLineColor').val();	
			
			this.tbodyRowLines			= ($('#tbodyRowLines').is(':checked'))?1:0;
			this.tbodyRowLineWidth  	= $('#tbodyRowLineWidth').val();
			this.tbodyRowLineColor 		= $('#tbodyRowLineColor').val();			
			
			
			this.tfoot 					= ($('#tfoot').is(':checked'))?1:0;
			this.tfootFontSize 			= $('#tfootFontSize').val();
			this.tfootPadding 			= $('#tfootPadding').val();
			this.tfootBackgroundColor	= $('#tfootBackgroundColor').val();
			
			this.tfootPaging			= ($('#tfootPaging').is(':checked'))?1:0;
			this.tfootPagingBorderColor	= $('#tfootPagingBorderColor').val();
			this.tfootPagingBorderWidth	= $('#tfootPagingBorderWidth').val();
			this.tfootPagingBorderRadius= $('#tfootPagingBorderRadius').val();
			this.tfootPagingFontColor	= $('#tfootPagingFontColor').val();
			
			this.tfootPagingTopGradientColor = $('#tfootPagingTopGradientColor').val();
			this.tfootPagingBottomGradientColor	= $('#tfootPagingBottomGradientColor').val();
			this.tfootPagingActiveFontColor	= $('#tfootPagingActiveFontColor').val();
			this.tfootPagingActiveBackgroundColor	= $('#tfootPagingActiveBackgroundColor').val();
			this.tfootPagingActiveBorderColor	= $('#tfootPagingActiveBorderColor').val();
			
			this.tCols = $('#tCols').val();
			this.tRows = $('#tRows').val();
			
		},
		makeCss : function(){
			this.css = '.datagrid table { border-collapse: collapse; text-align: left; width: 100%; } ';
			// set 
			this.css += '.datagrid {';		
			this.css += 'font: normal 12px/150% '+this.font+'; ';
			this.css += 'background: #fff; overflow: hidden; ';			
			if(this.borderWidth != "0px"){
				this.css += 'border: '+this.borderWidth+' solid #'+this.borderColor+'; '; }
			if(this.borderRadius != "0px"){
				this.css += '-webkit-border-radius: '+this.borderRadius+'; -moz-border-radius: '+this.borderRadius+'; border-radius: '+this.borderRadius+'; '; }
			this.css += '}';
			this.css += '.datagrid table td, .datagrid table th { padding: '+this.tbodyCellPadding_tb+' '+this.tbodyCellPadding_lr+'; }';
			
			if(this.thead){ // set header css
				this.css += '.datagrid table thead th {';
				// GRADIENT
					this.css += 'background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #'+this.theadBottomGradientColor+'), color-stop(1, #'+this.theadTopGradientColor+') );';
					this.css += 'background:-moz-linear-gradient( center top, #'+this.theadBottomGradientColor+' 5%, #'+this.theadTopGradientColor+' 100% );';
					this.css += "filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#"+this.theadBottomGradientColor+"', endColorstr='#"+this.theadTopGradientColor+"');";
					this.css += 'background-color:#'+this.theadBottomGradientColor+'; ';
				// FONT
					this.css += 'color:#'+this.theadFontColor+'; ';
					this.css += 'font-size: '+this.theadFontSize+'; ';
				if(this.theadBold){
					this.css += 'font-weight: bold; '; }
				else{
					this.css += 'font-weight: normal; '; }
					
				 if(this.theadColLines && this.theadColLineWidth){
					this.css += 'border-left: '+this.theadColLineWidth+' solid #'+this.theadColLineColor+'; ';
				}
				this.css += '} ';
				this.css += '.datagrid table thead th:first-child { border: none; }';
			}
			this.css += '.datagrid table tbody td { ';
			this.css += 'color: #'+this.tbodyFontColor+'; ';
			if(this.tbodyColLines && this.tbodyColLineWidth != '0px'){
				this.css += 'border-left: '+this.tbodyColLineWidth+' solid #'+this.tbodyColLineColor+';'; }
			this.css += 'font-size: '+this.tbodyFontSize+';';
			
			if(this.tbodyRowLines && this.tbodyRowLineWidth != '0px'){
				this.css += 'border-bottom: '+this.tbodyRowLineWidth+' solid #'+this.tbodyRowLineColor+';'; }
			
			if(this.tbodyBold){
					this.css += 'font-weight: bold; '; }
				else{
					this.css += 'font-weight: normal; '; }
			this.css += '}';
			if(this.tbodyAltRows){
				this.css += '.datagrid table tbody .alt td { ';
 				this.css += 'background: #'+this.tbodyAltBackgroundColor+'; ';
				this.css += 'color: #'+this.tbodyAltFontColor+'; ';
				this.css += '}';
			}
			this.css += '.datagrid table tbody td:first-child { border-left: none; }';
			this.css += '.datagrid table tbody tr:last-child td { border-bottom: none; }';
			if(this.tfoot){
				this.css += '.datagrid table tfoot td div { ';
				if(this.border != "0px"){
					this.css += 'border-top: 1px solid #'+this.borderColor+';'; }
				
				this.css += 'background: #'+this.tfootBackgroundColor+';';
				//this.css += 'background: #'+this.tfootPadding+';';
				this.css += '} .datagrid table tfoot td { padding: 0; font-size: '+this.tfootFontSize+' } ';
				this.css += '.datagrid table tfoot td div{ padding: '+this.tfootPadding+'; }';
				
				if(this.tfootPaging){
						this.css += '.datagrid table tfoot td ul { margin: 0; padding:0; list-style: none; text-align: right; }';
						this.css += '.datagrid table tfoot  li { display: inline; }';
						this.css += '.datagrid table tfoot li a { text-decoration: none; display: inline-block;  padding: 2px 8px; margin: 1px;';
						this.css += 'color: #'+this.tfootPagingFontColor+';';
						
						if(this.tfootPagingBorderWidth != "0px"){
							this.css += 'border: '+this.tfootPagingBorderWidth+' solid #'+this.tfootPagingBorderColor+';';	
							if(this.tfootPagingBorderRadius != "0px"){
								this.css += '-webkit-border-radius: '+this.tfootPagingBorderRadius+'; -moz-border-radius: '+this.tfootPagingBorderRadius+'; border-radius: '+this.tfootPagingBorderRadius+'; ';
							}
						}
						this.css += 'background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #'+this.tfootPagingTopGradientColor+'), color-stop(1, #'+this.tfootPagingBottomGradientColor+') );';
						this.css += 'background:-moz-linear-gradient( center top, #'+this.tfootPagingTopGradientColor+' 5%, #'+this.tfootPagingBottomGradientColor+' 100% );';
						this.css += "filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#"+this.tfootPagingTopGradientColor+"', endColorstr='#"+this.tfootPagingBottomGradientColor+"');";
						this.css += 'background-color:#'+this.tfootPagingTopGradientColor+'; }';
						this.css += '.datagrid table tfoot ul.active, .datagrid table tfoot ul a:hover { text-decoration: none;';
						this.css += 'border-color: #'+this.tfootPagingActiveBorderColor+'; ';
						this.css += 'color: #'+this.tfootPagingActiveFontColor+'; ';
						this.css += 'background: none; background-color:#'+this.tfootPagingActiveBackgroundColor+';';
						this.css += '}';
					
				}
				
				
			}
			
			$('style').remove();
			$('head').append('<style type="text/css">' + this.css + '</style>');
			return this.css;
		},
		updatePageCss:function(){
			this.getVals();
			this.makeCss();
		},
		makeTR:function($alt){
			$cls = ' class="alt"';
			$f = false; $tr = "";
			
			$cols = this.makeCols("td","data");
			for(i = 1; i <= this.tRows; i++){
				$tr += "<tr"+(($f && $alt)?$cls:"")+">"+$cols+"</tr>\n";
				$f = ($f)?false:true;
			}
			return $tr;
		},
		makeCols: function($type,$text){
			$c = "";
			for(i = 1; i <= this.tCols; i++){
				$c += "<"+$type+">"+$text+"</"+$type+">";
			}
			return $c;
		},
		makeOutputHtml:function(){
			this.getVals();
			$output = '<div class="datagrid"><table>\n';
			if(this.thead){
				$output += '<thead><tr>'+this.makeCols("th", "header")+'</tr></thead>\n'; 
			}
			if(this.tfoot){
				$output += '<tfoot><tr><td colspan="'+this.tCols+'">';
				if(this.tfootPaging){
					 $output += '<div id="paging"><ul><li><a href="#"><span>Previous</span></a></li>';
                     $output += '<li><a href="#" class="active"><span>1</span></a></li><li><a href="#"><span>2</span></a></li>';
                     $output += '<li><a href="#"><span>3</span></a></li><li><a href="#"><span>4</span></a></li>';
                     $output += '<li><a href="#"><span>5</span></a></li><li><a href="#"><span>Next</span></a></li></ul></div>';
				}else{
					$output += '<div id="no-paging">&nbsp;</div>';	
				}
				$output += '</tr></tfoot>\n';
			}	
			$output += '<tbody>';
			$output += this.makeTR(this.tbodyAltRows);	
			$output += '</tbody>\n';
			$output += '</table></div>';
			return $output;
		},
		checkTheBoxes:function($id){
			if($('#'+$id).is(':checked')){
				$('#'+$id+'-box, '+$id).show();	
			}else{
				$('#'+$id+'-box, '+$id).hide();
			}
		},
		classBoxShow:function($id){
			if($('#'+$id).is(':checked')){
				$('.'+$id+'-box').show();	
				if($id == "tfootPaging"){ $('#paging').show(); $('#no-paging').hide(); }
			}else{
				$('.'+$id+'-box').hide();
				if($id == "tfootPaging"){ $('#no-paging').show(); $('#paging').hide(); }
			}
		},
		positionBox:function(){
			if($(window).scrollTop() > 123){
				 $('#fixedCont').css({'position':'fixed','top':'55px'});				 
			 }else{
				 $('#fixedCont').css({'position':'','top':''});
			 }
		}		
	};




function xudmn(end){
	$inn = "<h2>Warning! Look at the browser bar, if the URL is not "+end+", then this a-hole copied my website.</h2>";
	$inn +=	"<p>What this means, is that this site is in copyright violation.</p><p>But don't fret, you can view the real site with it's current updates at <a href='"+end+"'>"+end+"</a></p>";	
	$html = "<div class='ovly' style='height: "+$(window).height()+"px; width: "+window.width+"px;'><div>"+$inn+"</div></div>";
	$('body').html('');
	$('body').css({'backgroundColor':'#000', 'color':'#fff'});
	$('body').prepend($html);
	
}

$(document).ready(function(){
	var one = "gr";var two = "id";var thr = "sty";var four = "ler.c";var five = "om";
	var end = one+two+thr+four+five;	
	var las = "http://"+end;
	var hos = location.host.toLowerCase();
	hos = hos.replace('www.','');
	if(hos != end.toLowerCase()){
		//xudmn(las);
	}	
});

