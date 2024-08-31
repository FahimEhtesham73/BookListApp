import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { View } from './components/View';
import './App.css';

const getData = () => {
  const data = localStorage.getItem('books');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const App = () => {
  const [books, setBooks] = useState(getData());
  const [title, setTitle] = useState('');
  const [auth, setAuth] = useState('');
  const [Prok, setProk] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let book = {
      title,
      auth,
      Prok,
    };
    setBooks([...books, book]);
    setTitle('');
    setAuth('');
    setProk('');
  };

  const deleteBook = (title) => {
    const removeBooks = books.filter((element) => {
      return element.title !== title;
    });
    setBooks(removeBooks);
  };

  const editBook = (title, editedValues) => {
    const index = books.findIndex((book) => book.title === title);

    if (index !== -1) {
      const updatedBooks = [...books];
      updatedBooks[index] = { ...updatedBooks[index], ...editedValues };

      setBooks(updatedBooks);
    }
  };

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  console.log(setBooks)

  return(
    <div className="wrapper" style={{backgroundImage:'./D:/My_Projects/REACT Projects/myapp/src/6726141.jpg'}} >
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>React BookList</h1>
      <p style={{ textAlign: 'center' }}>Add and view your books</p>
      <br/>

      <div className="main" style={{ display:"flex", justifyContent:'center'}}>

        <div className="form-container">
          <form autoComplete="off" className="form-group"
          onSubmit={handleSubmit}>

            <label>Title</label>
            <input type="text" className="form" required onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>

            <label>Author</label>
            <input type="text" className="form" required onChange={(e)=>setAuth(e.target.value)} value={auth}></input>
            <br></br>

            <label>Prokashoni</label>
            <input type="text" className="form" required onChange={(e)=>setProk(e.target.value)} value={Prok}></input>
            <br></br>
            <br/>
           

            <div className='submitbtn' style={{display:'flex', justifyContent:'center'}}>

            <button type="submit" className="btn btn-success btn-md">Submit</button>
            </div>

            


          </form>
          


        </div>


        <br/>
        

      </div>

      <br></br>
      <div className="view-container" style={{ display:"flex", justifyContent:'center'}}>
          {books.length>0 &&<>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Prokashoni</th>
                  <th>Edit & Save</th>
                  <th>Delete</th>
                 
                </tr>
              </thead>
              <tbody>
              <View books={books} deleteBook={deleteBook} editBook={editBook} />


              </tbody>
             
            </table>
            </div> 
            </>}

          {books.length<1 && <div>No books are added Yet</div>}

        </div>
    </div>
    
  )
}
export default App; 