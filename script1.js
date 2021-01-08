var modal = document.getElementById("myModal");
var btn = document.getElementById("add_section");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function add() {
    let year0 = document.getElementById('year').value;
    let sec0 = document.getElementById('sec').value.toUpperCase();
    let adviser0 = document.getElementById('adv').value;
    let color = Math.floor(Math.random() * 16777215).toString(16);

    console.log(color)

    let yearsec = year0 + sec0;

    const div = document.createElement('div');

    div.className = 'secondrow';

    div.innerHTML = `
	<div class="column" style="padding-right: 0px; padding-left: 15px;">
	<div class="card" style="background-color:#` + color + `;">
	<div class="text">
	<a href="#"><img class="setting-icon" src="setting1.svg"></a>
	<h3 class="years">` + "BSIT " + yearsec + `</h3>
	<p class="advs">Advisor: ` + adviser0 + `</p>
	</div>
	</div>
	</div>
	`;
    document.getElementById('secondrow').appendChild(div);

    //close//clear
    modal.style.display = "none";
    document.getElementById('year').value = '';
    document.getElementById('sec').value = '';
    document.getElementById('adv').value = '';


    document.getElementById('secondrow').appendChild(div);
    modal.style.display = "none";
    document.getElementById('year').value = '';
    document.getElementById('sec').value = '';
    document.getElementById('adv').value = '';

}