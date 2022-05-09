import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className='m-5 p-2 border rounded border-secondary bg-success text-dark bg-opacity-25'>
        <h3>Q.1: Difference between javascript and nodejs?
        </h3>
        <p> <strong>NodeJS :
          NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
          <br /> <br />
          AJavaScript :
          Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
        </strong> </p>
      </div>
      <div className='m-5 p-2 border rounded border-secondary bg-success text-dark bg-opacity-25'>
        <h3>Q.2: When should you use nodejs and when should you use mongodb?
        </h3>
        <p> <strong>
          MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily. There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use nodeJS.
        </strong> </p>
      </div>
      <div className='m-5 p-2 border rounded border-secondary bg-success text-dark bg-opacity-25'>
        <h3>Q.3: Differences between sql and nosql databases.?
        </h3>
        <p> <strong>QL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</strong> </p>
      </div>
      <div className='m-5 p-2 border rounded border-secondary bg-success text-dark bg-opacity-25'>
        <h3>Q.3: What is the purpose of jwt and how does it work?
        </h3>
        <p> <strong>JWT is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</strong> </p>
      </div>
    </div>
  );
};

export default Blog;