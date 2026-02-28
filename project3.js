function displayinfo(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let food = document.getElementById("food").value;
    let number = document.getElementById("number").value;
    let ex = document.getElementById("ex").value;
    let address = document.getElementById("address").value;
    let userinfo="Customer information: \n";
    if(name==""){
      alert("Name is required");
      return;
    }
    userinfo+="Name: "+ name + "\n";

    if(email==""){
      alert("email is required");
      return;
    }
    userinfo+="Email: "+ email + "\n";
    
    if(phone==""){
      alert("Phone Number is required");
      return;
    }
    userinfo+="Phone: "+ phone + "\n";

    if(food==""){
      alert("Food is required")
      return;
    }
    userinfo+="Food: "+food +"\n";
    
    if(number==""){
      alert("How Much of Food Do You Need..?")
      return;
    }
    userinfo+="Number Of Food: "+ number +"\n";
    
    
    userinfo+="Extra Food: "+ex +"\n";

    if(address==""){
      alert("Address is required");
      return;
    }
    userinfo+="Address: "+ address + "\n";
      alert(userinfo);
  }
  