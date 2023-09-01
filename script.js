function search () {
  const searchbox = document.getElementById("clubSearch").value.toUpperCase();
  const storeclubs = document.getElementById("club-wrapper");
  const clubs = document.querySelectorAll(".box");
  const clubname = storeclubs.getElementsByClassName("clubTitle");

  for(var i=0; i < clubname.length; i++){
    let match = clubs[i].getElementsByClassName('clubTitle')[0];

    if(match){
      let textvalue= match.textContent || match.innerHTML

      if (textvalue.toUpperCase().indexOf(searchbox) > -1){
        clubs[i].style.display = "";
      }else{
        clubs[i].style.display = "none";
      }
    }
    
  }
}