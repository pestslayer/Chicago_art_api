function displayMadonna() {
    fetch(`https://api.artic.edu/api/v1/artworks/3752`)
        .then(response => response.json())
        .then(data => {
            console.log(data.data.title, data.data.artist_title)
            console.log(data)
            var imageTitle = data.data.title
            var artistTitle = data.data.artist_title
            var dateDisplay = data.data.date_display
            var mediumDisplay = data.data.medium_display


            document.getElementById('info').innerHTML = `<p> Title: ${imageTitle} </p><p> Artist: ${artistTitle} </p><p> Date: ${dateDisplay} </p><p> Medium: ${mediumDisplay} '</p>'`
            var modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
            modal.show()
        })
        .catch(error => console.error('Error fetching data:', error));
};

function displayEarrings() {
    fetch(`https://api.artic.edu/api/v1/artworks/190856`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var imageTitle = data.data.title
        var artistTitle = data.data.artist_title
        var dateDisplay = data.data.date_display
        var mediumDisplay = data.data.medium_display
        
            document.getElementById('info').innerHTML = `<p> Title: ${imageTitle} </p><p> Artist: ${artistTitle} </p><p> Date: ${dateDisplay} </p><p> Medium: ${mediumDisplay} '</p>'`
            var modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
            modal.show()
    })
    .catch(error => console.error('Error fetching data:', error))
};

function displayArmlet() {
    fetch(`https://api.artic.edu/api/v1/artworks/117781`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var imageTitle = data.data.title
        var artistTitle = data.data.artist_title
        var dateDisplay = data.data.date_display
        var mediumDisplay = data.data.medium_display

        document.getElementById('info').innerHTML = `<p> Title: ${imageTitle} </p><p> Artist: ${artistTitle} </p><p> Date: ${dateDisplay} </p><p> Medium: ${mediumDisplay} '</p>'`
        var modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
        modal.show()

    })
    .catch(error => console.error('Error fetching data:', error))
};

function displayFrame() {
    fetch(`https://api.artic.edu/api/v1/artworks/117781`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var imageTitle = data.data.title
        var artistTitle = data.data.artist_title
        var dateDisplay = data.data.date_display
        var mediumDisplay = data.data.medium_display

        document.getElementById('info').innerHTML = `<p> Title: ${imageTitle} </p><p> Artist: ${artistTitle} </p><p> Date: ${dateDisplay} </p><p> Medium: ${mediumDisplay} '</p>'`
        var modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
        modal.show()
    })
    .catch(error => console.error('Error fetching data:', error))
}



