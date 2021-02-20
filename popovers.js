$(function() {
  // Включаем поповер везде, где есть атрибут data-toggle="popover"
  $('[data-toggle="popover"]').popover({
    trigger: 'focus'
  }); 
})