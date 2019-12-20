//  window.onload = function(){

//       alert("Hello");

//  }
//alert("hello");

function bookFinder()
{
    //document.getElementById("result").innerHTML = "Result will be displayed here";
    var userInput = document.getElementById("userInput").value; 
  //  alert(userInput);
   var bookResult = document.getElementById("result") //userInput;
   $.ajax({
     type: "GET",
     url: " https://www.googleapis.com/books/v1/volumes?q="+userInput,
     dataType: "JSON",
     success: function(book)
     {
       console.log(book);
       for(var i=0;i<book.items.length;i++)
       {
         //div for media class
         WrapperDiv = document.createElement("div");
         WrapperDiv.className = "media";
         WrapperDiv.style.marginTop = "50px";
         WrapperDiv.title = "Click to know more";
         // creating image
        var image = document.createElement('img');
        image.src = book.items[i].volumeInfo.imageLinks.thumbnail;
        image.className = "mr-3";
        //creating div for header
        var Div = document.createElement("div");
        Div.className = "media-body";
        //book title
        var head = document.createElement("h3");
        head.innerHTML = book.items[i].volumeInfo.title;
        head.className = "mt-0";
        //book author 
        var author = document.createElement("h4");
        author.innerHTML = "Authors:";
        for(var j=0;j<book.items[i].volumeInfo.authors.length;j++)
        {
          author.innerHTML = author.innerHTML+" "+book.items[i].volumeInfo.authors[j];
        }
        //Page Count 
        var pageCount = document.createElement("h5");
        pageCount.innerHTML = "Pages :"+book.items[i].volumeInfo.pageCount;
        //create description div
        var desc = document.createElement("span");
         var descVar = i;
                 //alert(descVar);
         desc.setAttribute("id",descVar);
         desc.className = "popuptext";
         var descWrapper = document.createElement("div");
         descWrapper.className = "popup";
         descWrapper.appendChild(desc);
         //desc.setAttribute("id","Desc"+i);
         //alert(document.getElementById("Desc"+i));
         //showing description on click
        //adding to DOM
        Div.appendChild(head);
        Div.appendChild(author);
        Div.appendChild(pageCount);
        Div.appendChild(descWrapper);
        WrapperDiv.appendChild(image);
        WrapperDiv.appendChild(Div);
        //document.getElementById(result).appendChild(image);
        var line = document.createElement("hr");
        WrapperDiv.appendChild(line);
        bookResult.appendChild(WrapperDiv);

        WrapperDiv.onclick = function()
        {
          console.log(this.children[1].children[3].children[0]);
          this.children[1].children[3].children[0].innerHTML = book.items[this.children[1].children[3].children[0].id].volumeInfo.description;
          this.children[1].children[3].children[0].classList.toggle("show");
        };

        //bookResult.appendChild(line);
       }
     }
   })
   return false;
}