import React from "react";
import ReactDOMServer from "react-dom/server";

class EmailTemplate extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, User!</h1>
        <p>This is a basic email template created in React.</p>
        <p>You can customize this template with your content.</p>
      </div>
    );
  }
}

// Render the React component to an HTML string
const emailTemplateHTML = ReactDOMServer.renderToStaticMarkup(
  <EmailTemplate />
);

// Save the HTML string to your database or use it as needed in your web jobs
console.log(emailTemplateHTML);
