console.log('The house always wins!')

var getID = document.getElementById('idInput')
var getColor = document.getElementById('colorInput')

//console.log(getID)
//console.log(colorInput)

function setCard(){
    var card = document.getElementById(idInput.value)
    console.log(card)
    card.style.color = colorInput.value
}

