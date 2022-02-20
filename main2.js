function showquestion1 ()
{
 var question1="<h3>Q1-How did Diana and the tourists travel to the canyon?</h3>";
 var question2="<h3>Q2-Why did some of the tourists stay at the hotel today?</h3>";
 var question3="<h3>Q3-Who is Mark?</h3>";
 var question4="<h3>Q4-What did Diana do for lunch?</h3>";
 var question5="<h3>Q5-What does Diana think about her job?</h3>";
 var question6="<h3>Q6-What did Diana do when she arrived back in the hotel?</h3>";
 var question7="<h3>Q7-What is the program for tomorrow?</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7;
 document.getElementById("output1").innerHTML= row;
}

function hidequestion1()
{
document.getElementById("output1").innerHTML="";
}

function showanswer1 ()
{
 var question1="<h3>Ans1-Bus</h3>";
 var question2="<h3>Ans2-They were tired</h3>";
 var question3="<h3>Ans3-Diana`s colleague</h3>";
 var question4="<h3>Ans4-She did`nt have time for lunch</h3>";
 var question5="<h3>Ans5-The wages are good and she likes the job too.</h3>";
 var question6="<h3>Ans6-She spoke to the head of the tourist group about tomorrow.</h3>";
 var question7="<h3>Ans7-Museum in the morning, aquarium in the afternoon.</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7;
 document.getElementById("output1ans").innerHTML= row;
}

function hideanswer1()
{
document.getElementById("output1ans").innerHTML="";
}



function showquestion2 ()
{
 var question1="<h3>Q1-Did Jim and Alicia have two dogs?</h3>";
 var question2="<h3>Q2-Were the dogs named Bugs and Bunny?</h3>";
 var question3="<h3>Q3-Were both dogs 15 years old?</h3>";
 var question4="<h3>Q4-Was Bunny dying?</h3>";
 var question5="<h3>Q5-Was Bugs dying too?</h3>";
 var question6="<h3>Q6-Was Bunny Bugs's mother?</h3>";
 var question7="<h3>Q7-Had Bugs and Bunny been together for 16 years?</h3>";
 var question8="<h3>Q8-Had they ever been separated for more than a couple of hours?</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output2").innerHTML= row;
}

function hidequestion2()
{
document.getElementById("output2").innerHTML="";
}

function showanswer2 ()
{
 var question1="<h3>Ans1-Yes</h3>";
 var question2="<h3>Ans2-Yes</h3>";
 var question3="<h3>Ans3-Yes</h3>";
 var question4="<h3>Ans4-Yes</h3>";
 var question5="<h3>Ans5-No</h3>";
 var question6="<h3>Ans6-No</h3>";
 var question7="<h3>Ans7-No</h3>";
 var question8="<h3>Ans8-No</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output2ans").innerHTML= row;
}

function hideanswer2()
{
document.getElementById("output2ans").innerHTML="";
}



function showquestion3 ()
{
 var heading="<h3>Who said these words</h3>";
 var question1="<h3>Q1-I don't understand very much about computers.</h3>";
 var question2="<h3>Q2-I want a computer that we can use in the lounge.</h3>";
 var question3="<h3>Q3-We need to make a decision today.</h3>";
 var question4="<h3>Q4-Computer terminology confuses me.</h3>";
 var question5="<h3>Q5-We don't need a printer.</h3>";
 var question6="<h3>Q6-I would prefer not to get a webcam.</h3>";
 var row=heading+question1+question2+question3+question4+question5+question6;
 document.getElementById("output3").innerHTML= row;
}

function hidequestion3()
{
document.getElementById("output3").innerHTML="";
}

function showanswer3 ()
{
 var question1="<h3>Ans1-Stephen</h3>";
 var question2="<h3>Ans2-Janice</h3>";
 var question3="<h3>Ans3-Janice</h3>";
 var question4="<h3>Ans4-Stephen</h3>";
 var question5="<h3>Ans5-Janice</h3>";
 var question6="<h3>Ans6-Stephen</h3>";

 var row=question1+question2+question3+question4+question5+question6;
 document.getElementById("output3ans").innerHTML= row;
}

function hideanswer3()
{
document.getElementById("output3ans").innerHTML="";
}

function back1(){
window.location="index.html";
}




function showquestion4 ()
{
 var heading="<h3>State true or false</h3>"
 var question1="<h3>Q1-Jackie was surprised that David had problems placing his order.</h3>";
 var question2="<h3>Q2-David needs to order the software for his office.</h3>";
 var question3="<h3>Q3-Jackie gives him the 25% discount even though he's not ordering online.</h3>";
 var question4="<h3>Q4-Jackie tells David that the free microphones are usually not very good quality. </h3>";
 var question5="<h3>Q5-David buys both versions of the software.</h3>";

 
 var row=question1+question2+question3+question4+question5;
 document.getElementById("output4").innerHTML= row;
}

function hidequestion4()
{
document.getElementById("output4").innerHTML="";
}

function showanswer4 ()
{
 var question1="<h3>Ans1-False</h3>";
 var question2="<h3>Ans2-True</h3>";
 var question3="<h3>Ans3-True</h3>";
 var question4="<h3>Ans4-True</h3>";
 var question5="<h3>Ans5-False</h3>";
 
 var row=question1+question2+question3+question4+question5;
 document.getElementById("output4ans").innerHTML= row;
}

function hideanswer4()
{
document.getElementById("output4ans").innerHTML="";
}

function back1(){
window.location="index.html";
}




function showquestion5 ()
{
 
 var question1="<h3>Q1-Will broadcasts of all TV signals be digital?</h3>";
 var question2="<h3>Q2-Will digital signals replace analog signals?</h3>";
 var question3="<h3>Q3-Will reception for cable TV or satellite TV be affected?</h3>";
 var question4="<h3>Q4-Will rabbit ears work with the new digital signals?</h3>";
 var question5="<h3>Q5-Will people who use rabbit ears have to buy a converter?</h3>";
 var question6="<h3>Q6-Will the converters cost about $5 each?</h3>";
 var question7="<h3>Q7-Was Chris going to buy a converter?</h3>";
 var question8="<h3>Q8-Was he going to give his two TVs away?</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output5").innerHTML= row;
}

function hidequestion5()
{
document.getElementById("output5").innerHTML="";
}

function showanswer5 ()
{
 var question1="<h3>Ans1-Yes</h3>";
 var question2="<h3>Ans2-Yes</h3>";
 var question3="<h3>Ans3-No</h3>";
 var question4="<h3>Ans4-No</h3>";
 var question5="<h3>Ans5-Yes</h3>";
 var question6="<h3>Ans6-No</h3>";
 var question7="<h3>Ans7-No</h3>";
 var question8="<h3>Ans8-Yes</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output5ans").innerHTML= row;
}

function hideanswer5()
{
document.getElementById("output5ans").innerHTML="";
}






function showquestion6 ()
{
 
 var question1="<h3>Q1-Did he look at the label?</h3>";
 var question2="<h3>Q2-Was there a label on the container?</h3>";
 var question3="<h3>Q3-Was it a small glass container?</h3>";
 var question4="<h3>Q4-Did the label say Fresh Garlic?</h3>";
 var question5="<h3>Q5-Was there a photo of a garlic bulb on the label?</h3>";
 var question6="<h3>Q6-Can food labels be tricky?</h3>";
 var question7="<h3>Q7-Was there an ingredients label?</h3>";
 var question8="<h3>Q8-Was there a phone number?</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output6").innerHTML= row;
}

function hidequestion6()
{
document.getElementById("output6").innerHTML="";
}

function showanswer6 ()
{
 var question1="<h3>Ans1-Yes</h3>";
 var question2="<h3>Ans2-Yes</h3>";
 var question3="<h3>Ans3-No</h3>";
 var question4="<h3>Ans4-No</h3>";
 var question5="<h3>Ans5-No</h3>";
 var question6="<h3>Ans6-Yes</h3>";
 var question7="<h3>Ans7-No</h3>";
 var question8="<h3>Ans8-Yes</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output6ans").innerHTML= row;
}

function hideanswer6()
{
document.getElementById("output6ans").innerHTML="";
}





function showquestion7 ()
{
 var heading="<h3>State true or false</h3>"
 var question1="<h3>Q1-Richard spent about two months in Thailand.</h3>";
 var question2="<h3>Q2-This photo was taken near the beginning of his stay in Thailand.</h3>";
 var question3="<h3>Q3-Richard was hiding because he doesn't like having his photo taken.</h3>";
 var question4="<h3>Q4-Richard is still in touch with the girl from Manchester.</h3>";
 var question5="<h3>Q5-Carlos is Peruvian.</h3>";
 var question6="<h3>Q6-Melanie's birthday is July 5th.</h3>";
 var question7="<h3>Q7-Jackie had more teaching experience than Richard.</h3>";
 var question8="<h3>Q8-Richard preferred teaching the adults in Thailand.</h3>";
 
 var row=heading+question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output7").innerHTML= row;
}

function hidequestion7()
{
document.getElementById("output7").innerHTML="";
}

function showanswer7 ()
{
 var question1="<h3>Ans1-True</h3>";
 var question2="<h3>Ans2-False</h3>";
 var question3="<h3>Ans3-False</h3>";
 var question4="<h3>Ans4-True</h3>";
 var question5="<h3>Ans5-False</h3>";
 var question6="<h3>Ans6-False</h3>";
 var question7="<h3>Ans7-True</h3>";
 var question8="<h3>Ans8-False</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output7ans").innerHTML= row;
}

function hideanswer7()
{
document.getElementById("output7ans").innerHTML="";
}