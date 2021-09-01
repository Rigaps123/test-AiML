
        $(function () { 
            $(window).scroll(function () {
                if ($(this).scrollTop() > 600) { 
                    $('.navbar-brand img').attr('src','assets/img/new-logo.svg');
                    $(".main-nav").css("background","#fff");
                    $(".nav-link").css("color","#0d1028");
                    $(".active").css("color","#1dd3f8");
                    $(".dropdown-menu").css("background","#fff");
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
                if ($(this).scrollTop() > 600) { 
                    $('.logo img').attr('src','assets/img/new-logo.svg');
                    $(".mean-bar").css("background","#fff");
                    $(".nav-link").css("color","#0d1028");
                    $(".active").css("color","#1dd3f8");
                    $(".dropdown-menu").css("background","#fff");
                }
                if ($(this).scrollTop() < 600) { 
                    $('.logo img').attr('src','assets/img/logo.svg');
                    $(".mean-bar").css("background","none");
                    $(".nav-link").css("color","#fff");
                    $(".active").css("color","#1dd3f8");
                    $(".dropdown-menu").css("background","#0d1028");
                }
            })
        });
   