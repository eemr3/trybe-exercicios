const wakingUp = () => 'Acordando!!';
const haveBreakfast = () => 'Bora tomar café!!';
const LetsGoToSleep = () => 'Partiu dormir!!';

const doingThings = (func, action) => action(func());

doingThings(wakingUp, console.log)
doingThings(haveBreakfast, console.log);
doingThings(LetsGoToSleep, console.log);