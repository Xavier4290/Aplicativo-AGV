<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="css/index.css"/>
    <title>Login</title>
  </head>
  <body>

  

   <div class="intro">
      <video src="midia/TruckAtt.mp4" autoplay muted loop></video>
    </div>

    
      <div id="blur">
        <div class="popup-content">
            <img id="logo-popup" src="img/scania-logo.png" alt="Logo Scania" title="Logo Scania">
        </div>
      

    <div id="login">
      <form action="phpDologinNovo.php" method="POST" class="login" name="login">
    
        <ul class="list">
          <li>
            <label for="username"></label>
            <input type="text" class="fields" id="ssb" name="ssb" placeholder="SSB" value="" required/>
          
          </li>
          <li>
            <label for="password"></label>
            <input type="password" class="fields" id="senha" name="senha" placeholder="Password" value="" required/>
          </li>
        </ul>
        <div class="loginIN">
          <input name="submit" type="submit" value="Login"  id="submit">
          
        </div>
        </form>
     
       


      <p class="link-cad">Não tem acesso? <a href="botao.php">Clique aqui!</a></p>

      



    </div>
      
    <!---->
    
    
    <button id="click" onclick="move()" name="submit" type="submit">LOGIN
    
    </button>

  </div>
    <script src="js/index.js"></script>
  </body>
</html>
