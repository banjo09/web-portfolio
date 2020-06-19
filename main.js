
// var home = document.getElementById('about');
const date = new Date();
document.getElementById("bottomParas").innerHTML = date;

function showAbout(){
    const check = document.getElementsByClassName("navigation");
    check[0].style.color = 'black';
    check[1].style.color = 'black';
    check[2].style.color = 'black';
    check[3].style.color = 'black';
    check[4].style.color = 'black';
    document.getElementById('about').style.color = 'tomato';
    document.getElementById('mobilePicGallery').style.display = 'none';
    document.getElementById('aboutshow').innerHTML=`
    <div id="aboutContainer"> 
      <div>
        <h1 id="head">I build value by developing Softwares.</h1>
        <p>
          I am Olabanjo Olaleye Ebenezer. You can call me Banjo.
        </p>
        <p>
        I am a self-motivated Junior full-stack, software developer
        knowledgeable in HTML5, CSS, JAVASCRIPT, REACTJS, REACT NATIVE,
        EXPRESSJS, MONGODB & NODEJS.
        </p>
        <p>
          I am seeking to build and hone his skills by actively engaging
          in the development of software projects.
        </p>
        <p>
          I am a team player who is flexible, understanding and willing to
          learn and adapt to work environment.
        </p>
        <p>
        A young developer who aspires to be a source of inspiration and 
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
    check[0].style.color = 'black';
    check[1].style.color = 'black';
    check[2].style.color = 'black';
    check[3].style.color = 'black';
    check[4].style.color = 'black';
    const date = new Date();
    document.getElementById('home').style.color = 'tomato';
    document.getElementById('aboutshow').innerHTML=`
    <div id="newHomeContainer"> 
      <div id="aboutshow" class="aboutStyle">
        <div>
          <h4 id="head" class="headStyle">Hi, I'm Banjo.</h4>
          <h1 id="mainhead" class="mainheadStyle">
            Full-stack software developer.
          </h1>
          <div id="bottomDiv" class="bottomDivStyle">
            Multidisciplinary developer who hacks at, and makes things.
          </div>    
          <p id="bottomParas" class="bottomParasStyle">
            <!-- ${date} -->
          </p>
          <div id="picGallery" class="picGalleryStyle">
            <img src="./image/compassion.jpg" alt="Pictures with friends" style="width:180px;height:230px;">
            <img src="./image/tolerate.jpg" alt="Pictures with friends" style="width:180px;height:230px;">
            <img src="./image/focus.jpg" alt="Pictures with friends" style="width:180px;height:230px;">
            <img src="./image/give.jpg" alt="Pictures with friends" style="width:180px;height:230px;">
          </div>
        </div>
      </div>
    </div>  
    <div id="mobilePicGallery" class="mobilePicGallery">
      <img src="./image/compassion.jpg" alt="Pictures with friends" style="width:100px;height:120px;">
      <img src="./image/give.jpg" alt="Pictures with friends" style="width:100px;height:120px;"><br/>
      <img src="./image/focus.jpg" alt="Pictures with friends" style="width:100px;height:120px;">
      <img src="./image/tolerate.jpg" alt="Pictures with friends" style="width:100px;height:120px;">
    </div>    
    `;
}

function showWork(){
  const check = document.getElementsByClassName("navigation");
  check[0].style.color = 'black';
  check[1].style.color = 'black';
  check[2].style.color = 'black';
  check[3].style.color = 'black';
  check[4].style.color = 'black';
  document.getElementById('work').style.color = 'tomato';
  document.getElementById('mobilePicGallery').style.display = 'none';
  document.getElementById('aboutshow').innerHTML=`
  <div id="workContainer"> 
    <div>
      <h1 id="head">My Javascript Journey</h1>
      <p>
        Mostly a trip down memory lane. To be expanded soon!!!
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
      <h4>
        Projects done at Zyonel Technologies
      </h4>
      <ul class="ulSpace" style="list-style-type:disc;">
        <li id="bottomContent">
          I teamed up to develop a website for a church working on the front-end with REACT.JS
          <div><a class="dlink" href="https://www.egfm.org" target="_blank">Visit the church website</a></div></br>
        </li>
        <li>
          I also teamed up to develop an event registration website for a ministry program with REACT.JS.
        </li>
        <li>
          Finally, I also collaborated to design the front-end interface of an e-library website with MATERIAL U.I library and REACT.JS
        </li>
      </ul>
      <div id="bottomContent">
        <h4>
          Techcellent360 global Limited
        </h4>
        <div>
          2nd floor, 28, charity road, Ojo oba, Abule Egba, Lagos.</br>
          Software Developer.</br>
          February 2020 -Till date.
        </div>
        <div>
          <h4>
            Projects done at Techcellent360 global Limited
          </h4>
          <ul class="ulSpace" style="list-style-type:disc;">
            <li>
              I teamed up to develop the front-end interface of our carrotsuite ERP website (version 5) with REACT.JS
              <div><a class="dlink" href="https://www.carrotsuite.xyz" target="_blank">Visit the ERP website</a></div></br>
            </li>
            <li>
              I started building using react-native, a mobile app for our esoft church website
            </li>
            <li>
              I also teamed up to develop a logistic mobile application using react-native
            </li>
          </ul>
        </div>  
      </div>
    </div>
  </div> 
  `;
}

function showSkills(){
  const check = document.getElementsByClassName("navigation");
  check[0].style.color = 'black';
  check[1].style.color = 'black';
  check[2].style.color = 'black';
  check[3].style.color = 'black';
  check[4].style.color = 'black';
  document.getElementById('skills').style.color = 'tomato';
  document.getElementById('mobilePicGallery').style.display = 'none';
  document.getElementById('aboutshow').innerHTML=`
  <div id="skillsContainer"> 
    <h1 id="head">My Skills</h1>
    <p>
      <ul style="list-style-type:disc;">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Material U.I (React)</li>
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
  check[0].style.color = 'black';
  check[1].style.color = 'black';
  check[2].style.color = 'black';
  check[3].style.color = 'black';
  check[4].style.color = 'black';
  document.getElementById('contact').style.color = 'tomato';
  document.getElementById('mobilePicGallery').style.display = 'none';
  document.getElementById('aboutshow').innerHTML=`
  <div id="contactsContainer"> 
    
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
  `;
}