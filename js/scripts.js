console.log("ok");

//get thing to lightbox

const img1 = document.getElementById("img1");
const img4 = document.getElementById("img2");
const img5 = document.getElementById("img3");
const img6 = document.getElementById("img4");

//run lightbox
lightGallery(img1, {
  selector: "a"
});
lightGallery(img2, {
  selector: "a"
});
lightGallery(img3, {
  selector: "a"
});
lightGallery(img4, {
  selector: "a"
});


// scrolling 
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menuContainer = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menuContainer a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navContainer ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

