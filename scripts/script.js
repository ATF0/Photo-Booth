$(document).ready(function(){
    $('.parallax').parallax();
  });
      
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

  var collection = [
    {
      picture:'Damilola Olatunji.png',
      name:"Damilola Olatunji",
      qualification:"Full stack Developer"
    },
    {
      picture:"Desola Oluseye.jpg",
      name:"Desola Oluseye",
      qualification:"Full stack Developer"
    },
    {
      picture:"Jennifer Iroh.jpg",
      name:"Jennifer Iroh",
      qualification:"Full stack Developer"
    },
    {
      picture:"Temiloluwa_Ayo.jpeg",
      name:"Temiloluwa Ayo",
      qualification:"Full stack Developer"
    },
    {
      picture:"Sonia Otiono.jpg",
      name:"Sonia Otiono",
      qualification:"Full stack Developer"
    },
  ];




const personTag = document.querySelector("#legit");

collection.forEach(person =>{

 

  let personDiv = document.createElement("div");
  personDiv.classList.add('card');

  let personPic1= document.createElement("div");
  personPic1.classList.add("card-image","responsive");

  let personPic2 = document.createElement("img");
  personPic2.setAttribute("id","pic")
  personPic2.setAttribute("src", person.picture);
  
  let personContent = document.createElement("div");
  personContent.classList.add("card-content");

  let personContent1 =  document.createElement("p");
  personContent1.innerText = person.name;

  let personContent2 = document.createElement("p");
  personContent2.innerText = person.qualification;

  
  
  personDiv.appendChild(personPic1);
  personPic1.appendChild(personPic2);
  personDiv.appendChild(personContent)
  personContent.appendChild(personContent1);
  personContent.appendChild(personContent2);
  


  personTag.appendChild(personDiv);

});

  
