
        $(function () { 
            $(window).scroll(function () {
                if ($(this).scrollTop() > 1000) { 
                    $('.navbar-brand img').attr('src','assets/img/new-logo.svg');
                }
                if ($(this).scrollTop() < 1000) { 
                    $('.navbar-brand img').attr('src','assets/img/logo.svg');
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
   