// grab the existing copy
  let main = document.querySelector('main')
  let copy = main.innerText

  // split it into an array of 255 chars
  let copyArray = copy.match(/.{1,255}/g)

  // Log for debug
  console.info(copyArray)

  // Clear the original copy
  main.innerHTML = ''

  // print the new 'max-size' sized chunks
  for (let i = 0; i < copyArray.length; i++) {
      main.innerHTML += "<p>" + copyArray[i] + "</p>"
  }
