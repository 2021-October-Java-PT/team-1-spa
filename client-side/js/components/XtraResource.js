export default function XtraResource () {
    return `
    <h1>NASA Picture of the Day:</h1>
    <h2>Date: ${xtraResource.date}</h2>
    <h3>Title: ${xtraResource.title}</h3>
    <p>${xtraResource.explanation}</p>
    <a href="${xtraResource.url}</a>
    
    
    `;
}