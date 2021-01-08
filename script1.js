
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

    function search() {
        var input = document.getElementById("Search");
        var filter = input.value.toLowerCase();
        var nodes = document.getElementsByClassName("sect0");
    
        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].innerText.toLowerCase().includes(filter)) {
                nodes[i].style.display = "block";
            } else {
                nodes[i].style.display = "none";
            }
        }
    
    }


let section_year=["3A" , "3B" , "3C" , "3D"];
let section_sect=["BSIT" , "BSIT" , "BSIT" , "BSIT"];
let section_adviser=["Mr. Rommel n" , "Mrs. Lyn Dalisaymo" , "Teacher3" , "Teacher4"];

var x = 3;
var y = 2;
function add(){
	var year0 = document.getElementById('year').value;
	var sec0 = document.getElementById('sec').value;
	var adviser0 = document.getElementById('adv').value;

	section_year.push(year0);
	section_sect.push(sec0);
	section_adviser.push(adviser0);

	x++;
	console.log(x);

	
	
		if (x%3==0) {
		let divv1 = document.createElement("div");
		divv1.setAttribute("class" , "sect"+[x]);


		const add_div1 = document.querySelector(".sect0")
		add_div1.appendChild(divv1);
		}
	
		if (x%3==1) {
		let divv2 = document.createElement("div");
		divv2.setAttribute("class" , "sect"+[x]);

		const add_div2 = document.querySelector(".sect1")
		add_div2.appendChild(divv2);
		}

		if (x%3==2) {
		let divv3 = document.createElement("div");
		divv3.setAttribute("class" , "sect"+[x]);

		const add_div3 = document.querySelector(".sect2")
		add_div3.appendChild(divv3);
		}

	var dot = document.createElement("img");
 	dot.setAttribute("src", "setting1.svg");
 	dot.setAttribute("class", "setting-icon");

	let p2 = document.createElement("p");
	let p3 = document.createElement("h3");

	p2.textContent = section_sect[x] + "-" + section_year[x];
	p3.textContent = section_adviser[x];
	p3.setAttribute("class" , "psect");

	const p22 = document.querySelector(".sect"+[x]);
	const p33 = document.querySelector(".sect"+[x]);
	const dott = document.querySelector(".sect"+[x]);

	p22.appendChild(p2);	
	p33.appendChild(p3);		
	dott.appendChild(dot);
}

/*
for (var i = 0, j = 0; i < section_year.length; i++) {
	if (i%3==0) {
		let newDiv1 = document.createElement("div");
		j++;
		newDiv1.setAttribute("class", "sectt"+[j])

		const cont = document.querySelector(".section");

		cont.appendChild(newDiv1);

	}



	let newDiv = document.createElement("div");
	newDiv.setAttribute("class", "sect"+[i])

	const content = document.querySelector(".sectt"+[j]);
	content.appendChild(newDiv);
	
	let p2 = document.createElement("p");
	
	p2.textContent = section_sect[i] + "-" + section_year[i] +" "+ section_adviser[i];
	
	const p22 = document.querySelector(".sect"+[i]);
	p22.appendChild(p2);	
	
}*/


for (var i = 0; i < section_year.length; i++) {

	if (i<3) {
	let div1 = document.createElement("div");
	div1.setAttribute("class" , "sect"+[i]);

	const add_div = document.querySelector(".sec")
	add_div.appendChild(div1);

	}
	else if (i>=3) {
		if (i%3==0) {
		let divv1 = document.createElement("div");
		divv1.setAttribute("class" , "sect"+[i]);

		const add_div1 = document.querySelector(".sect0")
		add_div1.appendChild(divv1);
		}
	}

	var dot = document.createElement("img");
 	dot.setAttribute("src", "setting1.svg");
 	dot.setAttribute("class", "setting-icon");

	let p2 = document.createElement("p");
	let p3 = document.createElement("h3");
	
	p2.textContent = section_sect[i] + "-" + section_year[i] ;
	p3.textContent = section_adviser[i];
	p3.setAttribute("class" , "psect");
	

	const p22 = document.querySelector(".sect"+[i]);
	const p33 = document.querySelector(".sect"+[i]);
	const dott = document.querySelector(".sect"+[i]);
	p22.appendChild(p2);	
	p33.appendChild(p3);
	dott.appendChild(dot);
}