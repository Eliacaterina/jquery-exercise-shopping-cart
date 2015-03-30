$(document).ready(function(){

  
  $('#calc-prices-button').click(function(){

    var Price = 0;

    for(var i=0; i<9; i++) {

      var quantity     =  Number($($('.quantity')[i]).val());
      var unitPrice    =  $('.item-price')[i];
      var arrayToText  =  $(unitPrice).text();
      var removeDollar =  arrayToText.replace("$", "");
      var itemPrice    =  Number(removeDollar);
      
      //var itemPrice = Number($($('.item-price')[i]).text().replace("$", ""));
      
      Price = Price + quantity * itemPrice;
    }
  
    $('#total-price').text(Price);
  });
  // pressing # calc-prices-button will sum all the row totals to a grand total and return it to the total  cost area*/
  // $('.item-price')


$('#calc-prices-button').click(function(){

    var Total=0;
    for(var i = 0; i < 9; i++) {
      var quantity     =  Number($($('.quantity')[i]).val());
      var unitPrice    =  $('.item-price')[i];
      var arrayToText  =  $(unitPrice).text();
      var removeDollar =  arrayToText.replace("$", "");
      var itemPrice    =  Number(removeDollar);

      Total = quantity * itemPrice;
    }
    $(".item-total").text(Total.toFixed(2));
    
  });




});