var counter = 0;



$(".b1").click(function(){

	counter = counter + 1;
    
    $("p").text("Quiz was taken " + counter + " times");
});