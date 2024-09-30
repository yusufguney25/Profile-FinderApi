class UI {
    constructor() {
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }
    showProfile(profile) {
        this.profileContainer.innerHTML = `
            <div class = "card card-body">
                <div class = "row">
                    <div class = "col-md-3>
                        <a href = "https://placehold.jp"><img src ="https://placehold.jp/350x150.png
                        class="img-thumbnail"></a>
                        <h1>Contact</h1>
                    </div>
                    <div class = "col-md-9>
                        <h4>Contact</h4>
                        <ul class = "list-group">
                        <li class = "list-group-item">
                            Name : ${profile.name}
                        </li>
                        <li class = "list-group-item">
                            username :${profile.username}
                        </li>
                        <li class = "list-group-item">
                            Email : ${profile.email}
                        </li>
                        <li class = "list-group-item">
                            Address : ${profile.address.street}
                                  ${profile.address.city}
                                  ${profile.address.zipcode}
                                  ${profile.address.suite}
                        </li>
                        <li class = "list-group-item">
                            Phone : ${profile.phone}
                        </li>
                        <li class = "list-group-item">
                            Website : ${profile.website}
                        </li>
                        <li class = "list-group-item">
                            Company-Name : ${profile.company.name}
                        </li>
                        </ul>
                        <h4>TodoList</h4>
                        <ul id ="todo" class ="list-group">

                        </ul>
                        
                    </div>
                </div>
            
            </div>
        
        
        
        `
    }
    showTodo(todo){
        let html ="";

        todo.forEach(item => {
            if(item.completed){
                html += `
                    <li class ="list-group-item bg-success">
                        ${item.title}
                    </li>
                `;
            }else{
                html += `
                    <li class ="list-group-item bg-secondary">
                        ${item.title}
                    </li>
                `;
            }

        });


        this.profileContainer.querySelector("#todo")
        .innerHTML = html;
    }
    showAlert(text){
        this.alert.innerHTML = `${text} is not defined`;
    }
    clear(){
        this.profileContainer.innerHTML = '';
        this.alert.innerHTML = '';
    }
}