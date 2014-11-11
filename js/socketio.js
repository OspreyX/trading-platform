var socket = io();

socket.on("quote", function(msg)
{
  console.log(msg);
  var symbol = msg["quote"]["symbol"],
      bidsz = msg["quote"]["bidsz"],
      bid = msg["quote"]["bid"],
      ask = msg["quote"]["ask"],
      asksz = msg["quote"]["asksz"];
  if(bidsz !== undefined)
  {
    $("#"+symbol+"-bidsz").text(bidsz);
  }
  if(bid !== undefined)
  {
    $("#"+symbol+"-bid").text(bid);
    bid = parseFloat(bid);
  }
  else
  {
    bid = parseFloat($("#"+symbol+"-bid").text());
  }
  if(asksz !== undefined)
  {
    $("#"+symbol+"-asksz").text(asksz);
  }
  if(ask !== undefined)
  {
    $("#"+symbol+"-ask").text(ask);
    ask = parseFloat(ask);
  }
  else
  {
    ask = parseFloat($("#"+symbol+"-ask").text());
  }
  $("#"+symbol+"-value").text(((ask-bid)/2+bid).toFixed(2));
});
