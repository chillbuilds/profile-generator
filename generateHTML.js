// const colors = {
//     green: {
//       wrapperBackground: "#E6E1C3",
//       headerBackground: "#C1C72C",
//       headerColor: "black",
//       photoBorderColor: "#black"
//     },
//     blue: {
//       wrapperBackground: "#5F64D3",
//       headerBackground: "#26175A",
//       headerColor: "white",
//       photoBorderColor: "#73448C"
//     },
//     pink: {
//       wrapperBackground: "#879CDF",
//       headerBackground: "#FF8374",
//       headerColor: "white",
//       photoBorderColor: "#FEE24C"
//     },
//     red: {
//       wrapperBackground: "#DE9967",
//       headerBackground: "#870603",
//       headerColor: "white",
//       photoBorderColor: "white"
//     }
//   };

  const colors = {
    red: {

    },
    orange: {

    },
    yellow: {

    },
    green: {

    },
    blue: {

    },
    purple: {

    },
    black: {

    },
    white: {

    }}
  
var html = 
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
    <style>
      .pageTxt {
        position: absolute;
        font-size: 300%;
        top: 2%;
        left: 25%;
      }

      #avatarJPG {
        position: relative;
        float: left;
        border-radius: 50%;
        width: 27%;
        padding: 4%;
        right: 20px;
        bottom: 20px;
        background: #00abe7;
      }

      #github-icon {
        position: absolute;
        width: 8%;
        top: 214px;
        right: 740px;
      }

      #loc-icon {
        position: absolute;
        right: 100px;
        left: 23%;
      }

      #loc {
        position: absolute;
        top: 234px;
        left: 130px;
        font-size: 30px;
      }

      #name {
        position: relative;
        font-size: 50px;
      }

      #ref {
        position: absolute;
        float: left;
        top: 800px;
        right: 20px;
        width: 100%;
      }
    </style>
  </head>

  <body>
    <div id="avatar-container">
      <div id="avatar">
        <img
          id="avatarJPG"
          src="https://avatars0.githubusercontent.com/u/49894687?v=4"
        />
        <img
          class="icon"
          id="github-icon"
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-256.png"
        />
        <img id="loc-icon" src="./images/location-icon.png" />
        <div class="pageTxt" id="loc">Denver, CO</div>
        <div id="name">heliumface770</div>
      </div>
    </div>

    <!-- <img id="ref" src="./images/design.png" /> -->

    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script src="./index.js"></script>
  </body>
</html>
`


module.exports = html;