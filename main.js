function multiply(){
    var number_1=document.getElementById("input").value;
     var Area=number_1*number_1;
    var Perimeter=4*number_1;
    document.getElementById("ansArea").innerHTML=Area;
    document.getElementById("ansPerimeter").innerHTML=Perimeter;
  }