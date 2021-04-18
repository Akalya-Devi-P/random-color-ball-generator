//Function for Generating Random colors
function generateRandomColor() 
{
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
    return color;
}
//Function for Generating balls
function generateColorBalls()
{
   var box = document.getElementById('box').value;  
    for(var i=1;i<=box;i++)
    {
      var col = generateRandomColor();
      var div = document.createElement("div");
      div.id = "output";
      //div.innerHTML = i;
      div.style = "background-color:"+col+";"
      document.body.appendChild(div);
    }
}