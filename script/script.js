$('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  }) 
  

  function OpenReadMore(a){
    const ReadMore=document.getElementById(a)
    ReadMore.style.display='block';
    document.querySelector("body").style.overflow='hidden';
    document.getElementById("main").style.filter='blur(4px)';

    
  }

  function CloseReadMore(a){
    const ReadMore=document.getElementById(a)
    ReadMore.style.display='none';
    document.querySelector("body").style.overflow='auto';
    document.getElementById("main").style.filter='none';
  }