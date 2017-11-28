//                   _ooOoo_
//                  o8888888o
//                  88" . "88
//                  (| -_- |)
//                  O\  =  /O
//               ____/`---'\____
//             .'  \\|     |//  `.
//            /  \\|||  :  |||//  \
//           /  _||||| -:- |||||-  \
//           |   | \\\  -  /// |   |
//           | \_|  ''\---/''  |   |
//           \  .-\__  `-`  ___/-. /
//         ___`. .'  /--.--\  `. . __
//      ."" '<  `.___\_<|>_/___.'  >'"".
//     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//     \  \ `-.   \_ __\ /__ _/   .-` /  
///======`-.____`-.___\_____/___.-`____.-'======
//                   `=---='
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//         佛祖保佑       永无BUG
//  本模块已经经过开光处理，绝无可能再产生bug
//=============================================
window.onload = function(){
//	var sUserAgent = navigator.userAgent.toLowerCase();  
//	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";  
//	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";  
//	var bIsMidp = sUserAgent.match(/midp/i) == "midp";  
//	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
//	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";  
//	var bIsAndroid = sUserAgent.match(/android/i) == "android";  
//	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";  
//	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";  
//	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {  
//	  alert("phone"); 
//		ctx.lineWidth = 2;
//	} else {  
//		alert("pc");  
//		ctx.lineWidth = 0.2;
//	}  
	//音频音量50%;
	var audio = $(".homepage-audioWrap").find("audio")[0];
	audio.volume = 0.4;
	console.log(audio)
	//创建canvasobj对象
	var canvasObj = function (){
		var canvas =document.querySelector('canvas'),
			ctx = canvas.getContext('2d'),
			ponitcolor = '#00bdbf',
			color = '#999';
		canvas.width = $(".homepage-canvasWrap").innerWidth();
		canvas.height = 500;
		canvas.style.display = 'block';
		ctx.fillStyle = ponitcolor;
		ctx.lineWidth = 0.3;
		ctx.strokeStyle = color;
		//自定义初始化的鼠标位置（自己可以随便写）
		var mousePosition = {
			x: 30 * canvas.width / 100,
			y: 30 * canvas.height / 100
		};
		var times = null;
		//定义points
		var points = {
			qty : 60,
			distance :100,
			radius : 10,
			array : []
		};
		//定义point的位置,移动速度
		function Point(){
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
			this.xspeed = -0.5 + Math.random();
			this.yspeed = -0.5 + Math.random();
			this.radius = Math.random()*3;//点的大小
		}
		//设置Point prototype method
		Point.prototype = {
			create: function(){
				ctx.beginPath();
				//通过 arc() 来创建圆，请把起始角设置为 0，结束角设置为 2*Math.PI。
				//context.arc(x,y,r,sAngle,eAngle,counterclockwise);
				//x:圆心x坐标;y:圆心y坐标;起始角度;结束角度;False = 顺时针，true = 逆时针。
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
				ctx.fill();
			},
			animate: function(){
				for(i = 0; i < points.qty; i++){
					//往数组里面添加点
					var point = points.array[i];
					if(point.x<0 || point.x > canvas.width){
						point.xspeed = - point.xspeed;
						point.yspeed = point.yspeed;
					}
					else if(point.y <0 ||point.y > canvas.height){
						point.yspeed = - point.yspeed;
						point.xspeed = point.xspeed;
					}
					point.x += point.xspeed;
					point.y += point.yspeed;
				}
			},
			line :function(){
				for(i=0;i<points.qty;i++){
					for(j =0;j<points.qty;j++){
						i_point = points.array[i];
						j_point = points.array[j];
//						if((i_point.x - mousePosition.x) < points.radius && (i_point.y-mousePosition.y) < points.radius &&(i_point.x - mousePosition.x) > -points.radius && (i_point.y - mousePosition.y) > - points.radius){
							if((i_point.x - j_point.x) <points.distance && (i_point.y- j_point.y) < points.distance && (i_point.x-j_point.x) > -points.distance && (i_point.y-j_point.y) > -points.distance){
								ctx.beginPath();
								ctx.moveTo(i_point.x,i_point.y);
								ctx.lineTo(j_point.x,j_point.y);
								ctx.stroke();
								ctx.closePath();
							} 
//						}
					}
				}
			}
		}//point prototype
		function crearPoint (){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			for( i = 0; i<points.qty ; i++){
				points.array.push(new Point());
				point = points.array[i];
				point.create();
			}
			point.animate();
			point.line();
		}
		crearPoint();
		clearInterval(times);
		//每隔50毫秒刷新一次页面
		times=setInterval(crearPoint, 30);
	};//canvasobj
	canvasObj();
	/*
	 *
	 */
//	$(".homepage-scrollbox").css({
//		width:$(".homepage-scrolllist").length*$(".homepage-scrolllist").width()
//	})
//	$(".homepage-rightBtn").click(function(){
//		var hei = $(".homepage-innerwarp").scrollLeft(),
//			len = $(".homepage-scrolllist").length,
//			wid = $(".homepage-scrolllist").width(),
//			max = $(".homepage-scrollbox").width(),
//			more = hei + wid;
//		if(more<max){
//			$(".homepage-innerwarp").scrollLeft(more);
//		}
//		
//	})
//	$(".homepage-leftBtn").click(function(){
//		var hei = $(".homepage-innerwarp").scrollLeft(),
//			len = $(".homepage-scrolllist").length,
//			wid = $(".homepage-scrolllist").width(),
//			max = $(".homepage-scrollbox").width(),
//			more = hei - wid;
//		if(more>=0){
//			$(".homepage-innerwarp").scrollLeft(more);
//		}
//		
//	})
	$.fn.bannerSwiper = function(option){
		this.default = {
			boxWrap:null,//必填
			nextBtn:false,
			prevBtn:false,
			autoplay:false,//自动播放
			times:3000,//自动播放时间
			speed:500,//切换速度
			circle:false,
			circleAlign:'bar',
			circleClick:false
		};
		var self = this;
		this.time = null;
		this.option = $.extend({},this.default,option);
		self.flag =true;
		var faterwrap = this.option.faterWrap;
		// 插件入口
		this.init = function(){
			this.bulid();
		}
		this.bulid = function(){
			var self = this,
				wrap = self.option.boxWrap;
			self.num = 1;
			self.nowTime=+new Date();
			self.width=self.width();
			var firstImg=$(wrap).find('li').first();
			var lastImg=$(wrap).find('li').last();
			$(wrap).append(firstImg.clone());
			$(wrap).prepend(lastImg.clone());
			self.length=$(wrap).find('li').length;
			$(wrap).width(self.width*self.length);
//			$(wrap).find('li').width(self.width)
//			$(wrap).parent().height(480);
//			$(wrap).parent().width(self.width);
			$(wrap).css({'left':-self.width*self.num})
			//是否自动轮播
			console.log(self)
			if(self.option.autoplay && !self.option.circle){
				self.plays();
			}
			// 是否启动按钮
			if(self.option.nextBtn){
				self.NextBtn();
				this.mouseIn();
			}
			if(self.option.prevBtn){
				self.prevBtn();
			}
			// 是否启动小圆点
			if(self.option.circle){
				if(self.option.circleAlign=="bar"){
					self.bar()
				}
			}
			if(self.option.circleClick){
				self.clickpoint();
			}
			
		}
		// 开始计时器，自动轮播
		this.plays = function(){
			var self = this;
			console.log('play');
			this.time = setInterval(function(){
				self.go(-self.width)
			},self.option.times);
		}
		// 停止计时器
		this.stops=function(){
			console.log('stop');
			clearInterval(self.time)
		}
		
		// 创建小圆点-bar
		this.bar=function(){
			var self=this;
			var ele=$('<ul id="circle-wrap"></ul>');
			for(var i=0;i<self.length-2;i++){
				$('<li class="homepage-scrollbar"><div class="homepage-barline"><div class="homepage-linebg"></div></div></li>').appendTo(ele)
			}
			ele.css({
				"position":"absolute",
				'bottom':'0',
				'right':'0',
				'left':'0',
				'height':'20px',
				"padding":"0 10px",
				'text-align':'center'
			});
			self.append(ele);
//			var lineWidth = 0;
//			
			self.linetimes();

		}
		this.linetimes = null;
//		var lineWidth = 0;
		this.barplaytimes = function(){
//			var num = this.num-1;
			console.log('play')
			
			
		}
		this.linetimes =function(){
			setTimeout(function(){
				self.barline(self.num)
			})
		} 
		this.stopbar = function(){
			console.log('stopbar');
			clearInterval(self.linetimes);
			$(".homepage-linding").stop().width(0);
		}
		this.barline = function(num){
			var num = num -1;
//			console.log("使用XX:"+num)
			$(".homepage-linebg").removeClass("homepage-linding")
			$('.homepage-scrollbar').eq(num).find(".homepage-linebg").addClass("homepage-linding").animate({
					width:'100%'
				},self.option.times,function(){
					$('#circle-wrap').find('.homepage-scrollbar').eq(num).find(".homepage-linebg").css('width',0);
					self.go(-self.width);
					self.linetimes();
			})
			self.num++;
			if(self.num>self.length-2){
				self.num = 1;
			}

//			clearInterval(self.linetimes)
		}
//		this.playbar = function(num){
//			$('#circle-wrap').find('.homepage-scrollbar').eq(num).find(".homepage-linebg").animate({width:'100%'},3000,function(){
//				num++;
//				$(this).width(0);
//				if(num >= self.length -2){
//					num = 0;
//				}
//				self.playbar(num);
//				
//			})
//
//		}
		this.clickpoint = function(){
			$(".homepage-scrollbar").click(function(){
				console.log(self.num)
				self.num=$(this).index()+1;
				self.flag=true;		
				if(self.flag){
					self.flag = false;
					clearInterval(self.stopbar());
					$(self.option.boxWrap).stop().animate({
						'left':-self.num*self.width
					},self.option.speed,function(){
						self.flag = true;
					})
				}
				console.log(this)
				self.playCircle(self.num-1)
			})
//			self.flag=true;
//					if(self.flag){
//						self.flag=false;
//						$(self.options.boxWrap).stop().animate({
//							'left':-self.num*self.width
//						},self.options.speed,function(){
//							self.flag=true;
//						});
//					}
//					self.playCircle(this.num-1);
			//			$('#circle-wrap').find('.homepage-scrollbar').click(function(){
//				self.num = $(this).index()+1;
//				$('#circle-wrap').find('.homepage-scrollbar').stop().removeClass("homepage-selLine");
//				$(this).addClass("homepage-selLine");
//				self.playbar($(this).index())
//			})
		}
		//小圆点指定当前项
		this.playCircle=function(num){
			$(".homepage-linebg").removeClass("homepage-linding")
			$('.homepage-scrollbar').eq(num).find(".homepage-linebg").addClass("homepage-lineding");
			self.linetimes();
		}
		// 手动创建按钮元素
		this.prevBtn=function(){
			$('.homepage-leftBtn').bind("click",function(){
				self.go(self.width);
			})
		}
		// 手动创建按钮元素
		this.NextBtn=function(){
			$('.homepage-rightBtn').bind("click",function(){
				self.go(-self.width);
			})
		}
		this.go = function(offset){
			var self = this;
			if(self.flag){
				self.flag = false;
//				if(offset<0){
//					self.num++;
//					if(self.num>self.length-2){
//						self.num = 1;
//					}
//				}
//				if(offset>0){
//					self.num--;
//					if(self.num <=0){
//						self.num = self.length-2;
//					}
//				}
				if(Math.ceil($(self.option.boxWrap).position().left)<-(self.length-2)*self.width){
					console.log(-self.width)
						$(self.option.boxWrap).css({
							'left':-self.width
						});
					}
				if(Math.ceil($(self.option.boxWrap).position().left)>-self.length){
					console.log(-self.width)
					$(self.option.boxWrap).css({
						'left':-self.width*(self.length-2)
					})
				}
//				self.playCircle(this.num-1);
				$(self.option.boxWrap).stop().animate({
						'left':$(self.option.boxWrap).position().left+offset
				},self.option.speed,function(){
					self.flag=true;
				});
			}
		}
		//左右切换
		this.mouseIn = function(){
			console.log(33)
			console.log($(faterwrap))
			$(faterwrap).mouseenter(function(){
				$(this).find(".homepage-switchBtn").css("display","block");
//				self.stopbar();
			}).mouseleave(function(){
				$(this).find(".homepage-switchBtn").css("display","")
			})
		}
		this.init();
		
		
	};//bannerSwiper
	$('.homepage-innerwarp').bannerSwiper({
			boxWrap:".homepage-scrollbox",
			faterWrap:".homepage-outerwarp",
			nextBtn:false,
			prevBtn:false,
			autoplay:true,
			circle:true,
			circleClick:true
	})
	//滚动条
	$(window).bind('scroll',function(){
		var scroll = $(this).scrollTop();
		if(scroll >= 800){
			$(".homepage-showlist2").find("img").addClass("homepage-imgAnimate1")
		}
	})

}//window.onload