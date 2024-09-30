const searchProfile = document.querySelector('#searchProfile');
const profile = new Profile();
const ui= new UI();
//Kelimeyi yazmayı bıraktığımda direkt apiden sorgu yaptığım yer(keyUp)
searchProfile.addEventListener('keyup', (event) => {
    ui.clear();
    let text = event.target.value;
    if (text !== ''){
        profile.getProfile(text)
            .then(res => {
                if (res.profile.length === 0) {
                    ui.showAlert(text);
                } else {
                   
                    ui.showProfile(res.profile[0]);
                    ui.showTodo(res.todo)
                    
                }
            }).catch(err => {
                ui.showAlert(text);
            });
    }
});