
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

     





    
   
var element = document.querySelector("div");
    



var setSelectionRange = function(element, start, end) {
    var rng = document.createRange(),
        sel = getSelection(),
        n, o = 0,
        tw = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, null);
    while (n = tw.nextNode()) {
        o += n.nodeValue.length;
        if (o > start) {
            rng.setStart(n, n.nodeValue.length + start - o);
            start = Infinity;
        }
        if (o >= end) {
            rng.setEnd(n, n.nodeValue.length + end - o);
            break;
        }
    }
    sel.removeAllRanges();
    sel.addRange(rng);
};

setSelectionRange(element, 3, 11);






    var selObj = window.getSelection();
    

    console.log("Newest " + selObj)


    assert.equal(1,1);

  });


   });

 

});
     





