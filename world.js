window.onload = function () {
    var lookupBtn = document.querySelector('#lookup');
    var resultDiv = document.querySelector('#result');
    var countryInput = document.querySelector('#country');

    lookupBtn.addEventListener('click', function () {
        var query = countryInput.value;
        fetch('world.php?country=' + encodeURIComponent(query))
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    return Promise.reject('Something went wrong!');
                }
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    });

    var lookupCitiesBtn = document.querySelector('#lookup-cities');
    lookupCitiesBtn.addEventListener('click', function () {
        var query = countryInput.value;
        fetch('world.php?country=' + encodeURIComponent(query) + '&lookup=cities')
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    return Promise.reject('Something went wrong!');
                }
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    });
};