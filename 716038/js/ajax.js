function sendForm(form) {
    var i, fd = new FormData();
    //var queryType = form.id;

    var inputs = Array.prototype.slice.call(form.getElementsByTagName("input")),
        textareas = Array.prototype.slice.call(form.getElementsByTagName("textarea"));

    var elements = inputs.concat(textareas);

    var url = window.location.href;
    url = url.split("?id=");
    var id = url[1];

    fd.append("id", id);

    for (i = 0; i < elements.length; i++) {
        var element = elements[i];
        var elementType = element.type.toLowerCase();

        switch (elementType) {
            case "file":
                var image = element.files[0];
                console.log(image);
                fd.append(element.id, image);
                console.log(element.id, image);
                break;
            default:
                if (element.dataset.type === "Decimal") {
                    fd.append(element.id, parseFloat(element.value));
                    console.log(element.id, element.value);
                } else {
                    fd.append(element.id, element.value);
                    console.log(element.id, element.value);
                }
        }
    }
    xhr.send(fd);
}