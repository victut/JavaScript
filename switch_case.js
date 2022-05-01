function myFunction() {
  let day;

switch (new Date().getDay()) {
case 0:
  day = 'Monday. Cook paella';
  break;
case 1:
  day = 'Tuesday. Walk around the city';
  break;
case 2:
  day = 'Wednesday. Watch a great movie';
  break;
case 3:
  day = 'Thursday. To meet friends';
  break;
case 4:
  day = 'Friday. Dine in a restaurant';
  break;
case 5:
  day = 'Saturday. Fly to another city';
  break;
case 6:
  day = 'Sunday. Go to a rock band concert';
  break;
}
document.getElementById("demo").innerHTML = "Today is " + day;
}