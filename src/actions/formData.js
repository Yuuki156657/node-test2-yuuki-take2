
// 1.Actions will dispatch 2 things: type and payload
// 2.You don't have to return payload, if there are no need.

export function getFormData(){
    console.log('action fired!')

    // API calls to get data from database

    //but for now. send back fake data

    function createData(id, title, state, url, created, updated) {
        return { id, title, state, url, created, updated };
    }
    
    // Not a default export
    const rows = [
        createData('123456789', "title1", "open", "http://1", "2019-09-24", "2019-09-24"),
        createData('223456789', "title2", "open", "http://2", "2019-09-24", "2019-09-24"),
        createData('323456789', "title3", "open", "http://3", "2019-09-24", "2019-09-24"),
        createData('423456789', "title4", "open", "http://4", "2019-09-24", "2019-09-24"),
        createData('523456789', "title5", "open", "http://5", "2019-09-24", "2019-09-24"),
    ];


    return function(dispatch) {
        dispatch({
            type: 'GET_FORM_DATA',
            payload: rows
        })
    }
}

// payload ===> data to send to the render
export function addFormData(payload){
    console.log('action payloadss', payload);    

    return function(dispatch) {
        dispatch({
            type: 'ADD_FORM_DATA',
            payload: payload
        })
    }
}


export function editFormData(payload){
    console.log('edit payloadss', payload);    

    return function(dispatch) {
        dispatch({
            type: 'EDIT_FORM_DATA',
            payload: payload
        })
    }
}


export function deleteFormData(payload){
    console.log('delete payloadss', payload);    

    return function(dispatch) {
        dispatch({
            type: 'DELETE_FORM_DATA',
            payload: payload
        })
    }
}