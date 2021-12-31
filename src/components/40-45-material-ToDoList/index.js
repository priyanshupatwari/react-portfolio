import React, { useState } from 'react';
import { ListItem, ListItemText, Divider, TextField, ListItemIcon } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import './index.css'

let id = 0;
export default function VirtualizedList() {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();

  const [editId, setEditId] = useState(null)
  const [input, setInput] = useState('');
  const [item, setItem] = useState([{
    id: 'x',
    title: 'x',
    date: 'x',
    time: 'x',
  }]);
  console.log(item)
  function addItem() {
    id++;
    setItem((prevVal) => {
      return [...prevVal, { id: id, title: input, date: date, time: time }]
    })
  }
  function deleteItem(id) {
    const newArr = item.filter((elem) => elem.id !== id);
    setItem(newArr);
  }
  function selectToEdit(id) {
    const itemEdited = item.find((elem) => elem.id === id);
    setInput(itemEdited.title)
    setEditId(id);
  }
  function editNow(editId) {
    if (editId || editId === 0) {
      item.forEach((elem, index) => {
        if (elem.id === editId) {
          item.splice(index, 1, { id: editId, title: input, date: date, time: time })
        }
      })
    }
    setEditId(null);
  }

  return (
    <div>
      <div className='main-container'>
        <div className="container">
          <div className="inputGroup">
            <div className="input-field">
              <TextField
                id="standard-multiline-flexible"
                label="Your notes"
                fullWidth
                multiline
                rowsMax={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="leftSide">
              {
                editId && <span className="myBtn myBtn-primary" onClick={() => { editNow(editId); setInput('') }} ><EditIcon /></span>
              }
              {
                (input && !editId) ? <>
                  <span className='myBtn myBtn-primary' onClick={() => { addItem(); setInput('') }}><AddIcon /></span>
                  <span className='myBtn' onClick={() => setInput('')}><ClearIcon /></span>
                </> : ''
              }
            </div>
          </div>
          <div className="ListItem">
            {item.map((eachItem, index) => {
              return (<div key={index}>
                <ListItem >
                  <ListItemText primary={eachItem.title} secondary={eachItem.date + " at " + eachItem.time} className='wordBreak' />
                  <ListItemIcon>
                    <span className="myBtn myBtn-primary"
                      onClick={() => selectToEdit(eachItem.id)}  ><EditIcon /></span>
                  </ListItemIcon>
                  <ListItemIcon>
                    <span className="myBtn"
                      onClick={() => deleteItem(eachItem.id)}  ><DeleteForeverIcon /></span>
                  </ListItemIcon>
                </ListItem>
                <Divider />
              </div>)
            }
            )}
          </div>
        </div>
      </div>
      <div className="circles">
        <div className="contain">
          <div className="circ one"></div>
          <div className="circ two"></div>
          <div className="circ three"></div>
          <div className="circ four"></div>
        </div>
      </div>
    </div>
  );
}
