
var _window = $(window),
    _header = $('.header-right'),
  header-rightBottom;

_window.on('scroll',function(){
    heroBottom = $('.header-right').height();
    if(_window.scrollTop() > header-rightBottom){
        _header.addClass('fixed');
    }
    else{
        _header.removeClass('fixed');
    }
});

_window.trigger('scroll');
