function reverseChildren(parent) {
    for (var i = 1; i < parent.childNodes.length; i++){
        var split = String(parent.childNodes[i].textContent).split(" ").reverse();
        parent.childNodes[i].innerHTML = String(split).replaceAll(',',' ');
        parent.insertBefore(parent.childNodes[i], parent.firstChild);
        
    }
}