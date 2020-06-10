
// var home = document.getElementById('about');
const date = new Date();
document.getElementById("bottomParas").innerHTML = date;

function showAbout(){
    const check = document.getElementsByClassName("navigation");
    check[0].style.color = 'white';
    check[1].style.color = 'white';
    check[2].style.color = 'white';
    check[3].style.color = 'white';
    check[4].style.color = 'white';
    document.getElementById('about').style.color = 'tomato';
    document.getElementById('aboutshow').innerHTML=`
    <div id="aboutContainer"> 
      <div>
        <div class="profileImageContainer">
          <img src="./image/obey.GIF" alt="At Work in Zyonel" class="profileImage" style="width:200px;height:200px;border-radius: 50%;">
          <div class="middle">
            <div class="text">Olabanjo Olaleye</div>
          </div>
        </div>
        <h1 id="head">I build value by developing Softwares.</h1>
        <p>
          I am Olabanjo Olaleye Ebenezer. You can call me Banjo.
        </p>
        <p>
        I am a self-motivated Junior full-stack, software developer <br/>
        knowledgeable in HTML5, CSS, JAVASCRIPT, REACTJS, REACT NATIVE,<br/>
        EXPRESSJS, MONGODB & NODEJS.
        </p>
        <p>
          I am seeking to build and hone his skills by actively engaging<br/>
          in the development of software projects.
        </p>
        <p>
          I am a team player who is flexible, understanding and willing to<br/>
          learn and adapt to work environment.
        </p>
        <p>
        A young developer who aspires to be a source of inspiration and <br/>
        motivation for others. 
        </p>
        <p id="edu">
          Graduate of the University of Lagos, Bachelor of science.
          <p>
            2011- 2016
          </p>
        </p>
      </div>
    </div>
    `;
}

function showHome(){
    const check = document.getElementsByClassName("navigation");
    check[0].style.color = 'white';
    check[1].style.color = 'white';
    check[2].style.color = 'white';
    check[3].style.color = 'white';
    check[4].style.color = 'white';
    const date = new Date();
    document.getElementById('home').style.color = 'tomato';
    document.getElementById('aboutshow').innerHTML=`
    <div id="homeContainer"> 
      <div>
        <h4 id="head">Hi, I'm Banjo.</h4>
        <h1 id="mainhead">
          Full-stack software developer.</br>Product Person.
        </h1>
        <div id="bottomDiv">
          Multidisciplinary developer who hacks at, makes and occasionally breaks things.
        </div>    
        <p>
          I escaped last night from the land of death and sin.<br/>
          I am making my way to Life and peace in the Holy Ghost. Will you help me?
        </p>
        <p id="bottomPara">
          ${date}
        </p>
        <div id="picGallery">
          <img src="./image/compassion.jpg" alt="Pictures with friends" style="width:120px;height:150px;">
          <img src="./image/give.jpg" alt="Pictures with friends" style="width:120px;height:150px;"><br/>
          <img src="./image/focus.jpg" alt="Pictures with friends" style="width:120px;height:150px;">
          <img src="./image/tolerate.jpg" alt="Pictures with friends" style="width:120px;height:150px;">
        </div>
      </div>
    </div>  
    `;
}

function showWork(){
  const check = document.getElementsByClassName("navigation");
  check[0].style.color = 'white';
  check[1].style.color = 'white';
  check[2].style.color = 'white';
  check[3].style.color = 'white';
  check[4].style.color = 'white';
  document.getElementById('work').style.color = 'tomato';
  document.getElementById('aboutshow').innerHTML=`
  <div id="workContainer"> 
    <div>
      <h1 id="head">My Javascript Journey</h1>
      <p>
        Mostly a trip down memory lane. To be expended soon!!!
      </p>
      <div id="bottomContent">
      <h4>
        Zyonel Technologies
      </h4>
      <div>
        Ogudu, Ojota.</br>
        Software Developer Trainee.</br>
        July 2019- February 2020.
      </div>
      </div>
      <div id="bottomContent">
        <h4>
          Techcellent 360 global
        </h4>
        <div>
          2nd floor, 28, charity road, Ojo oba, Abule Egba, Lagos.</br>
          Software Developer.</br>
          February 2020 -Till date.
        </div>
      </div>
    </div>
  </div> 
  `;
}

function showSkills(){
  const check = document.getElementsByClassName("navigation");
  check[0].style.color = 'white';
  check[1].style.color = 'white';
  check[2].style.color = 'white';
  check[3].style.color = 'white';
  check[4].style.color = 'white';
  document.getElementById('skills').style.color = 'tomato';
  document.getElementById('aboutshow').innerHTML=`
  <div id="skillsContainer"> 
    <h1 id="head">My Skills</h1>
    <p>
      <ul style="list-style-type:disc;">
        <li>HTML5</li>
        <li>CSS</li>
        <li>Milk</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Material U.I</li>
        <li>Material Design for Bootstrap (React)</li>
        <li>React Native (Android and IOS)</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Handlebars</li>
      </ul>
    </p>
    <div>
      <h1 id="headsec">My Software Skills</h1>
      <p>
        <ul style="list-style-type:disc;">
          <li>Visual Studio</li>
          <li>Git</li>
          <li>Postman</li>
          <li>Heroku</li>
        </ul>
      </p>
    </div>
  </div> 
  `;
}

function showContacts(){
  const check = document.getElementsByClassName("navigation");
  check[0].style.color = 'white';
  check[1].style.color = 'white';
  check[2].style.color = 'white';
  check[3].style.color = 'white';
  check[4].style.color = 'white';
  document.getElementById('contact').style.color = 'tomato';
  document.getElementById('aboutshow').innerHTML=`
  <div id="contactsContainer"> 
    <div>
      <h1 id="head">Home Address</h1>
      <div>
        <div>
          20, Kudirat Abiola way, Oregun bus stop,<br/>
          Ikeja,<br/>
          Lagos.<br/>
        </div>
        <div id="mainContent">
          08103015369<br/>
          olabanjoolaleye@gmail.com<br/>
        </div>
      </div>
      <div id="bottonContentContacts">
        <h2 id="headseco">Github Link</h2>
        <p id="contentContacts">
          <a class="dlink" href="https://www.github.com/banjo09" target="_blank">Visit github page</a>
        </p>
      </div>
    </div>
  </div>
  `;
}