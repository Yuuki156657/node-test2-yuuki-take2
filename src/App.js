import React from 'react';
import './App.css';

import SimpleTable from './SimpleTable';
import Header from './Header';
import Model from './Model';
import { rows } from './formDataContents';

// Redux step1 > import 2 things
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Redux step : import Actions
import { getFormData, addFormData, deleteFormData, editFormData } from './actions/formData';



function App(props) {

  console.log('formData', props.formDataRows);

  // [1,2] 1 = statename, 2 = setState
  // userState(3) 3 means default value
  // datatype = boolean
  const [open, setOpen] = React.useState(false);
  const [isAddButton, setIsAddButton] = React.useState(true);

  console.log('isAddButton', isAddButton);

  // datatype = number
  const [formDataId, setFormDataId] = React.useState(null);

  // fires function right away

  React.useEffect(() => {
    if(props.formDataRows.length === 0) {
      props.getFormData();
    }
  })

  // 
  // const getFormData = 

  // console.log('formDataId', formDataId);

// ---------------------
  const handleClickOpen = () => {

    // console.log('hii');

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
// ---------------------


//Object
  // const line1 = {
  //   id: 1,
  //   title: 2,
  //   state: 3,
  //   url: 4,
  //   created: 5,
  //   updated: 6
  // }

  const emptyDefault = {
    id: '',
    title: '',
    state: '',
    url: '',
    created: '',
    updated: ''
  }


// function
  const getDataFromId = () => {
  
    // find the index of the object containing the right Id
    const index = rows.findIndex((row) => formDataId === row.id );

    console.log('index', index);
    return rows[index];
  }

  console.log('formDataRows', props.formDataRows);

  return (
    <div className="App">
      
      <Header />
      <SimpleTable 
      // formData={this.props.formData}
      openModel={handleClickOpen} 
      setIsAddButton={setIsAddButton}
      setFormDataId={setFormDataId}
      rows={props.formDataRows}
      deleteFormData={props.deleteFormData}
      />
      {/* <Model handleClose={handleClose} isAddButton={isAddButton} open={open} formData={line1} /> */}

    {open === true &&(
      <Model handleClose={() => setOpen(false)}
        // open={open}
        isAddButton={isAddButton}
        addFormData={props.addFormData}
        editFormData={props.editFormData}

        
        formData={isAddButton ? emptyDefault : getDataFromId() } />
    )}

    </div>
  );
}

//gets stuff from store the store and return and returns in the component as 
function mapStateToProps(store){
  console.log('store', store);

  return {
    formDataRows: store.formDataReducer.rows
  }
}

// gets action from redux and returns in the component as props
function mapDispatchToProps(dispatch){

  return bindActionCreators({
    getFormData,
    addFormData,
    editFormData,
    deleteFormData
  }, dispatch)
}

export default connect(
  //1.tetting states
  mapStateToProps,

  //2.getting action
  mapDispatchToProps

) (App);
