const baseUrl = "https://tasks.vitasoftsolutions.com"

export const  networkPost = async({method , path ,heads , body }) => {
    //Authorization: `Bearer ${token}`
    var errorMessage = "";
    var response;
    var errors= [];
    var errorStatus
    let flag = 200;

    await fetch(baseUrl + path, {
        method: method,
        headers: heads,
        body: body, 
    }).then(async(res)=>{
        if (!res.ok) {
            errorStatus = await res.json()

          throw new Error(`Error: ${errorStatus}`);
        }
        response = res;
    }).catch((error)=>{
        flag = 422;
        errorMessage = errorStatus
        errors = errorStatus
    });
    if(flag == 422){
        return {
            'status' : 422,
            'errors': errors,
            'message': errorMessage,
        }
    }else{
        return {
            'status' : 200,
            'res': response,
            'message': "Network Responded Successfully",
        }
    }
}