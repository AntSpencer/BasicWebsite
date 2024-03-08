function ChangeTextTo(x = "test", y = "workiing") {
    document.getElementById(x).innerHTML = y;
}

function MakeBox(id = "Null", projectName = "NULL", paragraphData = "Lorem ipsum dolor"
) {

    document.write(
        "<div class=\"container\" id=\n" + id + "\"><h1>" + projectName + "</h1>" +
        "<p>" + paragraphData + "</p>" +
        "</div>"

        );
}