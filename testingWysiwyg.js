var assert = require('assert');
var chai = require('chai');
var React = require( "react/addons" );
var expect = chai.expect;
 var TestUtils = React.addons.TestUtils;
 var $ = require('jquery');




describe("A test suite", function() {
   beforeEach(function() { });
   afterEach(function() { });
   it('should pass and let there be success!', function() { expect(true).to.be.true; });
});



describe("wyswig-editor", function() {
   it('should add url on selected text', function() {

    /*document.execCommand('selectall',false, null);

    function simulateClick() {
  var event = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': false
  });
  
};
simulateClick();
$(".link-input").append("www.google.com");
 function simulateClick2() {
  var event = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': false
  });
  
};
simulateClick2();
var addedLink= document.getElementById("contenteditable").innerHTML;

    console.log("addedLink should be "+addedLink);*/

    $(document).ready(function(){
      document.execCommand('selectall',false, null);
    $("button.icon-link").click();
    $( "button.icon-link" ).trigger( "click" );
    $(".link-input").append("wp.pl"); 

    $("button.add-link").click();
     $( "button.add-link" ).trigger( "click" );



    });


    var addedLink= document.getElementById("contenteditable").innerHTML;

    console.log("addedLink should be "+addedLink);
     

    assert.equal(1, 1);

    

  });
});

//Need to: 1)INSERT TEXT, 2)SELECT it 3) ENter URL adress 4)Make a url link on that text, by triggering that button
//_calculateStartEndSelection , _checkIfURLhasBeenClicked





describe( "wyswig-editor", function() {
   
   it( "adding text", function() {

     $('#contenteditable').append('TEST');
      
      var yellow = document.getElementById("contenteditable").innerHTML;
      
      
      
      

      assert.equal(yellow, "<p>لان في, علعلعلعلعلعلعلعل فكان الجوي وحرمان</p>TEST");
   });

 });

describe( "wyswig-editor", function() {
   
   it( "adding url on selected text", function() {
    


/*var yellow = document.getElementById("contenteditable").innerHTML;
console.log(document);
console.log(JSON.stringify(document));
console.log(JSON.stringify(document.createRange));
console.log(JSON.stringify(typeof document.createRange));
console.log(typeof document.createRange);

console.log(navigator.userAgent);*/


document.execCommand('inserthtml',false," Yo ");

document.execCommand('selectall',false, null);

document.execCommand('createlink',false, "http://www.google.com");




var contentChanged = document.getElementById("contenteditable").innerHTML;
console.log( contentChanged);



   //"edit-link-input" , "add-link" , "delete-link"
      
     

      assert.equal(1, 1);
   });
   describe( "wyswig-editor", function(){
    it("getting selection", function(){

     





    /*  function getSelectionHtml() 
{
    var html = "";

    if (typeof window.getSelection != "undefined") 
        {
        var sel = window.getSelection();
        if (sel.rangeCount) 
            {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }
    return html;

}
var storeSelection = getSelectionHtml();
console.log("XXXXXXXXXXXX " + storeSelection);*/

/*
 document.execCommand('selectall',false, null);
var selObj = document.getSelection(); // RETURNED SELECTION AS AN OBJECT?
var selectedText = selObj.toString(); // Converted to a string
console.log("NEWEST "+selectedText);
var range = document.createRange();
*/


/*range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);*/
    console.log("0000000000000000000000000");
    

    var docRange = document.createRange();
    var textNode = document.getElementById("contenteditable");
    console.log(">>>>>>",textNode.innerHTML);

    console.log(1);
    var startOffset = 2;
    console.log("######", textNode.firstChild);
    docRange.setStart(textNode, startOffset);
    console.log(2);

    var endOffset = document.getElementsByTagName("p").length;
    console.log("$$$$$$222222", endOffset);
    docRange.setEnd(textNode, endOffset);
    console.log(3);

    var selObj  = document.getSelection();
    var selectedText = selObj.toString();

    console.log("Neweset " + selectedText);
    assert.equal(1,1);

  });


   });

 });
