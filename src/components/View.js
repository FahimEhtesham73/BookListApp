import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';
import { edit } from 'react-icons-kit/feather/edit';
import { save } from 'react-icons-kit/feather/save';

export const View = ({ books, deleteBook, editBook }) => {
  const [editMode, setEditMode] = useState({});
  const [editedValues, setEditedValues] = useState({});

  const handleEdit = (title, book) => {

    setEditMode(title);

    setEditedValues({ ...book });
  };

  const handleSave = (title) => {

    setEditMode();
    editBook(title, editedValues);
  };

  const handleInputChange = (field, value) => {
    setEditedValues((prev) => ({ ...prev, [field]: value }));
  };

  return books.map((book) => (
    <tr key={book.title}>
      <td>{editMode === book.title ? <input type="text" value={editedValues.title} onChange={(e) => handleInputChange('title', e.target.value)} /> : book.title}</td>

      <td>{editMode === book.title ? <input type="text" value={editedValues.auth} onChange={(e) => handleInputChange('auth', e.target.value)} /> : book.auth}</td>

      <td>{editMode === book.title ? <input type="text" value={editedValues.Prok} onChange={(e) => handleInputChange('Prok', e.target.value)} /> : book.Prok}</td>

      <td className='edit-btn' onClick={() => (editMode === book.title ? handleSave(book.title) : handleEdit(book.title, book))}>
        {editMode === book.title ? <Icon icon={save} /> : <Icon icon={edit} />}
      </td>
      <td className='delete-btn' onClick={() => deleteBook(book.title)}>
        <Icon icon={trash} />
      </td>
    </tr>
  ));
};
