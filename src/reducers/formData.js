// console file

function createData(id, title, state, url, created, updated) {
    return { id, title, state, url, created, updated };
}

// Not a default export
const initialState = {
    rows: [
        // createData('123456789', "title1", "open", "http://1", "2019-09-24", "2019-09-24"),
        // createData('223456789', "title2", "open", "http://2", "2019-09-24", "2019-09-24"),
        // createData('323456789', "title3", "open", "http://3", "2019-09-24", "2019-09-24"),
        // createData('423456789', "title4", "open", "http://4", "2019-09-24", "2019-09-24"),
        // createData('523456789', "title5", "open", "http://5", "2019-09-24", "2019-09-24"),
    ]
}

export default function formData(state = initialState, action){

    // action.type -> condition
    switch(action.type) {
        case 'GET_FORM_DATA':
            //1.updata state
            //2.return the update

            return {
                ...state,
                rows: action.payload
            }
        case 'ADD_FORM_DATA':
            //add param sent are called payload
            // const result = state.rows.push(action.payload);
            // console.log('add_result', result);

            console.log('state', state);
            let copieRows = state.rows;
            copieRows.push(action.payload)

            return {
                ...state,
                rows: copieRows
            };

            
            case 'EDIT_FORM_DATA':
            let editedRows = state.rows;
            console.log('edited object', action.payload);
      
            // Answer1: using map
            const newRows = editedRows.map((row) => {
              if(row.id === action.payload.id) {
                return action.payload
              }
              return row;
            })
      
            //Answer2: using index and replacing it
            // const index = editedRows.findIndex((row) => row.id === action.payload.id)
      
            // editedRows[index] = action.payload;
      
            return {
              ...state,
              rows: newRows //or editedRows
            }
            

        case 'DELETE_FORM_DATA':
            console.log('delette payload', action.payload);

            // let copieRows = state.rows;
            let row = state.rows.filter((row) => {
                return action.payload !== row.id
            })  
            return {rows: row};

            //store　を直接触らないために⬇︎

            // action : type, payload(data)
            // reducer　と比較
            // return オブジェクト
            
        default:
        return state;
    }
}

// A default export
// export default rows


