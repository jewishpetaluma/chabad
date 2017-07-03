
browser_version= parseInt(navigator.appVersion);
browser_type = navigator.appName;

if (browser_type == "Microsoft Internet Explorer" && (browser_version >= 4)) {
document.write("<link REL='stylesheet' HREF='https://lga.s3.amazonaws.com/monroeville/fs/frame.css' TYPE='text/css'>");
}

else  {
document.write("<link REL='stylesheet' HREF='https://lga.s3.amazonaws.com/monroeville/fs/calendarChrome.css' TYPE='text/css'>");
}
/*
Co_Tools.AttachEvent(window, "load", function()
{
*/	
setupCCDiv();
showGreet();
showAdText();
showBillAdd();
// });






function setupCCDiv()
{
	GetE("cc_div").style.display = "none";
	GetE("mail").style.display="none";
	GetE("bill").style.display="none";
	
	if(GetE("form1").Payment_Option[0].checked)
	{
		//show cc stuff
		GetE("cc_div").style.display = "";
		GetE("mail").style.display="none";
		GetE("bill").style.display="none";
		transfer()
	
	
	}
	else if(GetE("form1").Payment_Option[1].checked)
	{
		GetE("cc_div").style.display = "none";
		GetE("mail").style.display="";
		GetE("bill").style.display="none";
		transfer()
	}
	else if(GetE("form1").Payment_Option[2].checked)
	
	{
		GetE("cc_div").style.display = "none";
		GetE("mail").style.display="none";
		GetE("bill").style.display="";
		transfer()
	}
}

function showAdText()
{
	if (GetE("adTextBox").checked)
	GetE("adTextTR").style.display = "";
	
	else if (!GetE("adTextBox").checked)
	GetE("adTextTR").style.display = "none";
	
	}

function showGreet()
{
{	
	var selectbox = GetE("numOfGreet");
		var num = selectbox.options[selectbox.selectedIndex].value;
		//hide all
		for(i=1; i<=10; i++)
			GetE("greetings_"+i).style.display="none";
			
		//show the correct amount
		for(i=1; i<=num; i++)
			GetE("greetings_"+i).style.display="";
}

calcTotal()
}

function calcTotal()
{
	{
	var total = 0;
	
	if (GetE("family_sponsor").checked) total+=360; 
	if (GetE("new_year_greeting").checked) total+=36;
  	{	var select = GetE("back_cover_half"); total+= 1000 * (select.options[select.selectedIndex].value);	}
	{	var select = GetE("back_cover_quarter"); total+= 600 * (select.options[select.selectedIndex].value);	}
	{	var select = GetE("full_page"); total+= 1000 * (select.options[select.selectedIndex].value);	}
	{	var select = GetE("half_page"); total+= 600 * (select.options[select.selectedIndex].value);	}
	{	var select = GetE("quarter_page"); total+= 400 * (select.options[select.selectedIndex].value);	}
	
//	{	var select = GetE("numOfGreet"); total+= 18 * (select.options[select.selectedIndex].value);	}
	
	{ var v=18;
	  var select = GetE("numOfGreet"); 
	  var quant = (select.options[select.selectedIndex].value);
	  if (quant <=4) total+= v * (quant);
	  else if (quant <=9) total+= (v*(quant)-v);
	  else if (quant >=10) total+= v*8; 	 
	}	
	{ var v=500;
	  var select = GetE("banner_ad_ch"); 
	  var quant = (select.options[select.selectedIndex].value);
	  if (quant <= 5) total+= v * (quant);
	  else if (quant <=10) total+= (v*(quant)-v); 
	  else if (quant >=11) total+= v*10;
	}
	
	{ var v=275;
	  var select = GetE("half_banner"); 
	  var quant = (select.options[select.selectedIndex].value);
	  if (quant <= 5) total+= v * (quant);
	  else if (quant <=10) total+= (v*(quant)-v); 
	  else if (quant >=11) total+= v*10;
	}
	{ var v=200;
	  var select = GetE("business_card"); 
	  var quant = (select.options[select.selectedIndex].value);
	  if (quant <= 5) total+= v * (quant);
	  else if (quant <=10) total+= (v*(quant)-v); 
	  else if (quant >=11) total+= v*10;
	}
	{ var v=100;
	  var select = GetE("calendar_box"); 
	  var quant = (select.options[select.selectedIndex].value);
	  if (quant <= 5) total+= v * (quant);
	  else if (quant <=10) total+= (v*(quant)-v); 
	  else if (quant >=11) total+= v*10;
	}
	

	GetE("totalShow").innerHTML = total.toFixed(2);
	GetE("Total_Amount").value = total; 
	}
}


function showBillAdd()
{
	GetE("billingAddTR").style.display = "none";
	
	if(GetE("form1").billingAddress[0].checked)
	{
		GetE("billingAddTR").style.display = "none";
	}
	else if (GetE("form1").billingAddress[1].checked)
	{
	GetE("billingAddTR").style.display = "";	
	}
	
}

function transfer(type)
{
	var data = GetE(type+"_contact").value;	
	GetE(type+"_bill").value = data; 
}


function GetE(id)
 {return document.getElementById(id);}
