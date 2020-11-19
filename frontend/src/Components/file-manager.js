/*****
this handles getting, deleting, and uploading files to the server
*****/

import axios from 'axios';

export default class FileManager {
    get_files(Path){
        axios.post('/get-files',{
            path: Path
        })
        .then((res)=>{
            if(res.data === 'Error'){
                console.log('error')
            }else{
                console.log(res.data)
            }
        })
    }
}