btnAtkinsSelect.onclick=function(){
  ChangeForm(atkins)
}


btnPaleoSelect.onclick=function(){
  ChangeForm(paleo)
}


btnKetoSelect.onclick=function(){
  ChangeForm(keto)
}


btnVegetarianSelect.onclick=function(){
  ChangeForm(vegetarian)
}


btnMediterraneanSelect.onclick=function(){
  ChangeForm(mediterranean)
}


btnNoSugarSelect.onclick=function(){
  ChangeForm(noSugar)
}


btnVeganSelect.onclick=function(){
  ChangeForm(vegan)
}


btnPescetarianSelect.onclick=function(){
  ChangeForm(pescetarian)
}


hmbrSelectDiet.onshow=function(s){
if (typeof(s) == "object") {
  return
} else {
  switch(s) {
case "grocery list":
  hmbrSelectDiet.hide()
  ChangeForm(groceryList)
  break
case "settings"
  hmbrSelectDiet.hide()
  ChangeForm(settings)
  break
case "log in"
  hmbrSelectDiet.hide()
  ChangeForm(logIn)
  break
}
