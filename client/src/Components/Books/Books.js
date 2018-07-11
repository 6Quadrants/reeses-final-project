// import React, { Component } from "react";
// // import DeleteBtn from "../../components/DeleteBtn";
// // import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// // import { Link } from "react-router-dom";
// import {Col, Button } from "react-bootstrap";

// // import { Col, Row, Container } from "../../components/Grid";
// // import { List, ListItem } from "../../components/List";
// // import { Input, TextArea, FormBtn } from "../../components/Form";

// class Books extends Component {
//   state = {
//     books: [],
//     title: "",
//     author: "",
//     synopsis: ""
//   };

//   componentDidMount() {
//     this.loadBooks();
//   }

//   loadBooks = () => {
//     API.getBooks()
//       .then(res =>
//         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
//       )
//       .catch(err => console.log(err));
//   };

//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <Col md={6}>
//             <div className="jumbotron">
//               <h1>What Books Should I Read?</h1>
//             </div>
//             <form>
//               <input className="form-control"
//                 value={this.state.title}
//                 onChange={this.handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <input className="form-control"
//                 value={this.state.author}
//                 onChange={this.handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//               />
//               <textarea className="form-control"
//                 value={this.state.synopsis}
//                 onChange={this.handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//               />
//               <Button>
//                 disabled={!(this.state.author && this.state.title)}
//                 onClick={this.handleFormSubmit}
//               >
//                 Submit Book
//               </Button>
//             </form>
//           </Col>
//           <Col md={6}>
//           <div className="jumbotron">
//               <h1>Books On My List</h1>
//             </div>
//             {this.state.books.length ? (
//                 <div className="list-overflow-container">
//                 <ul className="list-group">
              
//               {/* <List> */}
//                 {this.state.books.map(book => (
//                   <li className="list-group-item">
//                  key={book._id}>
//                     {/* <Link to={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </Link> */}
//                     <Button onClick={() => this.deleteBook(book._id)} />
//                     </li>
//                 ))}
//                   </ul>
//               </div>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//             </Col>
//           </div>
//         </div>
    
//     );
//   }
// }

// export default Books;
