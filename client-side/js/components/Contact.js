import contactJAC from "../../pages/contactJAC.html";

export default function Contact() {
  return `
  <h1><a href="${contactJAC}">Visit JAC Enterprises</a></h1>
  <div class="container-fluid api-button text-center"> 
  <h1 class="feedBack"> Give us your feedback, please! </h1>
  <p class=para > We would love to know how we are doing or if there is something
    you would like to add to make your kids education that much more special!
  </p>
  <div class="box-contain">
    <div class="box">
    <div class="wrapperContact">
      <input type="text" class="boxContact box1Contact" name="firstName" placeholder="Your first name here">
      <input type="text" class="boxContact box2Contact" name="lastName" placeholder="Your last name here">
      <input type="text" class="boxContact box3Contact" name="yourEmail" placeholder="Your email, please.."/>
      <textarea name="subject" class="boxContact box4Contact" placeholder="Write your thoughts here.." cols="30" rows="10"></textarea>
      <input class="boxContact box5Contact" type="submit" value="Submit"/>
    </div>
    </div>
  </div>
    `;
}