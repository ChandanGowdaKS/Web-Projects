<!DOCTYPE html>
<html lang="en">
<head>
<title></title>
<meta charset="utf-8">
<link rel="stylesheet" href="css/reset.css" type="text/css" media="all">
<link rel="stylesheet" href="css/layout.css" type="text/css" media="all">
<link rel="stylesheet" href="css/style.css" type="text/css" media="all">
<link rel="stylesheet" href="sample.css" type="text/css" media="all">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/jquery-1.4.2.js" ></script>
<script type="text/javascript" src="js/cufon-yui.js"></script>
<script type="text/javascript" src="js/cufon-replace.js"></script> 
<script type="text/javascript" src="js/Myriad_Pro_italic_600.font.js"></script>
<script type="text/javascript" src="js/Myriad_Pro_italic_400.font.js"></script>
<script type="text/javascript" src="js/Myriad_Pro_400.font.js"></script>
<script>
	function toggle(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block') e.style.display = 'none';
    else e.style.display = 'block';
    }
	function run(){
		var id = "<?php echo $_GET['id'] ?>";
		var recharge = document.getElementById("recharge").value;
		alert("Your account balance is increased by Rs."+recharge);
		$.ajax({
			type: "GET",
			url: "recharge.php",
			data: {recharge:recharge,id:id},
			success: function(html) {
			}
			});
	}
</script>
<style>
 #page3 { 
  background: url(images/blur5.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
input[type="text"]{
	      width:30%;
		  padding:10px;
		  margin:10px 10px 0px 0px;
		  box-sizing:border-box;
		  border-radius:10px;
		  background-color:#ffffff;
		  border:1px solid #000f1a;
	  }
input[type="submit"]{
		  width:20%;
		  padding:7px;
		  margin:10px 10px 20px 10px;
		  box-sizing:border-box;
		  border-radius:10px;
		  color:#ffffff;
		  background-color: #80aaff;
		  border:1px solid #000f1a;
	  }
</style>
</head>
<body id="page3">
<?php
	$id = $_GET['id'];
?>
<div class="body1">
	<div class="main">
<!-- header -->
		<header>
			<div class="wrapper">
				<h1 id="H1"><a href="" id="logo"></a><span id="slogan">Domestic Airlines</span></h1>
				<div class="right">
					<nav>
						<ul id="menu">
							<li><a href="index_new.php?id=<?php echo $id; ?>">Home</a></li>
							<li><a href="index-1.php?id=<?php echo $id; ?>">About Us</a></li>
							<li id="menu_active"><a href="index-2.php?id=<?php echo $id; ?>">Account</a></li>
							<li><a href="index-3.php?id=<?php echo $id; ?>">Feedback</a></li>
							<li><a href="login.html">Logout</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	</div>
</div>
<div class="main">
	<div id="banner">
		<div class="text1">
			COMFORT<span>Guaranteed</span><p></p>
		</div>
	</div>
</div>
<!-- / header -->
<div class="main_2">
<!-- content -->
	<section id="content">
		<article class="col2 pad_left1">
			<div class="container">
				<div class="row">
				  <div class="col-sm-3">
					<div class="sidebar-nav">
					  <div class="navbar navbar-default" role="navigation">
						<div class="navbar-header">
						  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						  </button>
						</div>
						<div class="navbar-collapse collapse sidebar-navbar-collapse">
						  <ul class="nav navbar-nav">
							<li><a href="index-2.php?id=<?php echo $id ?>">Edit Your Profile</a></li>
							<li><a href="index-22.php?id=<?php echo $id ?>">Check Account Details</a> </li>
							<li class="active"><a href="#">Your E-Wallet</a></li>
							<li><a href="index-23.php?id=<?php echo $id; ?>">Booking History</a></li>
						  </ul>
						</div><!--/.nav-collapse -->
						<div class="box20">
					<div class="pad_20">
						<div class="wrapper">
							<p class="pad_bot2">Sometimes It's not about the destination.It's about the journey that gets you there. </p>
							<p><span class="right">-Victoria Orsingher</span>&nbsp;<br></p> </p>
							
						</div>
					</div>
				</div>
					  </div>
					</div>
		          </div>
				  <div class="col-sm-9">
				   <p class="account">Balance and Recharge</p>
					<div>
						 <p class="button" id="acc_but" onclick="toggle('chartdiv1')">Check Your Balance</p>
                         <div id="chartdiv1" style="max-width: 83%; display:none">
							<?php
								$con = mysqli_connect("localhost","root","","wp");
								$statment = "SELECT * from account WHERE uid = '$id'";
								$res = mysqli_query($con, $statment);
								if($res){
									while($row = mysqli_fetch_array($res)) {
									echo "<p class=\"h21\">Your balance is Rs.".$row['bal']."</p>";
									}
								}
								mysqli_close($con);
							?>
						 </div>
						 
						 <p class="button" id="acc_but" onclick="toggle('chartdiv2')">Recharge Your Account</p>
                         <div id="chartdiv2" style="max-width: 83%; display:none">
							<form action="" method="POST">
							<input type="text" name="recharge" id="recharge" placeholder="Amount of Recharge"/>
							<a href="" class="button2" style="margin-top:17px;margin-bottom:15px">Cancel</a>
							<a href="" class="button2" style="margin-top:17px;margin-bottom:15px" onClick="run()">Confirm</a>
							</form>
						 </div>
					</div>
					</div>	
				  </div>
				</div>
            </div>
		</article>
	</section>
<!-- / content -->
</div>
<div class="body2">
	<div class="main">
	</div>
</div>
<script type="text/javascript"> Cufon.now(); </script>
</body>
</html>