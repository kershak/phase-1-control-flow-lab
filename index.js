function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance > 2500){
    return ('No can do.')
  }
  else if (distance < 400){
    return ('This one is on me!')
  }
  else if (distance <=2000 && distance >= 400){
    return ('That will be twenty bucks.')
  }
  else if (distance > 2000 && distance < 2500){
    return ('I will gladly take your thirty bucks.')
  }
}

function ternaryCheckCity(location){
  // Write your code here!
  let NYC;
  return location === 'NYC' ? "Ok, sounds good.":"No go."
}

function switchOnCharmFromTip(value){
  // Write your code here!
  switch (value){
  case 'generous':
    return 'Thank you so much.'
    break
  case 'not as generous':
    return 'Thank you.'
    break
  default: 
    return 'Bye.'
  }
}