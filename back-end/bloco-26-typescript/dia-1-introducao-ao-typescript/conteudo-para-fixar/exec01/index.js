var weekDay;
(function (weekDay) {
    weekDay[weekDay["sunday"] = 1] = "sunday";
    weekDay[weekDay["monday"] = 2] = "monday";
    weekDay[weekDay["tuesday"] = 3] = "tuesday";
    weekDay[weekDay["wednesday"] = 4] = "wednesday";
    weekDay[weekDay["thursday"] = 5] = "thursday";
    weekDay[weekDay["friday"] = 6] = "friday";
    weekDay[weekDay["saturday"] = 7] = "saturday";
})(weekDay || (weekDay = {}));
console.log(weekDay.sunday);
console.log(weekDay.wednesday);
console.log(weekDay.friday);
console.log(weekDay.saturday);
var rainbowColors;
(function (rainbowColors) {
    rainbowColors["color1"] = "vermelho";
    rainbowColors["color2"] = "laranja";
    rainbowColors["color3"] = "amarelo";
    rainbowColors["color4"] = "verde";
    rainbowColors["color5"] = "azul";
    rainbowColors["color6"] = "anil";
    rainbowColors["color7"] = "violeta";
})(rainbowColors || (rainbowColors = {}));
console.log(rainbowColors.color1);
console.log(rainbowColors.color3);
console.log(rainbowColors.color5);
console.log(rainbowColors.color7);
