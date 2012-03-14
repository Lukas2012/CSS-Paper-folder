(function($) {
	$(document).ready(function() {
        //hundreds of thousands of variables ;)
		var button = $('button#folder'),
			buttonSet = $('button#setter'),
			fold = $('.wrapper'),
			paper = $('.wrapper .part'),
			odd = $('.wrapper .part:nth-child(1)'),
			even = $('.wrapper .part:nth-child(2)'),
			closed = false,
			percVal = $('input.perc').attr('value'),
			alphaVal = percVal / 250,
			gVal = percVal / 25,
			hVal = $('input.heig').attr('value'),
			shadHeight = hVal / 2
			rePos = hVal / 4 * gVal,
			rePosWrap = rePos * 2,
			newDeg = 90 / 4 * gVal,
			newScal = 1 - (1 / 4 * gVal);

			$('#animate_button').click(function(){
				fold.toggleClass('animate');
				$(this).toggleClass('active');
			});
        //set the current fold onLoad
		odd.css('-webkit-transform', 'skewX(' + newDeg + 'deg) scaleY(' + newScal + ')').css('box-shadow','-4px 4px 4px rgba(0,0,0,0.2), 0 ' + shadHeight + 'px ' + shadHeight + 'px rgba(111,111,111,' + alphaVal +') inset, 0 -' + shadHeight + 'px ' + shadHeight + 'px rgba(255,255,255,' + alphaVal +') inset');
		even.css('-webkit-transform', 'skewX(-' + newDeg + 'deg) scaleY(' + newScal + ')').css('box-shadow','-4px 4px 4px rgba(0,0,0,0.2), 0 ' + shadHeight + 'px ' + shadHeight + 'px rgba(111,111,111,' + alphaVal +') inset, 0 -' + shadHeight + 'px ' + shadHeight + 'px rgba(0,0,0,' + alphaVal +') inset');

        // the paper position Y
		fold.css('-webkit-transform', 'translateY(-' + rePos + 'px) translateX(' + rePos + 'px)');

        //Each fold wrapper needs to be moved to a new Y position
		$(".partwrap").each(function() {
			var goUp = $(".partwrap").index(this) * rePosWrap;
			$(this).css('-webkit-transform', 'translateY(-' + goUp + 'px)');
		});


        //The RGB sliders will change the paper color
		$('input.colorR , input.colorG, input.colorB').change(function() {
			crVal = $('input.colorR').attr('value');
			cgVal = $('input.colorG').attr('value');
			cbVal = $('input.colorB').attr('value');

            // live change of the variable suffix
            $('#red').text(crVal);
            $('#green').text(cgVal);
            $('#blue').text(cbVal);
			paper.css('background-color','rgb(' + crVal + ', ' + cgVal + ',' + cbVal + ')' );
        });

        //update the onLoaod settings on live change
		$('input.perc,input.heig').change(function() {
			percVal = $('input.perc').attr('value') ;
			alphaVal = percVal / 250;
			gVal = percVal / 25;
			hVal = $('input.heig').attr('value');
			shadHeight = hVal / 2;
			rePos = hVal / 4 * gVal;
			rePosWrap = rePos * 2;
			newDeg = 90 / 4 * gVal;
			newScal = 1 - (1 / 4 * gVal);

            $('#percentage').text(percVal);
            $('#height').text(hVal);

			paper.css('height',hVal + 'px');
			odd.css('-webkit-transform', 'skewX(' + newDeg + 'deg) scaleY(' + newScal + ')').css('box-shadow','-4px 4px 4px rgba(0,0,0,0.2), 0 ' + shadHeight + 'px ' + shadHeight + 'px rgba(111,111,111,' + alphaVal +') inset, 0 -' + shadHeight + 'px ' + shadHeight + 'px rgba(255,255,255,' + alphaVal +') inset');
			even.css('-webkit-transform', 'skewX(-' + newDeg + 'deg) scaleY(' + newScal + ')').css('box-shadow','-4px 4px 4px rgba(0,0,0,0.2), 0 ' + shadHeight + 'px ' + shadHeight + 'px rgba(111,111,111,' + alphaVal +') inset, 0 -' + shadHeight + 'px ' + shadHeight + 'px rgba(0,0,0,' + alphaVal +') inset');

			fold.css('-webkit-transform', 'translateY(-' + rePos + 'px) translateX(' + rePos + 'px)');

			$(".partwrap").each(function() {
				goUp = $(".partwrap").index(this) * rePosWrap;
				$(this).css('-webkit-transform', 'translateY(-' + goUp + 'px)');
			});
        });
    });
})(jQuery);