const baseUrl = "https://tasks.vitasoftsolutions.com/userdata"

// export const  networkPost = async({method , path ,heads , body }) => {
//     //Authorization: `Bearer ${token}`
//     var errorMessage = "";
//     var response;
//     var errors= [];
//     let flag = 200;


    


//     await fetch(url, {
//         method: method,
//         headers: {
//           'Content-Type': 'application/json',
//           // Add any other headers as needed (e.g., authorization)
//         },
//         body: JSON.stringify(newData || data), // Use newData if provided, otherwise use current data
//     });
//     await $fetch(path, {
//         method: method,
//         baseURL: backendUrl,
//         headers: heads,
//         body:body
//     }).then((res)=>{
//         response = res;
//     }).catch((error)=>{

//         flag = 422;
//         errorMessage = error.response._data.message;
//         errors = error.response._data.errors;
//     });
//     if(flag == 422){
//         return {
//             'status' : 422,
//             'errors': errors,
//             'message': errorMessage,
//         }
//     }else{
//         return {
//             'status' : 200,
//             'res': response,
//             'message': "Network Responded Successfully",
//         }
//     }
// }