const button = document.querySelector("video");
button.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
            console.log('Habilita tu micro');
            console.log(stream);
            navigator.permissions.query({ name: 'microphone' })
                .then(function(permissionStatus) {
                    console.log("PermissionStatus: ", permissionStatus.state); // granted, denied, prompt
                    permissionStatus.onchange = function() {
                        console.log("Permission changed to " + this.state);
                    }
                });
        })
        .catch(function(err) {
            console.error(err);
            console.log('No mic for you!');
        });
});
