var oUli = document.getElementById('ul').getElementsByTagName('li');
			var oEj = document.getElementById('ej');
			var oEjul = document.getElementById('ul1');
			var oEj1 = document.getElementById('ej1');
			var oEju2 = document.getElementById('ul2');
			var oEj2 = document.getElementById('ej2');
			var oEju3 = document.getElementById('ul3');
			var oleft_s = document.getElementById('left_s');
			var index = 0;
			var a = false;
			var b = true;
			for(var i=0;i<oUli.length;i++){
				oUli[i].index = i;
				oUli[i].onmouseenter = function(){
					index = this.index;
					switch(index){
						case 0:oEj1.style.opacity = oEju2.style.opacity = oEj2.style.opacity = oEju3.style.opacity = '0';
						oEj.style.opacity = oEjul.style.opacity = '1';
						break;
						case 1:oEj.style.opacity = oEjul.style.opacity = oEj2.style.opacity = oEju3.style.opacity = '0';
						oEj1.style.opacity = oEju2.style.opacity = '1';
						break;
						case 2:oEj.style.opacity = oEjul.style.opacity = oEj1.style.opacity = oEju2.style.opacity = '0';
						oEj2.style.opacity = oEju3.style.opacity = '1';
						break;
					}
				}
				}
				oEj.onmouseleave = function(){
					oEj.style.opacity = oEjul.style.opacity = '0';
				}
				oEj1.onmouseleave = function(){
					oEj1.style.opacity = oEju2.style.opacity = '0';
				}
				oEj2.onmouseleave = function(){
					oEj2.style.opacity = oEju3.style.opacity = '0';
				}
				var topValue = 0,t = 1,b = 0,c = true;
				var timer = setInterval(function(){
					if(topValue>150){
						t= -1;
					}else if(topValue<50){
						t= 1;
					}
						oleft_s.style.top = (topValue+50*t) + 'px';
						topValue = parseInt(oleft_s.style.top);
						c?b++:b--;
						switch(b){
							case 0:document.body.style.backgroundImage = "url('img/21.jpg')";c=true;
							break;
							case 1:document.body.style.backgroundImage = "url('img/24.jpg')";
							break;
							case 2:document.body.style.backgroundImage = "url('img/23.jpg')";
							break;
							case 3:document.body.style.backgroundImage = "url('img/22.jpg')";
							break;
							case 4:document.body.style.backgroundImage = "url('img/25.jpg')";c=false;
							break;
						}
						
				},2500)