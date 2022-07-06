var form_script = null;
  try {
    $(document).ready(function () {
          
          
          // Create window var to store the locale for the datepicker
          window.datepicker_locale = '';
//***************************************************************************
//***************************************************************************
//***************************************************************************
//place your javascript code below and when you have it the way you want it
//just paste it into the LA Dev tool
//***************************************************************************
//***************************************************************************
//***************************************************************************
          form_script = my_widget_script =
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
  checkFailAlert:function (fieldId) {
    //function triggers a confirmation popup with a warning when question is answered no
    //passes the id of the select field in the function call
    var x = document.getElementById(fieldId); //get the field
    if (x.value === "false") { //check if answered no
      confirm("STOP. You must complete RVU SOP004 Appendix IV: Preparation of Sera Samples for HAI Processing, before proceeding");
    }
  },
  checkFailAlert2:function (fieldID) {
    var x = document.getElementById(fieldID); //get the field
    if (x.value === "false") { //check if answered no
      confirm("STOP. Answer must be yes. Complete HAI treatment first.");
    }
  },
  checkFailAlert3:function (fieldID) {
    var x = document.getElementById(fieldID); //get the field
    if (x.value === "false") { //check if answered no
      confirm("STOP. Confirm with manager before moving on.");
    }
  }
}
;
//**************************************************************************
//End of your code
//**************************************************************************
//**************************************************************************
          //the parent class functionality is added to your class below.
          form_script.parent_class = parent_form_script;
          //**************************************************************************
          //**************************************************************************
          //call to the init function in your script.  Note that you can change the mode in the call here.
          //your choices are view,view_dev,edit,edit_dev,  see the parent class source for details
          form_script.init("view", function() {return form_script.test_data()});


        }
    )

  }
  catch (e) {

  }

  parent_form_script.wiget_version_info ={"version":null,"created":null,"last_modified_at":null,"last_modified_by":null,"owned_by":"unknown"};
