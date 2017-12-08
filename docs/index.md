
<html>

<head>

    	 <meta http-equiv="X-UA-Compatible" content="IE=9">
    	 <title>Kulturforum</title>
         <meta charset="utf-8" />
   	 <meta name="viewport" content="width=device-width, initial-scale=1" />
   	 <link rel="stylesheet" href="css/style.css" media="screen" />
   	 <link href='http://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>
	 <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>
	 <link href='http://fonts.googleapis.com/css?family=Dosis:300,400' rel='stylesheet' type='text/css'>
   	 <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
   	 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   	 <script src="/temp/scripts/Vendor.js"></script>
	 <script src="js/script.js"></script>

</head>

<body>

    <div class="black">                   
	</div>
    <div class="header">
		<p class="title fl col-sm-4" style="color:white;">Kulturforum</p>                                   
     
		<div class="abs">
		<div class="nav fl">             
            <div class="dropdown">
              <button id="toggle" class="dropbtn">Projekti</button>
              <div class="dropdowncont">
                <div class="slider closed">
                  <a href="#">Aktuelni</a>
                  <a href="#">Prošli</a>  
                  <a href="#">Saradnja</a>  
                </div>
              </div>  
            </div>
         		 
            <div class="dropdown">
             <button id="togglee" class="dropbtn" onclick="toggleSlider(2);">O nama</button>
              <div class="dropdowncont">
               <div class="slider closed">
                <a href="#">Rad</a>
                <a href="#">Članovi</a>                    
                <a href="#">Ideja</a> 
                </div>   
              </div> 
           </div> 
           
		   
		    <div class="dropdown">
              <button id="toggle" class="dropbtn dropbtnn">Kalendar</button>
              <div class="dropdowncont d3">
                <div class="slider closed s3">
                  <a href="#">Izložbe</a>
                  <a href="#">Radionice</a>
                </div>
              </div>  
            </div>
		   
            <div class="dropdown">      
               <button  class = "dropbtn" onclick="window.scrollBy(0, 2000);">Kontakt</button>
               <div class="dropdowncont">
					<div class="slider closed">
					</div>
			   </div>           
            </div> 
        </div> 
			
      </div>
    </div>

    <div class="centdiv rowm jumbotron">                               
		<ul id="slides">
			<li class="slide showing"></li>
			<li class="slide"></li>
			<li class="slide"></li>
			<li class="slide"></li>
		</ul>
	    <div class="container">
            <div class="row text-center">
				<div class="t1">Ideje</div>
				<div class="t2">na</div>
				<div class="t3">izložbi</div>
			</div>
		</div>  
     </div>
       
     <div id="canvas" class="overlay">
       <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="overlay-content">
         <iframe class="youtube" width="" height="" src="https://www.youtube.com/embed/WiEXFjJOevo" frameborder="0" allowfullscreen></iframe> 
        </div>
     </div>
     
     <div class="vidplayer">
       <button class="float-r videobutton" onclick="openNav()" style="background-color:black;"><img style="width:80%; height:100%;" src="images/mov1.jpg"/></button>   
       <p class="float-r videotext";">Video</p>
     </div>   
  
 	<div class="footer">
	 
        <div class="links"> 
            <ul style="left:5px;" class="social inl">
                <li style="margin:5px;" class="link inl"><a href="https://www.facebook.com/kulturforum.odkr" target="_blank"><img src="http://www.negaantiqueauto.com/Images/facebook_logo.png?ver08032015"  height="30px" width="30px"></a></li>
                <li style="margin:5px;" class="link inl"><a href="https://www.instagram.com/kulturforum/" target="_blank"><img src="http://mexicaliburrito.com/images/MexiCali/instagram.png" height="30px" width="30px"></a></li>
			</ul>
	    </div>	   
	 	 
        <div class="fl contact">   
            <iframe class="inl map" src="https://wego.here.com/directions/mix//Kulturforum,-Mihizova-11,-11000-Belgrade,-Serbia:e-eyJuYW1lIjoiS3VsdHVyZm9ydW0iLCJhZGRyZXNzIjoiTWloaXpvdmEgMTEsIDExMDAwIEJlbGdyYWRlLCBTZXJiaWEiLCJsYXRpdHVkZSI6NDQuODIxNDE0MjgwMjUxLCJsb25naXR1ZGUiOjIwLjQ3MDY0MzU5Mzk3OSwicHJvdmlkZXJOYW1lIjoiZmFjZWJvb2siLCJwcm92aWRlcklkIjo0OTc2NjI0ODM3MDYzOTd9?map=44.82141,20.47064,15,normal&fb_locale=en_US" width="100%" 
                height="100%" scrolling:"yes">
            </iframe>
			
			<div class="pitanje">
				<p><b>Postavi pitanje:</b></p>
				<div><input type="text" class="rect"></div>
				<input class="subm" type="submit"/>
			</div>
			
			
			<div>
				<img src="images/Miki.jpg" class="miki"/>
				<img src="images/Mina.jpg" class="mina"/>
				<img src="images/mail-icon.png" class="mail"/>
				<p class="c1"><b>Generalni direktor</b></p>
				<p class="c2">Miodrag Ninić -  tel: 0613215020</p>
				<p class="c3"><b>Kreativni direktor</b></p>
				<p class="c4">Mina Piščević - tel: 0642673310</p>
				<p class="c5"><b>E-mail adresa:</b> kulturforum.odkr@gmail.com</p>
				<p class="c6"><b>Adresa:</b> Mihizova 15</p>
				<p class="c7"><b>Radno vreme:</b></p>
				<p class="c8">Radnim danima:10-18h;</p>
				<p class="c9">Subotom 12-16h;</p>
				<img class="clock" src="images/clock-icon.png" class="kf2"/>				

			</div>
        </div>
       
    </div>
	

        
</body>
            

  



</html>

