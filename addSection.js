    var modal = document.getElementById("myModal");
    var section = document.getElementByClassName('section-cards');
    var createButton = document.getElementByClassName('create-button');
    
    if(modal.style.display.value.equals("block")) {
        createButton.onclick = function() {

            alert("test");

            var iDiv = document.createElement('div');
            iDiv.className = 'column';
            section.appendChild(iDiv);

            var innerDiv = document.createElement('div');
            innerDiv.className = 'card section_E';
            iDiv.appendChild(innerDiv);

            var metaDiv = document.createElement('div');
            metaDiv.className = 'text';
            innerDiv.appendChild(metaDiv);
        }
    }