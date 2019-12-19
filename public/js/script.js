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
        var desc = document.createElement("p");
        desc.innerHTML = book.items[i].volumeInfo.description;
         desc.style.visibility = "hidden";
         //desc.setAttribute("id","Desc"+i);
         //alert(document.getElementById("Desc"+i));
         //showing description on click
        // WrapperDiv.onclick = function()
        // {
        //   //desc.style.visibility = "visible";
        //   alert("hello");
        // };
        //adding to DOM
        Div.appendChild(head);
        Div.appendChild(author);
        Div.appendChild(pageCount);
        Div.appendChild(desc);
        WrapperDiv.appendChild(image);
        WrapperDiv.appendChild(Div);
        //document.getElementById(result).appendChild(image);
        var line = document.createElement("hr");
        WrapperDiv.appendChild(line);
        bookResult.appendChild(WrapperDiv);

        //bookResult.appendChild(line);
       }
     }
   })
   return false;
}