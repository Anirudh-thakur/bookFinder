function bookFinder()
{
    //document.getElementById("result").innerHTML = "Result will be displayed here";
    var userInput = document.getElementById("userInput").value; 
  //  alert(userInput);
   var bookResult = document.getElementById("result") 

    //remove existing content on page

   //AJAX request to book API
   $.ajax({
     type: "GET",
     url: " https://www.googleapis.com/books/v1/volumes?q="+userInput,
     dataType: "JSON",
     success: function(book)
     {
       console.log(book); // to get the book JSON in console

       // adding multiple book divs on home page
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
        var author = document.createElement("h5");
        author.innerHTML = "Authors:";
        for(var j=0;j<book.items[i].volumeInfo.authors.length;j++)
        {
          author.innerHTML = author.innerHTML+" "+book.items[i].volumeInfo.authors[j]+",";
        }

        //published date
        var publishDate = document.createElement("p");
        publishDate.innerHTML = "Published Date: "+book.items[i].volumeInfo.publishedDate;

        //Page Count 
        // var pageCount = document.createElement("p");
        // pageCount.innerHTML = "Pages :"+book.items[i].volumeInfo.pageCount;

        //create description div
        var desc = document.createElement("span");
         var descVar = i;
         desc.setAttribute("id",descVar);
         desc.className = "popuptext";
         var descWrapper = document.createElement("div");
         descWrapper.className = "popup";
         descWrapper.appendChild(desc);
         //desc.setAttribute("id","Desc"+i);
         //alert(document.getElementById("Desc"+i));


         //create preview link 
         var link = document.createElement("a");
         link.href = book.items[i].volumeInfo.previewLink;
         link.target="_blank";
         link.className = "text-success nounderline";
         link.innerHTML ="VIEW INFO";

         //wrap preview link in button
         var LinkButton = document.createElement("button");
         LinkButton.className = "btn btn-dark";
         LinkButton.appendChild(link);

        //adding to DOM
        Div.appendChild(head);
        Div.appendChild(author);
        Div.appendChild(publishDate);
        //Div.appendChild(pageCount);
        Div.appendChild(LinkButton);
        Div.appendChild(descWrapper);
        WrapperDiv.appendChild(image);
        WrapperDiv.appendChild(Div);
        //document.getElementById(result).appendChild(image);
        var line = document.createElement("hr");
        WrapperDiv.appendChild(line);
        bookResult.appendChild(WrapperDiv);

        //creating onclick for pop up description
        WrapperDiv.onclick = function()
        {
          //console.log(this.children[1].children[5].children[0]);
          this.children[1].children[4].children[0].innerHTML = book.items[this.children[1].children[4].children[0].id].volumeInfo.description;
          this.children[1].children[4].children[0].classList.toggle("show");
        };

        //bookResult.appendChild(line);
       }
     }
   })
   return false;
}