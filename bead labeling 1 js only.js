my_widget_script =
{
  init:function (mode, json_data) {
    //this method is called when the form is being constructed
    // parameters
    // mode = if it equals 'view' than it should not be editable
    //        if it equals 'edit' then it will be used for entry
    //        if it equals 'view_dev' same as view,  does some additional checks that may slow things down in production
    //        if it equals 'edit_dev' same as edit,   does some additional checks that may slow things down in production

    // json_data will contain the data to populate the form with, it will be in the form of the data
    // returned from a call to to_json or empty if this is a new form.
    //By default it calls the parent_class's init.

    //TO DO write code specific to your form
    this.parent_class.init(mode, json_data);
    
    //CUSTOM FUNCTION TO highlight empty inputs

        //search the_form for all elements that are of type input
        $('#the_form').find("input").each(function () {
                if (!$(this).val()) { //if there is not a value for this input
                    $(this).css('background-color', 'yellow');
                }
        });
    // make sure the show hides work
    this.showHideGeneric("lst1");
    this.showHideGeneric("lst2");
  },

  to_json:function () {
    //should return a json string containing the data entered into the form by the user
    //whatever is return from the method is persisted in LabArchives.  must not be binary data.
    //called when the user hits the save button, when adding or editing an entry


    //TO DO write code specific to your form
    return this.parent_class.to_json();
  },

  from_json:function (json_data) {
    //populates the form with json_data
    //TO DO write code specific to your form
    this.parent_class.from_json(json_data);
  },

  test_data:function () {
    //during development this method is called to populate your form while in preview mode
    //TO DO write code specific to your form
    return this.parent_class.test_data();
  },

  is_valid:function (b_suppress_message) {
    //called when the user hits the save button, to allow for form validation.
    //returns an array of dom elements that are not valid - default is those elements marked as mandatory
    // that have no data in them.
    //You can modify this method, to highlight bad form elements etc...
    //LA calls this method with b_suppress_message and relies on your code to communicate issues to the user
    //Returning an empty array [] or NULL equals no error
    //TO DO write code specific to your form

    return this.parent_class.is_valid(b_suppress_message);
  },

  is_edited:function () {
    //should return true if the form has been edited since it was loaded or since reset_edited was called
    return this.parent_class.is_edited();
  },

  reset_edited:function () {
    //typically called have a save
    //TO DO write code specific to your form
    return this.parent_class.reset_edited();
  },
  
  showHideGeneric:function (x) {
    //will show extra fields that are inside a div container when ever "other" is selected in a select field
    //any other option will hide the field
    //get the field id in the function call
    var xField = document.getElementById(x); //get the element
    var xNumber = x.charAt(x.length-1); //get the number at the end of the id 
    var divName = "otherDiv"+xNumber; //used number to get/build corresponding div container name
    var y = document.getElementById(divName); //get div container
    if (xField.value === "Other" || xField.value === "Homemade") { //of select field is other set div visible
      y.style.visibility="visible";
    }
    else { //otherwise set div hidden
      y.style.visibility = "hidden";
    }
  },
  
  checkFailAlert:function (fieldId) {
    //function triggers a confirmation popup with a warning when any sample check question is answered no
    //passes the id of the select field in the function call
    var x = document.getElementById(fieldId); //get the field
    if (x.value === "false") { //check if answered no
      confirm("Confirm with lab manager or requester before continuing");//confirm if no else do nothing
    }
  },
  
  makeTitle:function () {
   $("#title").val("REQ-" + $("#req_num").val() + " " + $("#lst1").val() + " " + $("#pi").val())
  },
  callMultipleFunctions (x) {
  this.showHideGeneric(x);
  this.makeTitle();
}
}
