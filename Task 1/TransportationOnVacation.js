function rentalCarCost(d) {
  var day=0, week=0;
  if(d >= 3 && d < 7) {
    day = 20;
  }
  else if(d>=7) {
    week = 50;
  }
  return (d * 40) - day - week;
}