import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import uuid from 'uuid/v1';

export default function FormDialog(props) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

    // const formData = props.formData;

    // making a shortcut for keys in a object 
    const { id, title, state, url, created, updated } = props.formData;

    // const [titleValue, setTitleValue] = React.useState(props.formData.title);
    const [titleValue, setTitleValue] = React.useState(title);
    const [stateValue, setStateValue] = React.useState(state);
    const [urlValue, setUrlValue] = React.useState(url);
    const [createdValue, setCreatedValue] = React.useState(created);
    const [updatedValue, setUpdatedValue] = React.useState(updated);

    //アローファンクション『const uniqueKey』
    const uniqueKey = () => {
        if(id === null) {
            return uuid();
        } else {
            return id;
        }
    }

    const save = () => {
        // 1. valoidation
        console.log('SaveData', {
            title: titleValue,
            state: stateValue,
            url: urlValue,
            created: createdValue,
            updated: updatedValue
        });

        // 2. save data to redux

        if(props.isAddButton){

        props.addFormData({
            // id: uniqueKey(),

            // 下の書き方をしたらアローファンクション『const uniqueKey』がいらなくなる
            // id: id === null ? uuid() : id,
            id: id ? id : uuid(),

            title: titleValue,
            state: stateValue,
            url: urlValue,
            created: createdValue,
            updated: updatedValue
        });

    } else {

// keep------------------
        // 2. save data to redux
        // props.addFormData({
            // id: uniqueKey(),

            // 下の書き方をしたらアローファンクション『const uniqueKey』がいらなくなる
            // id: id === null ? uuid() : id,

        //     id: id ? id : uuid(),

        //     title: titleValue,
        //     state: stateValue,
        //     url: urlValue,
        //     created: createdValue,
        //     updated: updatedValue
        // });

//---------------------

        props.editFormData({
            id: id,
            title: titleValue,
            state: stateValue,
            url: urlValue,
            created: createdValue,
            updated: updatedValue
        });
    }

        props.handleClose();

    }

// Only for test
    console.log("title value", titleValue);


  return (
    <div>

      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}

      <Dialog open={true} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new Issue</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* To subscribe to this website, please enter your email address here. We will send updates
            occasionally. */}
          </DialogContentText>

        {/* Copy from Text Fields */}
        <form className="contents">

            <TextField
            autoFocus={true}
                required={true}
                id="standard-required"
                label="Title"
                value={titleValue}
                onChange={(e) => setTitleValue(e.target.value)}
                // defaultValue="Default"
                // className={classes.textField}
                margin="normal"
                fullWidth={true}
            />
            <TextField
            autoFocus={true}
                required={true}
                id="standard-required"
                label="State"
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
                // defaultValue=""
                // className={classes.textField}
                margin="normal"
                fullWidth={true}
            />

            <TextField
            autoFocus={true}
                id="standard-name"
                label="Url"
                value={urlValue}
                onChange={(e) => setUrlValue(e.target.value)}
                // value={values.name}
                margin="normal"
                fullWidth={true}
            />
            <TextField
            autoFocus={true}
                id="standard-name"
                label="Created at"
                value={createdValue}
                onChange={(e) => setCreatedValue(e.target.value)}
                // className="id"
                // value={values.name}
                // onChange={handleChange('name')}
                margin="normal"
                fullWidth={true}
            />
            <TextField
            autoFocus={true}
                id="standard-name"
                label="Updated at"
                value={updatedValue}
                onChange={(e) => setUpdatedValue(e.target.value)}
                // className="id"
                // value={values.name}
                // onChange={handleChange('name')}
                margin="normal"
                fullWidth={true}
            />
        </form>

          {/* <TextField
            autoFocus={true}
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth={true}
          /> */}

        </DialogContent>
        <DialogActions>

          <Button onClick={save} color="primary">
            Save
          </Button>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}