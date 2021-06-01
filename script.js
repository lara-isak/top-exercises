let shoppingDone = prompt("Is shopping done for the week?", "");
let childsAllowance;

console.log(typeof(shoppingDone));
// An empty string converts to 0. A non-numeric string converts to NaN which is always false.

if(shoppingDone === "yes") {
  childsAllowance = 10;
  alert(childsAllowance);
}
else {
  childsAllowance = 5;
  alert(childsAllowance);
}