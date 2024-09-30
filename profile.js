class Profile{
    constructor(){
        this.clientid='',
        this.clientSecret=''
    }
    //Sorguda profili get ettiğim yer 
    async getProfile(username){
        const profileResponse= await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        //data->json()data
        const profile = await
        profileResponse.json();

        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`);

        const todo = await todoResponse.json();

        return{
            profile,
            todo

        }
    }
}