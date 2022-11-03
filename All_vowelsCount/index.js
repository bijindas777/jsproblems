function getVowels(str) {
    var vowelsCount = 0;
    var a = 0;
    var e = 0;
    var i = 0;
    var o = 0;
    var u = 0;



  
    //turn the input into a string
    var string = str.toString();
  
    //loop through the string
    for (var k = 0; k <= string.length - 1; k++) {
  
    //if a vowel, add to vowel count
      if (string.charAt(k) == "a" ) {
         a += 1;
      }
      else if(string.charAt(k)=="e"){
         e += 1
      }
      else if(string.charAt(k)=="i"){
        i += 1
     }
     else if(string.charAt(k)=="o"){
        o += 1
     }
     else if(string.charAt(k)=="u"){
        u += 1
     }
     
    }
    // console.log(vowelsCount);
    console.log("In '" +string+ "' string number of vowels are:");
    console.log("a="+a);
    console.log("e="+e);
    console.log("i="+i);
    console.log("o="+o);
    console.log("u="+u);
  }

  getVowels("word")