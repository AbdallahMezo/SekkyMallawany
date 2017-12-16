var btn = $('#button');
btn.click(function () {
    $('#result').empty()
    var string,
        whiteSpaces,
        word,
        words = [],
        result = [];
        
    string = $('#input').val()
    whiteSpaces = string.indexOf(' ')

    if (whiteSpaces <= 0) {
        $('#result').append('<p> أكتب كلمتين او اكتر ياعم</p>')
    } else {
        words = string.split(' ')
        for (var i = 0, l = words.length; i < l; i += 2) {
            var firstWord = words[i].slice(1);
            var char = words[i + 1].charAt(0);
            var totalWord = char.concat(firstWord)
            result.push(totalWord)
            console.log(totalWord)
        }
        var newStr = result.join(' ')
        $('#result').append('<p>' + newStr + '</p>')
    }
})