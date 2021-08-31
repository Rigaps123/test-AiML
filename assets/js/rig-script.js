
        $(function () { 
            $(window).scroll(function () {
                if ($(this).scrollTop() > 600) { 
                    $('.navbar-brand img').attr('src','assets/img/new-logo.svg');
                    $(".main-nav").css("background","#f2f2f2");
                    $(".nav-link").css("color","#0d1028");
                    $(".active").css("color","#1dd3f8");
                    $(".dropdown-menu").css("background","#f2f2f2");
                }
                if ($(this).scrollTop() < 600) { 
                    $('.navbar-brand img').attr('src','assets/img/logo.svg');
                    $(".main-nav").css("background","none");
                    $(".nav-link").css("color","#fff");
                    $(".active").css("color","#1dd3f8");
                    $(".dropdown-menu").css("background","#0d1028");
                }
            })
        });
		
		
		$(function () { 
            $(window).scroll(function () {
                if ($(this).scrollTop() > 1000) { 
                    $('.logo img').attr('src','assets/img/new-logo.svg');
                }
                if ($(this).scrollTop() < 1000) { 
                    $('.logo img').attr('src','assets/img/logo.svg');
                }
            })
        });
   